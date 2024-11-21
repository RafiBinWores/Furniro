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
          500: '#F4F5F7',
          600: '#3A3A3A',
          700: '#898989',
          800: '#B0B0B0',
          900: '#242424',
        },
      },
    },
  },
  plugins: [],
}