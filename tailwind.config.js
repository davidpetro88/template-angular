/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'open-sans': ['Open Sans', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
      },
      colors: {
        primary: '#673BE0',
      }
    },
  },
  plugins: [],
}

