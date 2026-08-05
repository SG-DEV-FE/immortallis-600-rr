'use client';

import { useState } from 'react';
import './contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
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

  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: '' } });

    // Validate
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Please fix the errors above' },
      });
      return;
    }

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
        setFormData({ name: '', email: '', subject: '', message: '' });
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: 'Message sent successfully!' },
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: 'An error occurred. Please try again.' },
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Network error. Please try again.' },
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="contact-form">
            {status.info.msg && (
              <div
                className={`alert ${
                  status.info.error ? 'alert-error' : 'alert-success'
                }`}
              >
                <i
                  className={`fas fa-${
                    status.info.error ? 'exclamation-circle' : 'check-circle'
                  } alert-icon`}
                ></i>
                {status.info.msg}
              </div>
            )}

            {/* @ts-ignore */}
            <form onSubmit={handleSubmit} name="contact" netlify="true">
              <div className="form-group animate-fade-in">
                <label htmlFor="name" className="form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your name"
                  disabled={status.submitting}
                />
                {errors.name && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="form-group animate-fade-in delay-1">
                <label htmlFor="email" className="form-label">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="your@email.com"
                  disabled={status.submitting}
                />
                {errors.email && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="form-group animate-fade-in delay-2">
                <label htmlFor="subject" className="form-label">
                  Subject <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`form-input ${errors.subject ? 'error' : ''}`}
                  placeholder="What is this about?"
                  disabled={status.submitting}
                />
                {errors.subject && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.subject}
                  </div>
                )}
              </div>

              <div className="form-group animate-fade-in delay-3">
                <label htmlFor="message" className="form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Your message here..."
                  disabled={status.submitting}
                ></textarea>
                {errors.message && (
                  <div className="error-message">
                    <i className="fas fa-exclamation-circle"></i>
                    {errors.message}
                  </div>
                )}
                <span className="char-count">
                  {formData.message.length} characters
                </span>
              </div>

              <button
                type="submit"
                className="submit-btn animate-fade-in delay-4"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <i className="fas fa-spinner spinner"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>

              <div className="privacy-notice">
                By submitting this form, you agree to our privacy policy. 
                We'll only use your information to respond to your message.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
