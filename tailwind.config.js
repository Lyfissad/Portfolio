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
        bounce : 'bounce 3s linear infinite',
        smallBounce : 'smallBounce 2s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeInS : 'fadeIn 0.7s ease-in-out',
        fadeInM : 'fadeIn 1.5s ease-in-out',
        fadeInL : 'fadeIn 2.5s ease-in-out',
      },
      keyframes:{
        fadeIn: {
          from: {opacity : 0},
          to:{opacity : 1},
        },
        smallBounce:{
            "50%" : {
              transform: "translateY(-7%)",
              animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
            },
            "0%, 100%" : {
              transform: "translateY(0)",
              animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
            }
          },
        wiggle: {
          "0%":{
            transform:"rotate(0deg)"
          },
          "25%":{
            transform:"rotate(-3deg)"
          },
          "50%":{
            transform: "rotate(0deg)"
          },
          "75%":{
            transform:"rotate(3deg)"
          },
          "100%":{
            transform: "rotate(0deg)"
          }
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
}