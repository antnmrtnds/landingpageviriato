/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#191710',
          overlay: 'rgba(25, 23, 16, 0.95)',
          accent: '#d29d79',
        },
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': '54px',
        'title': '74px',
        'body': '18px',
        'stat': '52px',
      },
      spacing: {
        'header': '80px',
        'section': '140px',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      maxWidth: {
        'mobile': '320px',
        'tablet': '768px',
        'small-desktop': '1024px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
}

