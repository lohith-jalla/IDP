/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        kalam:['kalam'],
        quick:['Quicksand']
      },
      colors: {
        blue: '#00AFF5', 
      },
    },
  },
  plugins: [],
}

