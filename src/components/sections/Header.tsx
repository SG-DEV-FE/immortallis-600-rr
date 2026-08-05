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
            ? 'bg-white/95 backdrop-blur-lg shadow-lg'
            : 'bg-transparent'
        }`}>
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex-shrink-0 group">
            <img
              src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_40,w_40,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png"
              alt="Immortallis"
              className={`rounded-full w-10 h-10 transition-all duration-300 group-hover:scale-110 ${
                isScrolled ? 'shadow-md' : ''
              }`}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`font-semibold text-sm transition-all duration-300 relative group ${
                  isScrolled ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-orange-400'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300" />
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
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden pt-16 bg-gradient-to-br from-slate-50 via-white to-blue-50"
      >
        {/* Premium Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient mesh background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 opacity-60"></div>
           
          {/* Large animated gradient blobs */}
          <div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            style={{ animation: 'float 12s ease-in-out infinite' }}
          ></div>
          <div 
            className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            style={{ animation: 'float 14s ease-in-out infinite reverse' }}
          ></div>
          <div 
            className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
            style={{ animation: 'float 16s ease-in-out infinite' }}
          ></div>
          <div 
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
            style={{ animation: 'float 18s ease-in-out infinite reverse' }}
          ></div>

          {/* Subtle animated grid */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#0ea5e9" strokeWidth="0.3" opacity="0.2"/>
              </pattern>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" opacity="0.1" />
             
            {/* Animated accent lines */}
            <g opacity="0.15">
              <line x1="0" y1="30%" x2="100%" y2="30%" stroke="url(#lineGradient1)" strokeWidth="1" style={{ animation: 'slideRight 20s linear infinite' }} />
              <line x1="100%" y1="70%" x2="0" y2="70%" stroke="url(#lineGradient2)" strokeWidth="1" style={{ animation: 'slideLeft 24s linear infinite' }} />
            </g>
            <defs>
              <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ea5e9" stopOpacity="1" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full opacity-30" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full opacity-25" style={{ animation: 'float 11s ease-in-out infinite', animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/2 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-20" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-25" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '3s' }}></div>

          {/* Light ray effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-white via-transparent to-transparent opacity-20 pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="text-sm font-bold text-blue-600 tracking-widest uppercase">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-slate-900 mb-6 tracking-tight leading-none">
            Stephen
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 text-transparent bg-clip-text">
              Gault
            </span>
          </h1>

          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 mx-auto mb-10 rounded-full"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-700 mb-6 tracking-tight">
            UI/UX Developer & Creative Technologist
          </h2>

          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful digital experiences where design meets code. 
            Specializing in modern web technologies and intuitive user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-300 animate-scale-in"
            >
              View My Work
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-xl border-2 border-slate-900 hover:bg-slate-50 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '100ms' }}
            >
              Get In Touch
              <span>↓</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center animate-bounce-slow">
            <a
              href="#projects"
              className="text-slate-500 hover:text-slate-900 transition-colors"
            >
              <i className="fas fa-chevron-down text-4xl"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
