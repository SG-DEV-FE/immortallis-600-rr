/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern primary palette
        'teal': {
          600: '#0d9488',
          700: '#0f766e',
          800: '#134e4a',
        },
        'emerald': {
          500: '#10b981',
          600: '#059669',
        },
        'slate': {
          50: '#f8fafc',
          100: '#f1f5f9',
          600: '#475569',
          900: '#0f172a',
        },
        'sky': {
          500: '#0ea5e9',
        },
        'orange': {
          500: '#f97316',
        },
        'amber': {
          400: '#fbbf24',
        },
        // Legacy colors (kept for compatibility)
        'theme-1': '#1c8554',
        'theme-2': '#2ea06b',
        'ps-red': '#ff1900',
        'ps-blue': '#0045ab',
        'ps-lightblue': '#007f97',
        'ps-yellow': '#ff9a00',
        'instagram': '#d6249f',
        'linkedin': '#217bc1',
        'twitter': '#35ccff',
        'sunset-red': '#fd5e53',
        'sunset-orange': '#ff8c4c',
        'sunset-yellow': '#fed574',
      },
      backgroundImage: {
        'modern-gradient': 'linear-gradient(135deg, #0f766e, #10b981)',
        'hero-gradient': 'linear-gradient(135deg, #0f766e 0%, #0ea5e9 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
        'funky-gradient': 'linear-gradient(40deg, #ff6ec4, #7873f5)',
        'ps-gradient': 'linear-gradient(var(--ps-blue), var(--ps-yellow), var(--ps-red))',
        'bg-pattern': "url(https://res.cloudinary.com/stegault/image/upload/q_auto:eco/v1559727685/85004.webp)",
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce-slow': 'bounceSlowly 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceSlowly: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-hover': '0 8px 32px 0 rgba(31, 38, 135, 0.52)',
      },
      fontSize: {
        // 8px-aligned accessible typography scale (base: 16px = 1rem)
        'xs': ['14px', { lineHeight: '20px', letterSpacing: '-0.3px' }],        // 14px / 20px (min readable)
        'sm': ['16px', { lineHeight: '24px', letterSpacing: '-0.4px' }],        // 16px / 24px (body text)
        'base': ['18px', { lineHeight: '28px', letterSpacing: '-0.4px' }],      // 18px / 28px (body emphasis)
        'lg': ['20px', { lineHeight: '28px', letterSpacing: '-0.4px' }],        // 20px / 28px (subtitle)
        'xl': ['24px', { lineHeight: '32px', letterSpacing: '-0.5px' }],        // 24px / 32px (section label)
        '2xl': ['28px', { lineHeight: '36px', letterSpacing: '-0.5px' }],       // 28px / 36px (card title)
        '3xl': ['32px', { lineHeight: '40px', letterSpacing: '-0.6px' }],       // 32px / 40px (subheading)
        '4xl': ['40px', { lineHeight: '48px', letterSpacing: '-0.6px' }],       // 40px / 48px (heading)
        '5xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.7px' }],       // 48px / 56px (large heading)
        '6xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.8px' }],       // 56px / 64px (hero heading)
        '7xl': ['64px', { lineHeight: '72px', letterSpacing: '-0.9px' }],       // 64px / 72px (display)
      },
      spacing: {
        // 8px grid-aligned spacing scale
        '0.5': '4px',
        '1': '8px',
        '1.5': '12px',
        '2': '16px',
        '2.5': '20px',
        '3': '24px',
        '3.5': '28px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '7': '56px',
        '8': '64px',
        '9': '72px',
        '10': '80px',
        '12': '96px',
        '14': '112px',
        '16': '128px',
        '20': '160px',
        '24': '192px',
        '28': '224px',
        '32': '256px',
      },
    },
  },
  plugins: [],
};
