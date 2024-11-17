/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/component/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "navy" : "var(--navy)",
        "green" : "var(--green)",
        "slightFade" : "var(--slightFade)",
        "faded" : "var(--faded)",
        "lightNavy": "#112240"
      },
      fontFamily:
        {"orbitron": ['Orbitron' , 'sans-serif']
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  }
};