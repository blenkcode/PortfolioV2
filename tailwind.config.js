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
        scrollDown: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(70%)" },
        },
        transitions: {
          "0%": { transform: "translatex(0) translatey(0) " },
          "100%": { transform: "translatex(100%) translatey(100%)" },
        },
        transitions2: {
          "0%": { transform: "translatex(100%)" },
          "100%": { transform: "translatex(0%)" },
        },
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
        heartpulse: {
          "0%": {
            transform: "scale(80%)",
          },
          "50%": {
            transform: "scale(120%)",
          },
          "100%": {
            transform: "scale(80%)",
          },
        },
        atom: {
          "0%": {
            transform: "rotateZ(0deg)",
          },
          "50%": {
            transform: "rotateZ(180deg)",
          },
          "100%": {
            transform: "rotateZ(0eg)",
          },
        },
        speaker: {
          "0%": {
            transform: "rotateZ(-10deg)",
          },
          "50%": {
            transform: "rotateZ(20deg)",
          },
          "100%": {
            transform: "rotateZ(-10deg)",
          },
        },
        web: {
          "0%": {
            transform: "rotateY(0deg) rotateX(0deg)",
          },
          "25%": {
            transform: "rotateY(180deg) rotateX(0deg)",
          },
          "50%": {
            transform: "rotateY(0deg) rotateX(180deg)",
          },
          "75%": {
            transform: "rotateY(180deg) rotateX(0deg)",
          },
          "100%": {
            transform: "rotateY(0eg) rotateX(0deg)",
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
        web: "web 10s ease-in-out infinite",
        speaker: "speaker 3s ease-in-out infinite",
        atom: "atom 7s ease-in-out infinite",
        heartpulse: "heartpulse 3s ease-in-out infinite",
        transitions: "transitions 1s ease-in-out infinite",
        transitions2: "transitions2 1s ease-in-out infinite",
        "rotate-y": "rotateY 60s infinite linear",
        "move-right": "translateX 5.5s ease-in-out infinite ",
        "move-right2": "translateY 9.5s ease-in-out infinite ",
        "move-right3": "translateZ 5.5s ease-in-out infinite ",
        "border-animate": "border-animate 4s ease-in-out infinite",
        scroll: "scrollDown 30s linear infinite",
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
        left1: "10rem",
        imageabout: "12vw",
        imageabout2: "19vw",
        imageabout3: "18vw",
        imageabout4: "17vw",
        imageabout5: "21vw",
        imageabout6: "22vw",
        1: "2px",
        110: "28rem",
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem", // 768px
        256: "64rem",
        300: "10%",
        circlee: "32rem", // 1024px
      },
      translate: {
        900: "900px",
      },
      rotate: {
        "-180": "-180deg",
        "-90": "-90deg",
        "-45": "-45deg",
        0: "0",
        45: "45deg",
        90: "90deg",
        180: "180deg",
      },
      transform: {
        "rotate-x-90": "rotateX(90deg)", // Une seule parenthèse à la fin
        "-rotate-x-90": "rotateX(-90deg)", // Une seule parenthèse à la fin
      },
      inset: {
        "5vw": "1vw", // Ajouter une option pour top à 10vw
      },
      zIndex: {
        60: "60", // Nouvelle valeur pour z-60
        70: "70", // Nouvelle valeur pour z-70
        100: "100", // Nouvelle valeur pour z-100
      },
      height: {
        dynamic: "4vw",
        1.2: "2.5px",
        1: "2px",
        110: "28rem",
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem",
        300: "130%", // 768px
        256: "64rem", // 1024px
        500: "100rem",
        circlee: "32rem",
        quatre: "80%", // 75% de la hauteur
        vin: "20%", // 25% de la hauteur
      },
      scale: {
        200: "3",
        115: "1.15",
        80: "0.8",
        85: "0.85", // ou '0.8' ou '80%'
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
      montreal: ["PPNeueMontreal", "sans-serif"],
      FKGroteskNeue: ["FKGroteskNeue", "sans-serif"],
      Metana: ["Metana", "sans-serif"],
      projekt: ["Projekt", "sans-serif"],
      neutral: ["Neutral", "sans-serif"],
      playfair: ["playfair", "sans-serif"],
    },
  },
  plugins: [],
};
