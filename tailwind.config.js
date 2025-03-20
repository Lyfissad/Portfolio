/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode: 'class',
  theme: {
    extend: {
      backgroundOpacity : true, 
      colors:{
        "navy" : "#0a192f",
        "dark-navy" : "#020c1b",
        "green" : "#64ffda",
        "slightFade" : "#a8b2d1",
        "faded" : "#ccd6f6",
        "lightNavy": "#112240",
      },
      animation: {
        bounce : 'bounce 3s linear infinite',
        smallBounce : 'smallBounce 2s linear infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        fadeInNoMove : 'fadeInNoMove 1.5s ease-in-out',
        fadeInS : 'fadeIn 0.7s ease-in-out',
        fadeInM : 'fadeIn 1.5s ease-in-out',
        fadeInL : 'fadeIn 2.5s ease-in-out',
        Grow : "grow 3s ease-in-out",
      },
      keyframes:{
        fadeIn: {
          "0%" : {opacity : 0,
            transform: "translateY(5%)"
          },
          "100%" : {opacity : 1,
            transform: "translateY(0)"
          },
        },
        fadeInNoMove: {
          "0%" : {opacity : 0},
          "100%" : {opacity : 1}
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
        },
        grow:{
          "0% , 100%":{
            transform:"scale(1.2,1.2)"
          }
        }
      },
      fontFamily:
        {
          "geist": [`Ysabeau SC` , 'sans-serif'],
          "semiHead":[`Ubuntu` , 'sans-serif']
    },
  },
  plugins: [
    require("tailwind-scrollbar")
    ({ nocompatible: true })  ],
  }
}

//"./src/component/**/*.{js,jsx,ts,tsx}"