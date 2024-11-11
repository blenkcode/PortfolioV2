import Stack from "./Stack";

import { useEffect, useRef } from "react";
import NewTitle from "./NewTitle";

import SmoothCounter from "./Counter";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import AllProjects from "./AllProjects";
import About from "./About";
import Lenis from "@studio-freight/lenis";
import { useTheme } from "../ThemeContext";
import Subtitles from "./Subtitles";
import { useMainRef } from "../MainRefContext";
import Workflow from "./Workflow";
import Footer from "./Footer";

function Home({}) {
  // useEffect(() => {
  //   let scrollPosition = 0;

  //   const disableScroll = () => {
  //     scrollPosition = window.pageYOffset;
  //     document.body.style.overflow = "hidden";
  //     document.body.style.position = "fixed";
  //     document.body.style.top = `-${scrollPosition}px`;
  //     document.body.style.width = "100%";
  //   };

  //   const enableScroll = () => {
  //     document.body.style.overflow = "";
  //     document.body.style.position = "";
  //     document.body.style.top = "";
  //     document.body.style.width = "";
  //     window.scrollTo(0, scrollPosition);
  //   };

  //   // Désactive le scroll
  //   disableScroll();

  //   // Initialise GSAP et ScrollTrigger
  //   gsap.registerPlugin(ScrollTrigger);

  //   // Configuration des animations GSAP...
  //   const setupAnimations = () => {
  //     // Vos animations GSAP ici
  //   };

  //   // Attendre 5 secondes, puis activer le scroll et les animations
  //   const timer = setTimeout(() => {
  //     enableScroll();
  //     setupAnimations(); // Initialize GSAP animations after scroll is enabled
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timer);
  //     enableScroll();
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  const { isDarkMode } = useTheme();

  const mainRef = useRef(null);

  const { setMainRefValue } = useMainRef();

  useEffect(() => {
    if (mainRef.current) {
      setMainRefValue(mainRef.current);
    }
  }, [setMainRefValue]);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main
      ref={mainRef}
      className={` flex flex-col transition-colors   items-center justify-center relative overflow-hidden h-auto w-full    ${
        isDarkMode ? "bg-stone-200 " : "bg-violet-100 "
      }`}
    >
      {" "}
      <div className="flex w-full  flex-col lg:h-lvh justify-center items-center relative ">
        <NewTitle mainref={mainRef} />

        <Subtitles />
      </div>
      <div className="w-full ">
        <div className="flex items-center justify-center ">
          {" "}
          <About></About>
        </div>
        <div className=" flex items-center justify-center mt-32 pb-32">
          <AllProjects mainRef={mainRef} />
        </div>
        <Stack></Stack>
        <Footer></Footer>
      </div>
      {/* <SmoothCounter /> */}
    </main>
  );
}

export default Home;
