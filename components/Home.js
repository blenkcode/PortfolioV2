import Stack from "./Stack";

import { useEffect, useRef } from "react";
import NewTitle from "./NewTitle";

import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ShaderSceneCopy from "./ShaderSceneCopy";
import AllProjects from "./AllProjects";
import About from "./About";
import Lenis from "@studio-freight/lenis";
import Contact from "./Contact";
import Subtitles from "./Subtitles";
import { useMainRef } from "../MainRefContext";

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "top",
        end: "100%",
        scrub: true,
        id: "background-animation",
      },
    });

    tl.to(backgroundRef.current, {
      y: "-55%",
      ease: "none",
    });
  }, []);
  const backgroundRef = useRef(null);
  return (
    <main
      ref={mainRef}
      className={` flex flex-col transition-colors   items-center justify-center relative overflow-hidden w-full  text-neutral-200 bg-neutral-800`}
    >
      <div
        ref={backgroundRef}
        className="fixed top-0 left-0 w-full h-[250vh] opacity-100"
      >
        <Canvas>
          <ShaderSceneCopy />
        </Canvas>
        <div className="w-full h-full fixed top-0 backgroundd z-10"></div>
        <div className="w-full h-full fixed top-0 backgroundd2 z-10"></div>
      </div>{" "}
      <div className="flex w-full  flex-col lg:h-lvh justify-center items-center relative ">
        <NewTitle mainref={mainRef} />

        <Subtitles />
      </div>
      <div className="w-full flex flex-col ">
        <div className="flex items-center justify-center ">
          {" "}
          <About></About>
        </div>
        <div className=" flex items-center justify-center mt-32 pb-32">
          <AllProjects mainRef={mainRef} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        {" "}
        <div className="mt-32">
          {" "}
          <Contact></Contact>
        </div>
        <div className="w-full mt-32">
          {" "}
          <Footer></Footer>
        </div>
      </div>
      {/* <SmoothCounter /> */}
    </main>
  );
}

export default Home;
