/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agri-green': '#15803d',
        'agri-dark': '#14532d',
        'agri-light': '#16a34a',
        'agri-pale': '#f0fdf4',
        'agri-mid': '#dcfce7',
      }
    },
  },
  plugins: [],
}
