/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
      fontFamily: {
        // inter: ['Inter', 'sans-serif'],
        // titillium: ['"Titillium Web"', 'sans-serif'],
        zen: ['"Zen Maru Gothic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}