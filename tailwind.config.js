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
        'black-text': '#000000ff',
        // 'black-opacity': ''
        'light-bg': '#F7F8F1',
        'grey': '#5B5B5B',
        'dark-blue': '#1E5175',
      },
      fontFamily: {
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
        yumincho: ['YoMincho', 'serif'],
        yugothic: ['YuGothic', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        xm: '10px',
        sm: '12px',
        smd: '14px',
        nm: '15px',
        base:'16px',
        basemd:'18px',
        baselg:'20px',
        md: '24px', 
        xmd:'26px', 
        xlg:'28px', 
        lg: '32px',
        xl: '36px', 
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
          xl: '1200px',   // from 1200px and up, use max 1200px
          md: '768px',
        },
      },
    },
  },
  plugins: [],
}