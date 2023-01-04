/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    fontFamily:{
      "inter": "'Inter', sans-serif",
  },
    extend: {
     
      colors:{
        'bodyColor': '#D9DAFF',
        'primary-btn':'#543BF5',
        'pTagColor' : "#5E5E5E"
     },
    },
  },
  plugins: [],
}
