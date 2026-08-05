'use client';

import { SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-r from-teal-700 to-teal-800 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Immortallis</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              A digital space for sharing photography, miniatures, and creative work.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in delay-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-smooth hover-scale"
                  title={social.label}
                >
                  <i className={`fab fa-${social.icon} text-lg`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/70 text-sm">
            © {currentYear} Immortallis. All rights reserved.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-smooth hover-lift"
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
