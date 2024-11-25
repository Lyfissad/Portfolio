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
        "green" : "var(--green)",
        "slightFade" : "var(--slightFade)",
        "faded" : "var(--faded)",
        "lightNavy": "#112240"
      },
      animation: {
        bounce : 'bounce 3s linear infinite',
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