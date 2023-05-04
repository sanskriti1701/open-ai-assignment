/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        amber: colors.amber,
        emerald: colors.emerald,
        cyan:colors.cyan,
        sky:colors.sky,
        indigo:colors.indigo,
      }
    },
  },
  plugins: [],
  
}

