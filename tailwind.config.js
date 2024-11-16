/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "navy" : "var(--navy)",
        "green" : "var(--green)",
        "slightFade" : "var(--slightFade)",
        "faded" : "var(--faded)"
      },
      fontFamily:
        {"orbitron": ['Orbitron' , 'sans-serif']
    },
  },
  plugins: [],
  }
}