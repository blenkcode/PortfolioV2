import Right from "./Right";
import Stack from "./Stack";

import Left from "./Left";
import Portfoliov2 from "./Portfoliov2";
import Background from "./Background";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useTheme } from "../ThemeContext";
import Stack2 from "../components/Stack2";
import { useMainRef } from "../MainRefContext";
function Home({}) {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const leftRef = useRef(null);
  const mainRef = useRef(null);
  const circleRef = useRef(null);
  const techRef = useRef(null);
  const spanRef = useRef(null);
  const rightRef = useRef(null);
  const stackRef = useRef(null);
  const groupRef = useRef(null);
  const portfolioRef = useRef(null);

  const { setMainRefValue } = useMainRef();
  const morphRef = useRef(null);
  const backgroundTriggerRef = useRef(null);
  useEffect(() => {
    if (mainRef.current) {
      setMainRefValue(mainRef.current);
    }
  }, [setMainRefValue]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (backgroundTriggerRef.current) {
      backgroundTriggerRef.current.kill();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "3%",
        end: "60%",
        scrub: 3,
        onUpdate: (self) => {},
      },
    });
    if (screenWidth > 1000) {
      tl.fromTo(
        mainRef.current,
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 0.8)"
            : "rgba(1, 10, 10, 0.1)",
        },
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 0.8)"
            : "rgba(24, 24, 27, 0.1)",
          duration: 1,
        }
      ).to(mainRef.current, {
        backgroundColor: isDarkMode
          ? "rgba(24, 24, 27, 0.8)"
          : "rgba(24, 24, 27, 0.1)",
        duration: 1,
      });
    } else {
      tl.fromTo(
        mainRef.current,
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 1)"
            : "rgba(1, 10, 10, 0.1)",
        },
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 1)"
            : "rgba(24, 24, 27, 0.1)",
          duration: 1,
        }
      ).to(mainRef.current, {
        backgroundColor: isDarkMode
          ? "rgba(24, 24, 27, 1)"
          : "rgba(24, 24, 27, 0.1)",
        duration: 1,
      });
    }

    backgroundTriggerRef.current = tl.scrollTrigger;
    ScrollTrigger.refresh();

    return () => {
      if (backgroundTriggerRef.current) {
        backgroundTriggerRef.current.kill();
      }
    };
    // Supprimer uniquement le ScrollTrigger lié au background si il existe
  }, [isDarkMode]);
  //GSAP SCROLL EVENTS
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      gsap.fromTo(
        leftRef.current,
        { y: 0 },
        {
          y: "-150%",

          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "3%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { y: 0 },
        {
          y: "-150%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "3%",
            scrub: 1,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "30%", // Point de départ global de la timeline
          end: "41%", // Point de fin global
          scrub: 1, // Permet un effet fluide en synchronisant l'animation avec le scroll
        },
      });

      // Première animation - de y: 200% à y: 0% entre 30% et 31%
      tl.fromTo(
        groupRef.current,
        { y: "200%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "23%",
            end: "25%",
            scrub: 1,
          },
        }
      );

      // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
      tl.fromTo(
        groupRef.current,
        { y: "0%" },
        {
          y: "-170%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "37%",
            end: "43%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        techRef.current,
        { x: 0 },
        {
          x: "-50%",

          scrollTrigger: {
            trigger: mainRef.current,
            start: "24%",
            end: "27%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        spanRef.current,
        { x: "100%" },
        {
          x: "0%",

          scrollTrigger: {
            trigger: mainRef.current,
            start: "24%",
            end: "27%",
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        portfolioRef.current,
        { y: "100%", visibility: "hidden" }, // Commence avec l'élément hors écran (translate-y-full)
        {
          y: "0%", // Translate jusqu'à y = 0 (visible à l'écran)
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current, // Déclencher avec le scrolling de mainRef
            start: "25%", // Commence à 40% du scroll
            end: "26%", // Finit à 46% du scroll
            scrub: 2,
            // Synchronisation avec le scroll
          },
        }
      );

      gsap.set(circleRef.current, { scale: 0 });
      gsap.fromTo(
        circleRef.current,
        { scale: 0, visibility: "hidden" },
        {
          scale: 1,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "2%",
            end: "10%",
            scrub: 2,
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "1%", // Début du trigger à 1% du scroll
          end: "2%", // Fin du trigger à 31% du scroll
          scrub: 1, // Synchronisation avec le scroll pour un effet fluide
          // Utile pour le développement, désactive pour la production
        },
      });

      tl.fromTo(
        stackRef.current,
        { y: "200%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "2%",
            end: "4%",
            scrub: 1,
          },
        }
      );

      // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
      tl.fromTo(
        stackRef.current,
        { y: "0%" },
        {
          y: "-200%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "20%",
            end: "25%",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  console.log(isDarkMode);
  return (
    <main
      ref={mainRef}
      className=" flex flex-col transition-colors  bg-opacity-70 items-center justify-center relative overflow-hidden h-auto w-full  "
    >
      <div
        ref={morphRef}
        className={`fixed top-1/2   right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-screen flex flex-row    ${
          isDarkMode ? "opacity-100 " : "opacity-100 "
        }`}
      >
        <Background></Background>
      </div>

      <div className="flex flex-col px-5 lg:px-0 lg:mt-0 mt-20  justify-center items-center w-full relative   ">
        <div className="flex w-full lg:flex-row flex-col lg:h-lvh justify-center items-center ">
          <div ref={leftRef} className=" lg:w-1/2 top-1/2 transform  z-40">
            <Left></Left>
          </div>

          <div
            ref={rightRef}
            className="  transform fixed lg:relative invisible lg:visible"
          >
            <Right></Right>
          </div>
        </div>
        <div className="w-full lg:h-lvh relative">
          <div
            ref={stackRef}
            className=" w-full py-8 lg:fixed top-1/2 left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 lg:invisible lg:py-0  z-30"
          >
            {" "}
            <Stack mainref={mainRef}></Stack>
          </div>
        </div>
        {/* <div
          ref={groupRef}
          className="flex flex-col w-full lg:invisible fixed top-1/3 items-center "
        >
          <div
            ref={spanRef}
            className="w-256 h-110 -top-0 rounded-full bg-violet-400 absolute -right-80"
          ></div>
          <div ref={techRef}>
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-8 mb-8 justify-items-center">
              <div className="bg-zinc-900  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative group">
                <img
                  src="nex.webp"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute  text-sm  bottom-3 text-white font-thin">
                  Next.js
                </span>
              </div>
              <div className="bg-zinc-900  group bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="react.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm bottom-3 text-white font-thin">
                  React
                </span>
              </div>
              <div className="bg-zinc-900  group bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="tail.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Tailwind
                </span>
              </div>
              <div className="bg-zinc-900 group  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="redux1.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Redux
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8  mb-8 justify-items-center">
              <div className="bg-zinc-900  group bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="node.png"
                  className="w-1/2 grayscale group-hover:scale-150 transition-all duration-500 absolute top-5 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Node.js
                </span>
              </div>
              <div className="bg-zinc-900 group  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="ts.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  TypeScript
                </span>
              </div>
              <div className="bg-zinc-900 group  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="ex.png"
                  className="w-1/2 grayscale group-hover:scale-125 transition-all duration-500 absolute top-5 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Express
                </span>
              </div>
              <div className="bg-zinc-900 group bg-opacity-40 rounded-xl items-center justify-center overflow-hidden h-32 w-32 flex flex-col relative">
                <img
                  src="mongo.png"
                  className="w-1/2 grayscale group-hover:scale-125 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Mongo DB
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8  mb-8 justify-items-center">
              <div className="bg-zinc-900  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden group h-32 w-32 flex flex-col relative">
                <img
                  src="git.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Git
                </span>
              </div>
              <div className="bg-zinc-900  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden group h-32 w-32 flex flex-col relative">
                <img
                  src="gsaplogo.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-source">
                  Gsap
                </span>
              </div>
              <div className="bg-zinc-900  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden group h-32 w-32 flex flex-col relative">
                <img
                  src="spline.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Spline
                </span>
              </div>
              <div className="bg-zinc-900  bg-opacity-40 rounded-xl items-center justify-center overflow-hidden group h-32 w-32 flex flex-col relative">
                <img
                  src="expo.png"
                  className="w-1/3 grayscale group-hover:scale-150 transition-all duration-500 absolute top-7 "
                ></img>
                <span className="absolute text-sm  bottom-3 text-white font-thin">
                  Expo
                </span>
              </div>
            </div>
          </div>
        </div> */}
        <div className="fixed top-1/2 -translate-y-1/2"></div>
        <div
          ref={portfolioRef}
          className="w-full lg:h-lvh mt-10  lg:mt-0  pb-10 lg:pb-0 flex items-start justify-center lg:invisible visible lg:fixed top-0 lg:py-0   "
        >
          <Portfoliov2 mainRef={mainRef} />
        </div>
        <div className="w-full lg:visible invisible h-0 lg:h-lvh opacity-0  lg:py-0 2xl:shadow-2xl lg:shadow-none shadow-2xl -z-50 ">
          {" "}
        </div>
        <div className="w-full lg:visible invisible h-0 lg:h-lvh opacity-0  lg:py-0 2xl:shadow-2xl lg:shadow-none shadow-2xl -z-50 ">
          {" "}
        </div>
      </div>
    </main>
  );
}

export default Home;
