import Right from "./Right";
import Stack from "./Stack";
import Left from "./Left";
import Portfoliov2 from "./Portfoliov2";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useTheme } from "../ThemeContext";
import Backgroundv2 from "./Backgroundv2";
import { useMainRef } from "../MainRefContext";
import Strech from "./Strech";
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

  //GSAP SCROLL EVENTS
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      gsap.fromTo(
        leftRef.current,
        { y: 0 },
        {
          y: "-60%",

          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "100%",
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { y: 0 },
        {
          y: "-60%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "100%",
            scrub: 1,
          },
        }
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "30%", // Point de départ global de la timeline
          end: "41%", // Point de fin global
          scrub: 2, // Permet un effet fluide en synchronisant l'animation avec le scroll
        },
      });

      // Première animation - de y: 200% à y: 0% entre 30% et 31%
      tl.fromTo(
        groupRef.current,
        { y: "20%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "19%",
            end: "40%",
            scrub: 2,
          },
        }
      );

      // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
      tl.fromTo(
        groupRef.current,
        { y: "0%" },
        {
          y: "-20%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "30%",
            end: "41%",
            scrub: 1,
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
            start: "40%", // Commence à 40% du scroll
            end: "41%", // Finit à 46% du scroll
            scrub: 3,
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
        { y: "0%" },
        {
          y: "-60%",

          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "100%",
            scrub: 2,
          },
        }
      );

      tl.fromTo(
        stackRef.current,
        { opacity: 1 },
        {
          opacity: 0,

          scrollTrigger: {
            trigger: mainRef.current,
            start: "39%",
            end: "40%",
            scrub: 2,
          },
        }
      );

      // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
    }
  }, []);

  console.log(isDarkMode);
  return (
    <main
      ref={mainRef}
      className={` flex flex-col transition-colors   items-center justify-center relative overflow-hidden h-auto w-full  ${
        isDarkMode ? "bg-zinc-900 " : "bg-violet-100 "
      }`}
    >
      {" "}
      <div className={` ${isDarkMode ? "opacity-50 " : "opacity-50 "}`}>
        {" "}
        <Backgroundv2></Backgroundv2>
      </div>
      {/* <div
        ref={morphRef}
        className={`fixed top-1/2   right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-screen flex flex-row    ${
          isDarkMode ? "opacity-100 " : "opacity-100 "
        }`}
      >
        <Background></Background>
      </div> */}
      <div className="flex flex-col px-5 lg:px-0 lg:mt-0 mt-20  justify-center items-center w-full relative   ">
        <div className="flex w-full lg:flex-row flex-col lg:h-lvh justify-center items-center ">
          <div ref={leftRef} className=" lg:w-1/2 top-1/2 transform  z-40">
            <Left></Left>
          </div>

          <div ref={rightRef} className="  transform  lg:relative ">
            <Right></Right>
          </div>
        </div>
        <div className="w-full lg:h-lvh relative ">
          <div ref={stackRef} className=" w-full  items-start  lg:py-0  z-30">
            {" "}
            <Stack mainref={mainRef}></Stack>
          </div>
        </div>
        <div
          ref={groupRef}
          className="flex flex-col w-full justify-center items-center "
        ></div>
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
