/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        golden: '#B88E2F',
        peach: '#FFF3E3',
        customGray: {
          100: '#9F9F9F',
          200: '#D9D9D9',
          300: '#333333',
          400: '#666666',
        },
      },
    },
  },
  plugins: [],
}