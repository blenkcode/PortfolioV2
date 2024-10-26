import Stack from "./Stack";
import Portfoliov3 from "./Portfoliov3";
import { useEffect, useRef } from "react";
import NewTitle from "./NewTitle";
import dynamic from "next/dynamic";
import SmoothCounter from "./Counter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const CustomShaderMaterial = dynamic(() => import("./CustomShader"), {
  ssr: false,
});

import About from "./About";
import Lenis from "@studio-freight/lenis";
import { useTheme } from "../ThemeContext";
import Subtitles from "./Subtitles";
import { useMainRef } from "../MainRefContext";

function Home({}) {
  const { isDarkMode } = useTheme();
  const selected = useRef(null);
  const mainRef = useRef(null);

  const { setMainRefValue } = useMainRef();
  const morphRef = useRef(null);
  const backgroundTriggerRef = useRef(null);
  useEffect(() => {
    if (mainRef.current) {
      setMainRefValue(mainRef.current);
    }
  }, [setMainRefValue]);
  useEffect(() => {
    // Initialisation de Lenis
    const lenis = new Lenis({
      duration: 1.2, // Durée du défilement
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Fonction d'easing
      smooth: true,
    });

    // Fonction pour mettre à jour Lenis à chaque frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup lors du démontage du composant
    return () => {
      lenis.destroy();
    };
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      selected.current,
      { x: "-100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef.current,
          start: "46%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
  }, []);

  console.log(isDarkMode);
  return (
    <main
      ref={mainRef}
      className={` flex flex-col transition-colors   items-center justify-center relative overflow-hidden h-auto w-full    ${
        isDarkMode ? "bg-neutral-200 " : "bg-violet-100 "
      }`}
    >
      {" "}
      <div className="flex w-full  flex-col lg:h-lvh justify-center items-center ">
        <NewTitle mainref={mainRef} />
        {/* <ShaderTitleMobile /> */}
        <Subtitles />
      </div>
      <div className="w-full mt-10 lg:mt-0 space-y-5">
        <div className=" lg:py-5 lg:px-5 px-3 py-3">
          {" "}
          <About></About>
        </div>
        <div className=" lg:py-3 py-1">
          <Stack></Stack>
        </div>
      </div>
      <div className="w-full  px-0">
        <Portfoliov3 mainRef={mainRef} />
      </div>
      <SmoothCounter />
      <div
        ref={selected}
        className="dynamic-text font-projekt font-thin fixed bottom-10 left-10"
      >
        Selected<span className="font-playfair">Works</span>
      </div>
    </main>
  );
}

export default Home;
