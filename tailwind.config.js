/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    lightMode: "class",
    extend: {
      // Ajouter les keyframes combinés
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        translateX: {
          "0%": {
            transform: "translateY(5px) translateX(65px) rotateZ(-23deg)",
          },
          "50%": {
            transform: "translateY(-4px) translateX(60px) rotateZ(-23deg)",
          },
          "100%": {
            transform: "translateY(5px) translateX(65px) rotateZ(-23deg)",
          },
        },
        translateY: {
          "0%": {
            transform: "translateY(0) translateX(69px) rotateZ(80deg)",
          },
          "50%": {
            transform: "translateY(5px) translateX(75px) rotateZ(80deg)",
          },
          "100%": {
            transform: "translateY(0) translateX(69px) rotateZ(80deg)",
          },
        },
        translateZ: {
          "0%": {
            transform: "translateY(-12px) translateX(40px) rotateZ(24deg)",
          },
          "50%": {
            transform: "translateY(3px) translateX(35px) rotateZ(24deg)",
          },
          "100%": {
            transform: "translateY(-12px) translateX(40px) rotateZ(24deg)",
          },
        },
        "border-animate": {
          "0%, 100%": { "background-position": "0% 0%", opacity: "0%" },
          "25%": { "background-position": "100% 0%", opacity: "100%" },
          "50%": { "background-position": "100% 100%", opacity: "40%" },
          "75%": { "background-position": "0% 100%", opacity: "0%" },
        },
      },
      // Ajouter les animations combinées
      animation: {
        "rotate-y": "rotateY 60s infinite linear",
        "move-right": "translateX 5.5s ease-in-out infinite ",
        "move-right2": "translateY 9.5s ease-in-out infinite ",
        "move-right3": "translateZ 5.5s ease-in-out infinite ",
        "border-animate": "border-animate 4s ease-in-out infinite",
      },
      rotate: {
        one: "23deg",
        two: "160deg",
        three: "24deg",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms", // 2 secondes
        4000: "4000ms",
        1200: "1500ms", // 1,5 seconde
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
      },
      translate: {
        900: "900px",
      },
      zIndex: {
        60: "60", // Nouvelle valeur pour z-60
        70: "70", // Nouvelle valeur pour z-70
        100: "100", // Nouvelle valeur pour z-100
      },
      height: {
        1.2: "2.5px",
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
      },
      borderWidth: {
        1: "1px",
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
