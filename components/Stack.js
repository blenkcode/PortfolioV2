import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import Cubes from "./Cubes";
import Cubes2 from "./Cubes2";

import dynamic from "next/dynamic";

import { gsap } from "gsap";

function Stack({}) {
  const [isVisible, setIsVisible] = useState(true);
  // const [scrollY, setScrollY] = useState(0);
  // const hiRef = useRef(null);
  // console.log(scrollY);

  // useEffect(() => {
  //   if (scrollY > 550) {
  //     setIsVisible(true);
  //   }
  // }, [scrollY]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsLargeScreen(true); // Ecran lg et plus
      } else {
        setIsLargeScreen(false); // Ecran en dessous de lg
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center   ">
      {/* <div className="lg:text-4xl text-2xl flex text-zinc-100   mb-10 border-solid px-5 py-2 lg:py-5 font-Noehmi">
        Stack Technique <div className="ml-3">🛠️</div>
      </div> */}

      <div className="flex flex-col sm:flex-row items-center justify-center px-5 lg:px-0 sm:pl-0 sm:pb-0 pb-0 w-full overflow-visible relative  ">
        {/* <span className="lg:visible invisible lg:flex absolute -rotate-6 -top-10 left-80 text-lg text-violet-300">
          Hover me !<img className="w-5 ml-5" src="./cursor1.png"></img>
        </span>
        <span className="visible lg:hidden flex absolute -rotate-6 -top-1 left-80 text-sm text-violet-300">
          Touch me !<img className="w-5 ml-5" src="./cursor1.png"></img>
        </span> */}
        <div
          className={`${
            isVisible
              ? "    z-50 flex lg:flex-row flex-col  opacity-100 translate-y-0 transition duration-[2000ms]"
              : styles.invisible
          } flex flex-col lg:flex-row items-center justify-center`}
        >
          {/* {isLargeScreen ? (
            <Cubes />
          ) : (
            <div className="flex justify-center items-center">
              <Cubes2></Cubes2>
            </div>
          )} */}
          <div className="2xl:px-16 sm:px-7 px-6 lg:w-1/3  rounded-lg z-10  lg:mt-0 mt-10 relative ">
            <p className="2xl:text-lg lg:text-base font-thin text-md text-zinc-200 z-20  font-Satoshi  ">
              J'utilise <b className="text-violet-400 font-bold">TypeScript</b>{" "}
              pour vous offrir des sites modernes et performants avec les
              technologies les plus avancées. <br /> <br />
              Pour le développement front-end, j'emploie les frameworks
              <b className="text-violet-400 font-bold"> React</b> et{" "}
              <b className="text-violet-400 font-bold">Next.js</b>, avec{" "}
              <b className="text-violet-400 font-bold">Redux</b> pour la gestion
              des états et les librairies{" "}
              <b className="text-violet-400 font-bold">Tailwind</b> &{" "}
              <b className="text-violet-400 font-bold">Gsap</b> pour un design
              soigné et des animations captivantes.
              <br /> <br />
              Pour le back-end, je m'appuie sur{" "}
              <b className="text-violet-400 font-bold">Node.js</b>,{" "}
              <b className="text-violet-400 font-bold">Express</b> et{" "}
              <b className="text-violet-400 font-bold">Socket.io</b> afin de
              gérer les serveurs, les requêtes et opérations CRUD sur bases de
              données.
            </p>
            {/* <div className="z-50  absolute -top-10 -right-10 2xl:h-128 2xl:w-128 xl:h-110 xl:w-110 w-96 h-96 bg-violet-500   transition-opacity  lg:opacity-70 opacity-0 rounded-full bg-opacity-20 "></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
