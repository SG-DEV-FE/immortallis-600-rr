import React, { useState } from 'react';
import './contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' },
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus(prev => ({ ...prev, submitting: true }));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully! I\'ll get back to you soon.' },
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: true, msg: 'Something went wrong. Please try again.' },
      });
    }
  };

  return (
    <section id='contactMe' className='py-5'>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        {/* Header */}
        <div className='section-header'>
          <h2 className='section-title'>Get In Touch</h2>
          <p className='section-subtitle'>
            Have a question or want to collaborate? I'd love to hear from you.
          </p>
        </div>

        {/* Status Messages */}
        {status.submitted && (
          <div
            className={`alert ${status.info.error ? 'alert-error' : 'alert-success'}`}
            role='alert'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className='alert-icon'>
                {status.info.error ? '❌' : '✅'}
              </span>
              <span>{status.info.msg}</span>
            </div>
          </div>
        )}

        {/* Form */}
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          netlify-recaptcha='true'
          onSubmit={handleSubmit}
          className='contact-form'
          style={{ padding: '2rem' }}>
          
          {/* Honeypot field (hidden) */}
          <input type='hidden' name='form-name' value='contact' />
          <p className='hidden'>
            <label>
              Don't fill this out if you're human:{' '}
              <input name='bot-field' type='text' tabIndex='-1' autoComplete='off' />
            </label>
          </p>

          {/* Name Field */}
          <div className='form-group'>
            <label htmlFor='name' className='form-label'>
              Your Name <span className='required'>*</span>
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder='John Doe'
              className={`form-input ${errors.name ? 'error' : ''}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id='name-error' className='error-message'>
                <span>⚠️</span> {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className='form-group'>
            <label htmlFor='email' className='form-label'>
              Your Email <span className='required'>*</span>
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='john@example.com'
              className={`form-input ${errors.email ? 'error' : ''}`}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id='email-error' className='error-message'>
                <span>⚠️</span> {errors.email}
              </p>
            )}
          </div>

          {/* Subject Field */}
          <div className='form-group'>
            <label htmlFor='subject' className='form-label'>
              Subject <span className='required'>*</span>
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='What is this about?'
              className={`form-input ${errors.subject ? 'error' : ''}`}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id='subject-error' className='error-message'>
                <span>⚠️</span> {errors.subject}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className='form-group'>
            <label htmlFor='message' className='form-label'>
              Message <span className='required'>*</span>
            </label>
            <textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder='Tell me more about your project or inquiry...'
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id='message-error' className='error-message'>
                <span>⚠️</span> {errors.message}
              </p>
            )}
            <span className='char-count'>{formData.message.length} characters</span>
          </div>

          {/* reCAPTCHA v3 (Invisible) */}
          <div style={{ marginBottom: '1.5rem' }} data-netlify-recaptcha='true'></div>

          {/* Submit Button */}
          <button
            type='submit'
            disabled={status.submitting}
            className='submit-btn'>
            {status.submitting ? (
              <>
                <span className='spinner'>⏳</span>
                Sending...
              </>
            ) : (
              <>
                <span>Send Message</span>
                <span>✉️</span>
              </>
            )}
          </button>

          {/* Privacy Notice */}
          <div className='privacy-notice'>
            <p>
              This form is protected by reCAPTCHA and the Google{' '}
              <a href='https://policies.google.com/privacy' target='_blank' rel='noopener noreferrer'>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href='https://policies.google.com/terms' target='_blank' rel='noopener noreferrer'>
                Terms of Service
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
