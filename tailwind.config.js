/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        baseColor: '#6366F1',
      },
      fontSize:{
        default:'1.1rem'
      }
    },
  },
  plugins: [],
}
