/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF7F0F',
        baseColor: '#FF7F0F',
        DEFAULT:"#FF7F0F"
      },
      fontSize: {
        default: '1.1rem',
      },
    },
  },
  plugins: [],
}
