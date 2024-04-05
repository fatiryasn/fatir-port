/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        about: "#030312",
        dust:"rgba(0,0,0,0.9)",
        purpleshade: "rgba(254, 154, 254, 0.3)"
      },
      fontFamily:{
        roboto: 'Roboto',
        quicksand: 'Quicksand',
        poppins: ['"Poppins"', 'sans-serif'],
        mooli: 'Mooli',
        raleway: 'Raleway',
        sourceCode: ['"Source Code Pro"', 'monospace'],
        madimiOne:'Madimi One'
      },
    },
  },
  plugins: [],
}