/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}"
  ],
    darkMode: 'class',
  theme: {
    extend: {
      colors:{
        "navy" : "var(--navy)",
        "dark-navy" : "var(--dark-navy)",
        "green" : "var(--green)",
        "slightFade" : "var(--slightFade)",
        "faded" : "var(--faded)",
        "lightNavy": "var(--lightNavy)"
      },
      animation: {
        bounce : 'bounce 2s linear infinite',
        fadeInS : 'fadeIn 0.7s ease-in-out',
        fadeInM : 'fadeIn 1.5s ease-in-out',
        fadeInL : 'fadeIn 2.5s ease-in-out',
      },
      keyframes:{
        fadeIn: {
          from: {opacity : 0},
          to:{opacity : 1},
        }
      },
      fontFamily:
        {"geist": ['Geist Mono' , 'sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  }
};