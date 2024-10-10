import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  faMobile,
  faLaptop,
  faUsersLine,
  faDatabase,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";
import Tech from "./Tech";
import Svg from "./Svg";
function Stack({ mainRef }) {
  const interactifRef = useRef(null);
  const svgRef = useRef(null);
  const spanRef = useRef(null);
  const starRef = useRef(null);
  const interactif2Ref = useRef(null);
  const uiRef = useRef(null);
  const resRef = useRef(null);
  const dataRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const titleRef = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1280) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "2%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false, // Pas de synchronisation avec le scroll, les animations s'exécutent avec leurs durées définies
        },
      });

      // Première animation : animation de svgRef avec une durée de 2 secondes
      const circleElement = svgRef.current.querySelector("circle");

      tl.fromTo(
        circleElement,
        { strokeDashoffset: 440, stroke: isDarkMode ? "#FDFAF8" : "#27272A" },
        {
          strokeDashoffset: 0,
          stroke: isDarkMode ? "#C4B5FD" : "#5B21B6",
          ease: "power5.inOut",
          duration: 1.1, // Durée de 2 secondes
        }
      );

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        spanRef.current,
        { x: 0, width: 170, opacity: 0, height: 40, y: 33 },
        {
          x: -55,
          opacity: 1,
          y: 33,
          height: 40,
          width: 220,
          ease: "power1.inOut",
          duration: 0.5, // Durée de 2 secondes
        },
        "-=0.5" // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
      tl.fromTo(
        interactifRef.current,
        { y: "0%" },
        {
          y: "100%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "-=0.1" // Délai de 2 secondes après la fin de spanRef
      );

      tl.fromTo(
        interactif2Ref.current,
        { y: "-100%" },
        {
          y: "0%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        starRef.current,
        { x: "120%", y: 50, rotate: 50 },
        {
          rotate: 160,
          y: 90,
          x: "-0%",
          ease: "elastic.out(1, 0.9)",
          duration: 1.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        resRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2, // Durée de 2 secondes// Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        uiRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2.1, // Durée de 2 secondes // Durée de 2 secondes
        },
        "-=1.5" // Déclenche simultanément avec interactifRef
      );

      tl.fromTo(
        dataRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2.1, // Durée de 2 secondes
        },
        "-=2.8" // Déclenche simultanément avec interactifRef
      );
    } else if (screenWidth > 700) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "3%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false, // Pas de synchronisation avec le scroll, les animations s'exécutent avec leurs durées définies
        },
      });

      // Première animation : animation de svgRef avec une durée de 2 secondes
      const circleElement = svgRef.current.querySelector("circle");

      tl.fromTo(
        circleElement,
        { strokeDashoffset: 440, stroke: isDarkMode ? "#FDFAF8" : "#27272A" },
        {
          strokeDashoffset: 0,
          stroke: isDarkMode ? "#C4B5FD" : "#5B21B6",
          ease: "none",
          duration: 0.8, // Durée de 2 secondes
        }
      );

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        spanRef.current,
        { x: 0, width: 100, opacity: 0, height: 32, y: 45 },
        {
          x: -54,
          opacity: 1,
          y: 34,
          height: 32,
          width: 180,
          ease: "power1.inOut",
          duration: 0.5, // Durée de 2 secondes
        },
        "+=0.1" // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
      tl.fromTo(
        interactifRef.current,
        { y: "0%" },
        {
          y: "100%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "-=0.5" // Délai de 2 secondes après la fin de spanRef
      );

      tl.fromTo(
        interactif2Ref.current,
        { y: "-100%" },
        {
          y: "0%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        starRef.current,
        { x: "120%", y: 50, rotate: 50 },
        {
          rotate: 160,
          y: 90,
          x: "-10%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        resRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2, // Durée de 2 secondes// Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        uiRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2.1, // Durée de 2 secondes // Durée de 2 secondes
        },
        "-=1.5" // Déclenche simultanément avec interactifRef
      );

      tl.fromTo(
        dataRef.current,
        { y: "120%" },
        {
          y: 15,
          ease: "elastic.out(1, 0.9)",
          duration: 2.1, // Durée de 2 secondes
        },
        "-=2.8" // Déclenche simultanément avec interactifRef
      );
    } else {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "15%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false, // Pas de synchronisation avec le scroll, les animations s'exécutent avec leurs durées définies
        },
      });

      // Première animation : animation de svgRef avec une durée de 2 secondes
      const circleElement = svgRef.current.querySelector("circle");

      tl.fromTo(
        circleElement,
        { strokeDashoffset: 440, stroke: isDarkMode ? "#FDFAF8" : "#27272A" },
        {
          strokeDashoffset: 0,
          stroke: isDarkMode ? "#C4B5FD" : "#5B21B6",
          ease: "none",
          duration: 0.8, // Durée de 2 secondes
        }
      );

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        spanRef.current,
        { x: 0, width: 100, opacity: 0, height: 32, y: 45 },
        {
          x: -55,
          opacity: 1,
          y: 31,
          height: 32,
          width: 150,
          ease: "power1.inOut",
          duration: 0.5, // Durée de 2 secondes
        },
        "+=0.1" // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
      tl.fromTo(
        interactifRef.current,
        { y: "0%" },
        {
          y: "100%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "-=0.5" // Délai de 2 secondes après la fin de spanRef
      );

      tl.fromTo(
        interactif2Ref.current,
        { y: "-100%" },
        {
          y: "0%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        starRef.current,
        { x: "120%", y: 50, rotate: 50 },
        {
          rotate: 160,
          y: 90,
          x: "-10%",
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        uiRef.current,
        { x: "-100%", y: 5, scale: 0, opacity: 0 },
        {
          x: 0,
          y: 5,
          scale: 1,
          opacity: 1,
          duration: 1, // Durée de 2 secondes// Durée de 2 secondes
        },
        "+=0.5" // Déclenche simultanément avec interactifRef
      );
      tl.fromTo(
        resRef.current,
        { x: "100%", scale: 0, y: 5, opacity: 0 },
        {
          x: 0,
          y: 5,
          opacity: 1,
          scale: 1,
          duration: 1, // Durée de 2 secondes// Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );

      tl.fromTo(
        dataRef.current,
        { scale: 0 },
        {
          scale: 1,

          duration: 1, // Durée de 2 secondes// Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
    }
    // Créer une timeline pour gérer les animations enchaînées
  }, [isDarkMode, mainRef]);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "20%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false, // Pas de synchronisation avec le scroll, les animations s'exécutent avec leurs durées définies
        },
      });

      // Première animation : animation de svgRef avec une durée de 2 secondes

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        titleRef.current,
        { rotate: 0 },
        {
          rotate: -3,
          ease: "power1.inOut",
          duration: 1, // Durée de 2 secondes
        }
        // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
      tl.fromTo(
        line1Ref.current,
        { opacity: 0, rotate: 0, width: 0 },
        {
          opacity: 1,
          width: 200,
          rotate: 2,
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "-=0.1" // Délai de 2 secondes après la fin de spanRef
      );

      tl.fromTo(
        line2Ref.current,
        { opacity: 0, width: 0 },
        {
          width: 200,
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
    } else {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "50%", // Le scroll commence à 25%, déclenchant les animations
          scrub: false, // Pas de synchronisation avec le scroll, les animations s'exécutent avec leurs durées définies
        },
      });

      // Première animation : animation de svgRef avec une durée de 2 secondes

      // Deuxième animation : animation de spanRef (1 seconde après svgRef)
      tl.fromTo(
        titleRef.current,
        { rotate: 0 },
        {
          rotate: -3,
          ease: "power1.inOut",
          duration: 1, // Durée de 2 secondes
        }
        // Délai de 1 seconde après la fin de l'animation de svgRef
      );

      // Troisième animation : animation de interactifRef et interactif2Ref (2 secondes après spanRef)
      tl.fromTo(
        line1Ref.current,
        { opacity: 0, rotate: 0, width: 0 },
        {
          opacity: 1,
          width: 200,
          rotate: 2,
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "-=0.1" // Délai de 2 secondes après la fin de spanRef
      );

      tl.fromTo(
        line2Ref.current,
        { opacity: 0, width: 0 },
        {
          width: 200,
          opacity: 1,
          ease: "power1.inOut",
          duration: 0.8, // Durée de 2 secondes
        },
        "<" // Déclenche simultanément avec interactifRef
      );
    }

    // Créer une timeline pour gérer les animations enchaînées
  }, [isDarkMode, mainRef]);
  return (
    <div className="relative z-10 lg:h-lvh  flex flex-col justify-center items-start lg:mt-8  mt-0 ">
      <div className="sm:px-0  h-full w-full flex items-center justify-start flex-col rounded-lg z-10  lg:mt-0 mt-10 relative  ">
        <div
          className={`  2xl:text-3xl lg:text-2xl  lg:pb-20 pb-16 font-thin text-xl z-20 flex flex-col relative items-center justify-start lg:mt-10 font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-900 relative"
          } `}
        >
          <span className="2xl:text-5xl lg:text-4xl font-bold text-xl z-40 ">
            Conception & développement{" "}
          </span>

          <span className="mt-3 relative">
            {" "}
            <span className=""> d'écosystèmes </span>
            <span className="z-50 relative ml-2">web ou mobiles</span>{" "}
            <span
              ref={spanRef}
              className="absolute w-3 h-3 bg-violet-400 bg-opacity-40 rounded-full -top-8 z-10 -right-16"
            ></span>
            <div className="absolute -bottom-24 scale-50 -left-10">
              <div className="overflow-hidden  w-32 h-32">
                {" "}
                <div ref={starRef}>
                  <div className="2xl:w-14 2xl:h-14 lg:w-10 lg:h-10 h-8 w-8 rounded-xl bg-violet-400 translate-y-9 "></div>
                </div>
              </div>
            </div>
            <div className="2xl:w-40 2xl:h-16 lg:w-36 lg:h-12 w-32 h-10 absolute overflow-hidden -top-24 lg:translate-y-0 translate-y-2   2xl:-top-32 lg:-top-28  2xl:translate-x-24 lg:translate-x-20 translate-x-20">
              {/* <div className="w-24 h-24 rounded-full border-violet-400 border-4 border-solid 0  z-10 "></div> */}
              <svg
                ref={svgRef}
                className="2xl:w-36 2xl:h-36 lg:w-28 lg:h-28 h-20 w-20"
                viewBox="0 0 150 150"
              >
                <circle
                  cx="75"
                  cy="75"
                  r="70"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="440"
                  strokeDashoffset="440"
                ></circle>
              </svg>{" "}
            </div>
          </span>
          <span className="mt-3 flex">
            <div className="overflow-hidden mr-2 relative">
              <span ref={interactifRef} className="absolute ">
                intéractifs{" "}
              </span>
              <span ref={interactif2Ref} className="absolute -translate-y-full">
                intéractifs{" "}
              </span>
              <span className="opacity-0">intéractifs </span>
            </div>
            & intuitif.
          </span>
        </div>

        <div
          className={`w-full  h-fit  xl:text-2xl lg:text-xl font-thin  text-2xl z-20 flex md:flex-row flex-col  lg:items-start items-center justify-center font-Satoshi    ${
            isDarkMode ? "text-white " : "text-white "
          } `}
        >
          <div className="2xl:w-56 2xl:h-56 lg:w-52 lg:h-52 w-44 h-44 overflow-hidden flex lg:block items-center justify-center">
            {" "}
            <span
              ref={uiRef}
              className={`text-xl flex items-start bg-zinc-900 bg-opacity-50 justify-center pt-5 2xl:w-48 2xl:h-48 lg:w-44 lg:h-44 w-40 h-40 border-2  rounded-2xl border-opacity-10 group relative overflow-hidden ${
                isDarkMode ? "border-zinc-100 " : "border-zinc-900 "
              } `}
            >
              {" "}
              <span className="z-50 2xl:text-xl lg:text-lg  text-base ">
                User-Friendly UI
              </span>
              <FontAwesomeIcon
                className="absolute lg:text-4xl text-3xl group-hover:-translate-x-32 transition-all duration-700   right-22 top-20 z-50 "
                icon={faUsersLine}
              />
              <FontAwesomeIcon
                className="absolute transition-all duration-700  translate-x-32 group-hover:translate-x-0 lg:text-4xl text-3xl right-22 top-20 z-50"
                icon={faSmile}
              />
              <div
                className={`w-14 h-14 bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-300 group-hover:bg-opacity-10 grou^-hover:-translate-y-20 ${
                  isDarkMode ? "bg-violet-400  " : "bg-violet-900 "
                }`}
              ></div>
            </span>
          </div>
          <div className="2xl:w-56 2xl:h-56 lg:w-52 lg:h-52 w-44 h-44 overflow-hidden flex lg:block items-center justify-center">
            <span
              ref={resRef}
              className={`2xl:text-xl lg:text-lg text-base  flex items-start bg-zinc-900 bg-opacity-50  justify-center pt-5 2xl:w-48 lg:w-44 lg:h-44 2xl:h-48 w-40 h-40  border-2 rounded-2xl border-opacity-10 group relative overflow-hidden ${
                isDarkMode ? "border-zinc-100 " : "border-zinc-900 "
              } `}
            >
              {" "}
              Responsive Design
              <FontAwesomeIcon
                className="absolute lg:text-4xl text-3xl group-hover:-translate-x-16 transition-all duration-700   right-12 top-24 group-hover:-rotate-12 rotate-12 z-50"
                icon={faMobile}
              />
              <FontAwesomeIcon
                className="absolute transition-all duration-700 group-hover:translate-x-16 group-hover:rotate-12 lg:text-4xl text-3xl left-10 top-20 -rotate-12 z-50"
                icon={faLaptop}
              />
              <div
                className={`w-2/3 h-2/3 bg-violet-400 bg-opacity-40 blur-xl rounded-full absolute -bottom-32 z-10 group-hover:w-96 group-hover:h-96 transition-all duration-500 group-hover:bg-opacity-0 ${
                  isDarkMode
                    ? "bg-violet-400 bg-opacity-30  "
                    : "bg-violet-900 bg-opacity-30 "
                }`}
              ></div>
              <div
                className={`w-14 h-14  rounded-full  absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-200 group-hover:bg-opacity-0 grou^-hover:-translate-y-20 ${
                  isDarkMode
                    ? "bg-violet-400 bg-opacity-30 "
                    : "bg-violet-900 bg-opacity-30 "
                }`}
              ></div>
            </span>
          </div>

          <div className="2xl:w-56 2xl:h-56 lg:w-52 lg:h-52  w-44 h-44 overflow-hidden flex lg:block items-center justify-center">
            {" "}
            <span
              ref={dataRef}
              className={`2xl:text-xl lg:text-lg text-base  lg:w-44 lg:h-44 flex items-start bg-zinc-900 bg-opacity-50  justify-center pt-5 2xl:w-48 2xl:h-48 w-40 h-40  border-2  rounded-2xl border-opacity-10 group relative overflow-hidden ${
                isDarkMode ? "border-zinc-100 " : "border-zinc-900 "
              } `}
            >
              {" "}
              Base de Données
              <FontAwesomeIcon
                className="absolute group-hover:rotate-180 transition-all duration-700 lg:text-4xl text-3xl right-22 top-20 z-50"
                icon={faDatabase}
              />
              <div
                className={`w-14 h-14  bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-200 group-hover:bg-opacity-0 grou^-hover:-translate-y-20 ${
                  isDarkMode ? "bg-violet-400  " : "bg-violet-900 "
                }`}
              ></div>
            </span>
          </div>
        </div>
        <div className="2xl:mt-52 lg:mt-32 mt-20 lg:-translate-x-4 flex items-center  flex-col ">
          <h3
            ref={titleRef}
            className={`items-center   relative flex justify-center lg:text-4xl text-3xl font-satoshi font-thin mb-24 ${
              isDarkMode ? "text-white  " : "text-black "
            }`}
          >
            Stack Technique{" "}
            <div
              ref={line1Ref}
              className="absolute w-52  h-1.5  rounded-full -bottom-5 bg-violet-400"
            ></div>
            <div
              ref={line2Ref}
              className="absolute w-52  h-1.5 rounded-full -bottom-4 bg-violet-900"
            ></div>
          </h3>
          <Tech mainRef={mainRef}></Tech>
        </div>
      </div>
    </div>
  );
}

export default Stack;
