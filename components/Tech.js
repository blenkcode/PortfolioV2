import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Tech = ({ mainRef }) => {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const bubleRef = useRef(null);
  //
  const nextRef = useRef(null);
  const reactRef = useRef(null);
  const tailwindRef = useRef(null);
  const reduxRef = useRef(null);
  const nodeRef = useRef(null);
  const typeRef = useRef(null);
  const exRef = useRef(null);
  const mongoRef = useRef(null);
  const expoRef = useRef(null);
  const splineRef = useRef(null);
  const gsapRef = useRef(null);
  const gitRef = useRef(null);
  const topRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "26%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false,
        },
      });

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        firstRef.current,
        { x: -300, opacity: 0 },
        {
          x: -0,
          opacity: 1,

          ease: "elastic.out(1, 0.9)",
          duration: 2, // Durée de 2 secondes
        }
        // Délai de 1 seconde après la fin de l'animation de svgRef
      );
      tl.fromTo(
        secondRef.current,
        { x: 300, opacity: 0 },
        {
          x: 0,
          opacity: 1,

          ease: "elastic.out(1, 0.9)",
          duration: 2, // Durée de 2 secondes// Durée de 2 secondes
        },
        "-=1.5" // Délai de 1 seconde après la fin de l'animation de svgRef
      );
      tl.fromTo(
        thirdRef.current,
        { x: -300, opacity: 0 },
        {
          x: 0,
          opacity: 1,

          ease: "elastic.out(1, 0.9)",
          duration: 2, // Durée de 2 secondes// Durée de 2 secondes
        },
        "-=1.5" // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
    } else {
      // Première animation : animation de svgRef avec une durée de 2 secondes
    }
    // Créer une timeline pour gérer les animations enchaînées
  }, [mainRef]);

  useEffect(() => {
    const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
    const originalBackgroundColor = getComputedStyle(
      nextRef.current
    ).backgroundColor;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "30%", // Le scroll commence à 26%, déclenchant les animations
        scrub: false,
        // Affiche les marqueurs pour le débogage
      },
    });

    // Première animation : mouvement vers le bas sur l'axe Y

    tl.to(expoRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A",
      ease: "elastic.out(1, 0.5)", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(expoRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(exRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A",
      ease: "elastic.out(1, 0.5)", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(exRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(reduxRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      ease: "elastic.out(1, 0.5)",
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(reduxRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });

    tl.to(gsapRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      ease: "elastic.out(1, 0.5)",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(gsapRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });

    // Deuxième animation : mouvement vers la droite sur l'axe X
  }, [mainRef]);
  useEffect(() => {
    const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
    const originalBackgroundColor = getComputedStyle(
      nextRef.current
    ).backgroundColor;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "30%", // Le scroll commence à 26%, déclenchant les animations
        scrub: false,
        // Affiche les marqueurs pour le débogage
      },
    });

    // Première animation : mouvement vers le bas sur l'axe Y

    tl.to(typeRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      ease: "elastic.out(1, 0.5)",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: 0.6, // Durée de 1 seconde
    }).to(typeRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });

    tl.to(gitRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      ease: "elastic.out(1, 0.5)",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(gitRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(nextRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      ease: "elastic.out(1, 0.5)",
      delay: 0.2, // Durée de 1 seconde
    }).to(nextRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(tailwindRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      ease: "elastic.out(1, 0.5)",
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(tailwindRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });

    // Deuxième animation : mouvement vers la droite sur l'axe X
  }, [mainRef]);
  useEffect(() => {
    const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
    const originalBackgroundColor = getComputedStyle(
      nextRef.current
    ).backgroundColor;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "30%", // Le scroll commence à 26%, déclenchant les animations
        scrub: false,
        // Affiche les marqueurs pour le débogage
      },
    });

    tl.to(mongoRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      ease: "elastic.out(1, 0.5)",
      scale: 1.05,
      delay: 0.4, // Durée de 1 seconde
    }).to(mongoRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7,
      delay: -0.2, // Durée de l'animation de retour à l'état normal
    });
    tl.to(reactRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      ease: "elastic.out(1, 0.5)",
      delay: -0.2, // Durée de 1 seconde
    }).to(reactRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(splineRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      ease: "elastic.out(1, 0.5)",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,
      delay: -0.2, // Durée de 1 seconde
    }).to(splineRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    tl.to(nodeRef.current, {
      // Mouvement vers 130 sur l'axe Y
      borderColor: "#C4B5FD",
      ease: "elastic.out(1, 0.5)",
      backgroundColor: "#27272A", // Change la couleur de la bordure
      duration: 1.4,
      scale: 1.05,

      delay: -0.2, // Durée de 1 seconde
    }).to(nodeRef.current, {
      borderColor: originalBorderColor,
      backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
      scale: 1,
      duration: 0.7, // Durée de l'animation de retour à l'état normal
    });
    // Première animation : mouvement vers le bas sur l'axe Y

    // Deuxième animation : mouvement vers la droite sur l'axe X
  }, [mainRef]);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      gsap.fromTo(
        topRef.current,
        { y: 0 },
        {
          y: "-100%",

          scrollTrigger: {
            trigger: mainRef,
            start: "40%",
            end: "41%",
            scrub: 1,
          },
        }
      );
      // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
    }
  }, []);
  return (
    <div
      ref={topRef}
      className="flex flex-col mb-10 lg:mb-0 w-full justify-center items-center relative"
    >
      <div
        ref={firstRef}
        className=" grid grid-cols-4  lg:gap-8 lg:mb-8 gap-3 mb-3 justify-items-center"
      >
        <div
          ref={nextRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="nex.webp"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute  text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Next.js
          </span>
        </div>
        <div
          ref={reactRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 group bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="react.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm lg:visible invisible bottom-3 text-white font-thin">
            React
          </span>
        </div>
        <div
          ref={tailwindRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 group bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="tail.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Tailwind
          </span>
        </div>
        <div
          ref={reduxRef}
          className="bg-zinc-900 group border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="redux1.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Redux
          </span>
        </div>
      </div>
      <div
        ref={secondRef}
        className="grid grid-cols-4  lg:gap-8 gap-3 lg:mb-8 mb-3 justify-items-center"
      >
        <div
          ref={nodeRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 group bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="node.png"
            className="w-4/5 lg:w-1/2 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-5 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Node.js
          </span>
        </div>
        <div
          ref={typeRef}
          className="bg-zinc-900 group border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="ts.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            TypeScript
          </span>
        </div>
        <div
          ref={exRef}
          className="bg-zinc-900 group border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="ex.png"
            className="lg:w-1/2 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Express
          </span>
        </div>
        <div
          ref={mongoRef}
          className="bg-zinc-900 group border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden 2xl:h-32 2xl:w-32 flex h-16 w-16 flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="mongo.png"
            className="lg:w-1/2 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Mongo DB
          </span>
        </div>
      </div>
      <div
        ref={thirdRef}
        className="grid grid-cols-4  lg:gap-8 gap-3  lg:mb-8 mb-3 justify-items-center"
      >
        <div
          ref={gitRef}
          className="bg-zinc-900  bg- rounded-xl items-center justify-center overflow-hidden  border-zinc-500 border-2 border-opacity-50 group 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="git.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Git
          </span>
        </div>
        <div
          ref={gsapRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden group 2xl:h-32 2xl:w-32  h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="gsaplogo.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-source">
            Gsap
          </span>
        </div>
        <div
          ref={splineRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden group 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="spline.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Spline
          </span>
        </div>
        <div
          ref={expoRef}
          className="bg-zinc-900 border-zinc-500 border-2 border-opacity-50 bg- rounded-xl items-center justify-center overflow-hidden group 2xl:h-32 2xl:w-32 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24"
        >
          <img
            src="expo.png"
            className="lg:w-1/3 w-3/5 grayscale group-hover:scale-150 transition-all duration-500 lg:absolute top-7 "
          ></img>
          <span className="absolute text-sm  lg:visible invisible bottom-3 text-white font-thin">
            Expo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tech;
