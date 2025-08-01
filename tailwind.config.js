/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        yumincho: ['YuMincho', 'serif'],
        yugothic: ['YuGothic', 'serif'],
      },
      colors: {
        'primary-text': '#4C8B6D',
        'black-text': '#000000',
        'light-bg': '#F7F8F1',
      },
      fontFamily: {
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
        yumincho: ['YoMincho', 'serif'],
        yugothic: ['YuGothic', 'serif'],
      },
      fontSize: {
        sm: '12px',
        nm: '14px',
        base:'16px',
        md: '17px', 
        lg: '28px',
        xl: '36px',
        xxl: '48px',   
          
      },
      letterSpacing: {
        tightest: '0.3px', // 👈 add your custom spacing
        low: '0.3px', // 👈 add your custom spacing
      },
      boxShadow: {
        'custom-green': '15px 15px 0 #C3F1D6',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '90%', // for all screens by default
          xl: '1250px',   // from 1280px and up, use max 1200px
        },
      },
    },
  },
  plugins: [],
}