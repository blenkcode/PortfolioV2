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
import Svg from "./Svg";
function Stack({ mainRef }) {
  const interactifRef = useRef(null);
  const svgRef = useRef(null);
  const spanRef = useRef(null);
  const starRef = useRef(null);
  const interactif2Ref = useRef(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
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
        { x: 0, width: 170, opacity: 0, height: 32, y: 45 },
        {
          x: -55,
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
        "+=0.1" // Délai de 2 secondes après la fin de spanRef
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
    } else {
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
        "+=0.1" // Délai de 2 secondes après la fin de spanRef
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
    }
    // Créer une timeline pour gérer les animations enchaînées
  }, [isDarkMode, mainRef]);

  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center lg:mt-8  mt-5 ">
      <div className="2xl:px-16 sm:px-7 h-fit lg:w-1/2 flex items-center justify-center flex-col rounded-lg z-10  lg:mt-0 mt-10 relative ">
        <div
          className={`  xl:text-2xl lg:text-xl font-thin text-xl z-20 flex flex-col items-center font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-900 relative"
          } `}
        >
          <span className="lg:text-3xl text-xl z-40 ">
            Conception & développement{" "}
          </span>

          <div className="w-24 h-6 absolute overflow-hidden  -top-8 -translate-x-1">
            {/* <div className="w-24 h-24 rounded-full border-violet-400 border-4 border-solid 0  z-10 "></div> */}
            <svg
              ref={svgRef}
              className=""
              width="50"
              height="50"
              viewBox="0 0 150 150"
            >
              <circle
                cx="75"
                cy="75"
                r="70"
                strokeWidth="10"
                fill="none"
                strokeDasharray="440"
                strokeDashoffset="440"
              ></circle>
            </svg>{" "}
          </div>
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
                  <div className="w-10 h-10 rounded-xl bg-violet-400 translate-y-9 "></div>
                </div>
              </div>
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
        <div className="mt-5 relative bg-red-50 w-full h-full flex items-center justify-center -translate-x-12">
          {" "}
          {/* <Svg mainRef={mainRef}></Svg> */}
        </div>
        <div
          className={`w-fit mt-10 xl:text-2xl lg:text-xl font-thin text-2xl z-20 flex md:flex-row flex-col  items-center justify-between font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-900 "
          } `}
        >
          <span
            className={`text-xl flex items-start lg:mr-5 justify-center pt-5 w-48 h-48 border-2  rounded-xl border-opacity-50 group relative overflow-hidden ${
              isDarkMode ? "border-zinc-200 " : "border-zinc-900 "
            } `}
          >
            {" "}
            <span className="z-50">User-Friendly UI</span>
            <FontAwesomeIcon
              className="absolute text-4xl group-hover:-translate-x-32 transition-all duration-700   right-22 top-20 z-50 "
              icon={faUsersLine}
            />
            <FontAwesomeIcon
              className="absolute transition-all duration-700  translate-x-32 group-hover:translate-x-0 text-4xl right-22 top-20 z-50"
              icon={faSmile}
            />
            <div
              className={`w-14 h-14 bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-300 group-hover:bg-opacity-10 grou^-hover:-translate-y-20 ${
                isDarkMode ? "bg-violet-400  " : "bg-violet-900 "
              }`}
            ></div>
          </span>
          <span
            className={`text-xl flex items-start lg:mr-5  justify-center pt-5 w-48 h-48 border-2 rounded-xl border-opacity-50 relative group overflow-hidden md:mt-0 mt-5 ${
              isDarkMode ? "border-zinc-200 " : "border-zinc-900 "
            } `}
          >
            {" "}
            Responsive Design
            <FontAwesomeIcon
              className="absolute text-4xl group-hover:-translate-x-16 transition-all duration-700   right-12 top-24 group-hover:-rotate-12 rotate-12 z-50"
              icon={faMobile}
            />
            <FontAwesomeIcon
              className="absolute transition-all duration-700 group-hover:translate-x-16 group-hover:rotate-12 text-4xl left-10 top-20 -rotate-12 z-50"
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
              className={`w-14 h-14  rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-200 group-hover:bg-opacity-0 grou^-hover:-translate-y-20 ${
                isDarkMode
                  ? "bg-violet-400 bg-opacity-30 "
                  : "bg-violet-900 bg-opacity-30 "
              }`}
            ></div>
          </span>
          <span
            className={`text-xl flex items-start justify-center pt-5 w-48  h-48 border-2  rounded-xl border-opacity-50 relative group overflow-hidden md:mt-0 mt-5 ${
              isDarkMode ? "border-zinc-200 " : "border-zinc-900 "
            } `}
          >
            {" "}
            Base de Données
            <FontAwesomeIcon
              className="absolute group-hover:rotate-180 transition-all duration-700 text-4xl right-22 top-20 z-50"
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
    </div>
  );
}

export default Stack;
