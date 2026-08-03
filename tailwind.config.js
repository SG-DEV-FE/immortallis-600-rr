/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
        'funky-gradient': 'linear-gradient(40deg, #ff6ec4, #7873f5)',
        'ps-gradient': 'linear-gradient(var(--ps-blue), var(--ps-yellow), var(--ps-red))',
        'bg-pattern': "url(https://res.cloudinary.com/stegault/image/upload/q_auto:eco/v1559727685/85004.webp)",
      },
    },
  },
  plugins: [],
}
