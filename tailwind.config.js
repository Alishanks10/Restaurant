/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['GopherText-Regular', 'sans-serif']
      },
      colors: {
        blue: {
          575: '#3366FF'
        },
        red: {
          575: '#D53F3F'
        }
      },
    },
  },
  plugins: [],
}

