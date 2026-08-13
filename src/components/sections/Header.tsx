'use client';

import { useState, useEffect } from 'react';
import { SOCIAL_LINKS, NAV_LINKS } from '@/lib/constants';
import WeatherWidget from './WeatherWidget';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past hero (approximately 100vh)
      setShowNav(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle smooth scroll navigation without hash
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Clean URL without hash
      window.history.replaceState(null, '', '/');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Navigation - Hidden until after hero */}
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          showNav
            ? 'opacity-100 bg-white/95 backdrop-blur-lg shadow-lg pointer-events-auto'
            : 'opacity-0 bg-transparent pointer-events-none'
        }`}>
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="/" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex-shrink-0 group"
          >
            <img
              src="https://res.cloudinary.com/stegault/image/upload/c_scale,h_40,w_40,f_auto,q_auto:eco/v1561378466/brandicon_xzpby6.png"
              alt="Immortallis"
              className={`rounded-full w-10 h-10 transition-all duration-300 group-hover:scale-110 ${
                showNav ? 'shadow-md' : ''
              }`}
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-semibold text-sm transition-all duration-300 relative group text-slate-900 hover:text-orange-500"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Weather Widget & Social Links */}
          <div className="hidden md:flex items-center gap-6">
            <WeatherWidget />
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 hover:text-orange-500 transition-colors hover:scale-110 transform"
                  title={social.label}
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Weather & Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <WeatherWidget />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
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
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4">
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
        className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
      >
        {/* Bokeh Dust Drift Background */}
        <div
          data-aifx="particle-drift"
          data-aifx-colors="#f97316,#fbbf24,#0f766e"
          data-aifx-turbulence="0.23"
          data-aifx-glow="0.17"
          data-aifx-twinkle="0.29"
          data-aifx-mouse="0"
          className="absolute inset-0 -z-10 pointer-events-none"
          aria-hidden="true"
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
          <div className="mb-6 inline-block">
            <span className="text-sm font-bold text-white tracking-widest uppercase drop-shadow-lg">Welcome to my portfolio</span>
          </div>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.3)' }}>
            Stephen
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 text-transparent bg-clip-text drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(249,115,22,0.4)' }}>
              Gault
            </span>
          </h1>

          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-400 to-amber-400 mx-auto mb-10 rounded-full shadow-lg"></div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 tracking-tight drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
            UI/UX Developer & Creative Technologist
          </h2>

          <p className="text-lg md:text-xl text-white mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
            Crafting beautiful digital experiences where design meets code. 
            Specializing in modern web technologies and intuitive user interfaces.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-300 animate-scale-in shadow-xl"
            >
              View My Work
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </a>
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: '100ms' }}
            >
              Get In Touch
              <span>↓</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 flex justify-center animate-bounce-slow">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, '#projects')}
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
