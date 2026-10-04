/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#FFFDF7',
          text: '#1A1A1A',
          yellow: '#FFD700',
          pink: '#FF3366',
        },
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      boxShadow: {
        'neo': '4px 4px 0px #1A1A1A',
        'neo-lg': '6px 6px 0px #1A1A1A',
        'neo-sm': '2px 2px 0px #1A1A1A',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}