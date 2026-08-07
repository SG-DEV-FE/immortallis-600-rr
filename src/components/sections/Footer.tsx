'use client';

import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="text-white bg-linear-to-r from-teal-700 to-teal-800">
      <div className="container px-4 py-16 mx-auto">
        {/* Main Footer Content */}
        <div className="grid gap-12 mb-12 md:grid-cols-3">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="mb-4 text-2xl font-bold">SG-DEV</h3>
            <p className="text-sm leading-relaxed text-white/80">
              15 years of proven UI/UX and software expertise. Specializing in enterprise solutions, digital architecture, and innovative web technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-1">
            <h4 className="mb-4 text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-smooth">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-white/80 hover:text-white transition-smooth">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-smooth">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in delay-2">
            <h4 className="mb-4 text-lg font-semibold">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-smooth hover-scale"
                  title={social.label}
                >
                  <i className={`fab fa-${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/20"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/70">
            © {currentYear} SG-DEV. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-6 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-smooth hover-lift"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
}
