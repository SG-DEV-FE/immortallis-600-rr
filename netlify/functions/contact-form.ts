// Rate limiting - track submissions per IP
const submissionTracker = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = 5; // max submissions per IP
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

type NetlifyEvent = {
  httpMethod: string;
  body: string | null;
  headers: Record<string, string>;
};

type NetlifyResponse = {
  statusCode: number;
  body: string;
};

function getClientIP(headers: Record<string, string>): string {
  return (
    headers['x-forwarded-for']?.split(',')[0] ||
    headers['x-client-ip'] ||
    headers['cf-connecting-ip'] ||
    'unknown'
  );
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = submissionTracker.get(ip);

  if (!existing || now > existing.resetTime) {
    // First submission or window expired
    submissionTracker.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (existing.count >= RATE_LIMIT) {
    return false;
  }

  existing.count++;
  return true;
}

function validateFormData(
  data: Record<string, string>
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check required fields
  if (!data.name?.trim()) errors.push('Name is required');
  if (!data.email?.trim()) errors.push('Email is required');
  if (!data.subject?.trim()) errors.push('Subject is required');
  if (!data.message?.trim()) errors.push('Message is required');

  // Validate email format
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push('Invalid email format');
    }

    // Prevent email header injection (newlines, carriage returns, etc.)
    if (/[\r\n%0a%0d]/i.test(data.email)) {
      errors.push('Invalid email format');
    }

    // Check for suspicious email patterns
    if (
      data.email.toLowerCase().includes('localhost') ||
      data.email.includes('<') ||
      data.email.includes('>')
    ) {
      errors.push('Invalid email format');
    }
  }

  // Validate message length (prevent extremely short messages)
  if (data.message && data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }

  // Check all fields for suspicious patterns (XSS, SQL injection, header injection)
  const suspiciousPatterns = [
    /(<|%3C)(script|img|iframe|embed|object|svg)/i, // Script injection attempts
    /javascript:/i, // JavaScript protocol
    /on\w+\s*=/i, // Event handlers (onload, onclick, etc.)
    /data:/i, // Data URIs
    /vbscript:/i, // VBScript
    /[\r\n%0a%0d]/i, // Line breaks (email header injection)
    /union.*select|select.*from|drop\s+table|insert\s+into|update\s+|delete\s+from/i, // SQL injection
  ];

  for (const field of ['name', 'email', 'subject', 'message']) {
    const value = data[field] || '';
    for (const pattern of suspiciousPatterns) {
      if (pattern.test(value)) {
        errors.push(`${field} contains suspicious content`);
        break;
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

export const handler = async (event: NetlifyEvent): Promise<NetlifyResponse> => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse form data
    const params = new URLSearchParams(event.body || '');
    const formData: Record<string, string> = {};
    params.forEach((value, key) => {
      formData[key] = value;
    });

    // Check honeypot field - should be empty if legitimate
    if (formData['bot-field']) {
      // Bot filled honeypot field - silently reject but return success
      // This prevents bots from knowing they were caught
      console.warn('Honeypot field filled - potential spam submission');
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true, message: 'Form submitted successfully' }),
      };
    }

    // Remove form-name field from data
    const { 'form-name': formName, ...contactData } = formData;

    if (formName !== 'contact') {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid form' }),
      };
    }

    // Get client IP for rate limiting
    const clientIP = getClientIP(event.headers);

    // Check rate limit
    if (!checkRateLimit(clientIP)) {
      return {
        statusCode: 429,
        body: JSON.stringify({ error: 'Too many submissions. Please try again later.' }),
      };
    }

    // Validate form data
    const validation = validateFormData(contactData);
    if (!validation.valid) {
      return {
        statusCode: 400,
        body: JSON.stringify({ errors: validation.errors }),
      };
    }

    // If all validation passes, process the form submission
    // This function acts as middleware for validation
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Form submitted successfully' }),
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
