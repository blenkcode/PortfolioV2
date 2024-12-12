import { useEffect, useRef } from "react";
import NewTitle from "./NewTitle";

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import About from "./About";
import Lenis from "@studio-freight/lenis";
import Contact from "./Contact";

import { useMainRef } from "../MainRefContext";

import Port from "./Port";

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
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "50% bottom",
        end: "100% bottom",
        // scrub: true,  // On retire scrub pour avoir une durée fixe
        id: "background-animation",
        toggleActions: "play none none reverse", // L'animation se joue une fois déclenchée et se reverse quand on remonte
      },
    });

    tl.fromTo(
      footerRef.current,
      {
        y: "100%",
        ease: "power3", // Ajout d'un easing pour une animation plus fluide
      },
      {
        y: 0,
        duration: 0.1, // Durée de 1 seconde
      }
    );

    return () => {
      ScrollTrigger.getById("background-animation")?.kill();
    };
  }, []);
  const backgroundRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <main
      ref={mainRef}
      className={` flex flex-col  transition-colors   items-center justify-center relative overflow-hidden w-full  text-neutral-200 `}
    >
      <div className="flex w-full  flex-col lg:h-lvh justify-center items-center relative z-20 pointer-events-none">
        <NewTitle mainref={mainRef} />
      </div>
      <div className="w-full h-fit bgclassique relative flex flex-col">
        {" "}
        <About></About>
        <Port></Port>
      </div>

      <Contact></Contact>
      {/* <SmoothCounter /> */}
    </main>
  );
}

export default Home;
