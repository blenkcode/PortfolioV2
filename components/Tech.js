import React from "react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ShaderScenecopy from "../components/ShaderScenecopy";
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

  // useEffect(() => {
  //   const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
  //   const originalBackgroundColor = getComputedStyle(
  //     nextRef.current
  //   ).backgroundColor;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: mainRef,
  //       start: "30%", // Le scroll commence à 26%, déclenchant les animations
  //       scrub: false,
  //       // Affiche les marqueurs pour le débogage
  //     },
  //   });

  //   // Première animation : mouvement vers le bas sur l'axe Y

  //   tl.to(expoRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A",
  //     ease: "elastic.out(1, 0.5)", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(expoRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(exRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A",
  //     ease: "elastic.out(1, 0.5)", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(exRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(reduxRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     ease: "elastic.out(1, 0.5)",
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(reduxRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });

  //   tl.to(gsapRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     ease: "elastic.out(1, 0.5)",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(gsapRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });

  //   // Deuxième animation : mouvement vers la droite sur l'axe X
  // }, [mainRef]);
  // useEffect(() => {
  //   const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
  //   const originalBackgroundColor = getComputedStyle(
  //     nextRef.current
  //   ).backgroundColor;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: mainRef,
  //       start: "30%", // Le scroll commence à 26%, déclenchant les animations
  //       scrub: false,
  //       // Affiche les marqueurs pour le débogage
  //     },
  //   });

  //   // Première animation : mouvement vers le bas sur l'axe Y

  //   tl.to(typeRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     ease: "elastic.out(1, 0.5)",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: 0.6, // Durée de 1 seconde
  //   }).to(typeRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });

  //   tl.to(gitRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     ease: "elastic.out(1, 0.5)",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(gitRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(nextRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     ease: "elastic.out(1, 0.5)",
  //     delay: 0.2, // Durée de 1 seconde
  //   }).to(nextRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(tailwindRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     ease: "elastic.out(1, 0.5)",
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(tailwindRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });

  //   // Deuxième animation : mouvement vers la droite sur l'axe X
  // }, [mainRef]);
  // useEffect(() => {
  //   const originalBorderColor = getComputedStyle(nextRef.current).borderColor; // Récupère la couleur de la bordure initiale
  //   const originalBackgroundColor = getComputedStyle(
  //     nextRef.current
  //   ).backgroundColor;
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: mainRef,
  //       start: "30%", // Le scroll commence à 26%, déclenchant les animations
  //       scrub: false,
  //       // Affiche les marqueurs pour le débogage
  //     },
  //   });

  //   tl.to(mongoRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     ease: "elastic.out(1, 0.5)",
  //     scale: 1.05,
  //     delay: 0.4, // Durée de 1 seconde
  //   }).to(mongoRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7,
  //     delay: -0.2, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(reactRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     ease: "elastic.out(1, 0.5)",
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(reactRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(splineRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     ease: "elastic.out(1, 0.5)",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,
  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(splineRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   tl.to(nodeRef.current, {
  //     // Mouvement vers 130 sur l'axe Y
  //     borderColor: "#C4B5FD",
  //     ease: "elastic.out(1, 0.5)",
  //     backgroundColor: "#27272A", // Change la couleur de la bordure
  //     duration: 1.4,
  //     scale: 1.05,

  //     delay: -0.2, // Durée de 1 seconde
  //   }).to(nodeRef.current, {
  //     borderColor: originalBorderColor,
  //     backgroundColor: originalBackgroundColor, // Restaure la couleur de la bordure initiale
  //     scale: 1,
  //     duration: 0.7, // Durée de l'animation de retour à l'état normal
  //   });
  //   // Première animation : mouvement vers le bas sur l'axe Y

  //   // Deuxième animation : mouvement vers la droite sur l'axe X
  // }, [mainRef]);
  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth > 1000) {
  //     gsap.fromTo(
  //       topRef.current,
  //       { y: 0 },
  //       {
  //         y: "-100%",

  //         scrollTrigger: {
  //           trigger: mainRef,
  //           start: "40%",
  //           end: "41%",
  //           scrub: 1,
  //         },
  //       }
  //     );
  //     // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
  //   }
  // }, []);
  return (
    <div
      ref={topRef}
      className="flex flex-col w-full justify-center items-center relative"
    >
      <div
        ref={firstRef}
        className=" grid grid-cols-4  lg:gap-4 lg:mb-4 gap-3 mb-3 justify-items-center"
      >
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="nex.webp"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="React.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="tail.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="redux1.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
      </div>
      <div
        ref={secondRef}
        className="grid grid-cols-4  lg:gap-4 gap-3 lg:mb-4 mb-3 justify-items-center"
      >
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="node.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="ts.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="ex.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="mongo.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
      </div>
      <div
        ref={thirdRef}
        className="grid grid-cols-4  lg:gap-4 gap-3  lg:mb-0 mb-0 justify-items-center"
      >
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="git.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="gsaplogo.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="spline.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
        <div
          ref={nextRef}
          className=" border-zinc-500 border-2 border-opacity-50 rounded-xl items-center justify-center overflow-hidden 2xl:h-28 2xl:w-28 h-16 w-16 flex flex-col relative lg:w-24 lg:h-24 group"
        >
          <img
            src="expo.png"
            className="lg:w-2/3 w-3/5 grayscale  absolute "
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Tech;
