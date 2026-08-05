'use client';

import { useState, useEffect } from 'react';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0">
            <img
              src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_40,w_40,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png"
              alt="Immortallis"
              className="rounded-full w-10 h-10 hover:scale-110 transition-transform"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-white hover:text-orange-400 transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition-colors hover:scale-110 transform"
                title={social.label}
              >
                <i className={`fab fa-${social.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-orange-500/30">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-white hover:text-orange-400 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-slate-700">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-orange-400 transition-colors"
                    title={social.label}
                  >
                    <i className={`fab fa-${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-16"
        style={{
          background: 'linear-gradient(135deg, #0f766e 0%, #0ea5e9 50%, #10b981 100%)',
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-bounce-slow"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-glow"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-7xl md:text-8xl font-black text-white mb-4 drop-shadow-2xl">
            Stephen Gault
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-8 rounded-full animate-slide-up"></div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
            UI/UX Developer & Creative Technologist
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-12 drop-shadow-md max-w-2xl mx-auto leading-relaxed">
            Building beautiful digital experiences with code, creativity, and a healthy dose of humor
          </p>

          {/* CTA Button */}
          <a
            href="#personality"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl mb-12 animate-scale-in"
          >
            Explore My Work →
          </a>

          {/* Scroll Indicator */}
          <div className="mt-16 flex justify-center animate-bounce-slow">
            <a
              href="#personality"
              className="text-white opacity-75 hover:opacity-100 transition-opacity"
            >
              <i className="fas fa-chevron-down text-4xl"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
