/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
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
    },
  },
  plugins: [],
}
