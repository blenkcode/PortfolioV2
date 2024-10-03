/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-y": "rotateY 60s infinite linear",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms", // 2 secondes
        4000: "4000ms",
        1200: "1500ms", // 4 secondes
      },
      transitionDelay: {
        0: "0ms",
        500: "500ms", // 0.5 secondes
        2000: "2200ms",
        3000: "3000ms",
        1200: "1300ms",
        22: "900ms",
        5000: "3200ms",
        6000: "4200ms", // 1 seconde
      },
      keyframes: {
        rotateY: {
          "0%": {
            transform: "rotateY(0deg)  ", // Combine rotateY, translateX et scale
          },
          "100%": {
            transform: "rotateY(360deg) ", // Combine rotateY, translateX et scale
          },
        },
      },
      inset: {
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-6": "-1.5rem",
        "-8": "-2rem",
        "-10": "-2.5rem",
        "-12": "-3rem",
        "-14": "-3.5rem",
        "-16": "-4rem",
        "-20": "-5rem",
        "-24": "-6rem",
        "-32": "-8rem",
        "-40": "-10rem",
        "-48": "-12rem",
        "-56": "-14rem",
        "-64": "-16rem",
        "-72": "-18rem",
        "-80": "-20rem",
      },
      width: {
        110: "28rem",
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem", // 768px
        256: "64rem",
        circlee: "32rem", // 1024px
        // Ajoutez autant de tailles que vous le souhaitez
      },
      translate: {
        900: "900px",
      },
      zIndex: {
        60: "60", // Nouvelle valeur pour z-60
        70: "70", // Nouvelle valeur pour z-70
        100: "100", // Nouvelle valeur pour z-100
        // Ajoutez d'autres valeurs si nécessaire
      },
      height: {
        1: "1px",
        110: "28rem",
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem", // 768px
        256: "64rem", // 1024px
        500: "100rem",
        circlee: "32rem",
        quatre: "80%", // 75% de la hauteur
        vin: "20%", // 25% de la hauteur

        // Ajoutez autant de tailles que vous le souhaitez
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        "border-animate": {
          "0%, 100%": { "background-position": "0% 0%", opacity: "0%" },
          "25%": { "background-position": "100% 0%", opacity: "100%" },
          "50%": { "background-position": "100% 100%", opacity: "40%" },
          "75%": { "background-position": "0% 100%", opacity: "0%" },
        },
      },

      backgroundImage: (theme) => ({
        "gradient-custom": "linear-gradient(45deg, var(--tw-gradient-stops))",
      }),
    },
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      source: ["Source Code Pro", "monospace"],
      raleway: ["Raleway", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
      hind: ["Hind"],
      Noehmi: ["Nohemi"],
      Dirtyline: ["Dirtyline"],
      Chillax: ["Chillax-Variable"],
      Satoshi: ["Satoshi-Variable"],
      Safiro: ["safiromedium"],
    },
  },
  plugins: [],
};
