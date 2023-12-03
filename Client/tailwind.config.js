/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary':'#1f1f1f'
      }
    },
    screens: {
        'sm': '576px', 
        'md': '768px', 
        'lg': '992px',
        'xl': '1200px',
    },
    container: {
      center: true,
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

