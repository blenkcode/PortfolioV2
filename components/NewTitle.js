"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ShaderSceneCopy from "./ShaderSceneCopy";

const NewTitle = ({ mainRef }) => {
  const webRef = useRef(null);
  const web2Ref = useRef(null);

  const webRefO = useRef(null);
  const web2RefO = useRef(null);
  //WEB WORD
  const containRef = useRef(null);

  const speRef = useRef(null);
  const spe2Ref = useRef(null);

  const speRefO = useRef(null);
  const spe2RefO = useRef(null);

  const digiRef = useRef(null);
  const digi2Ref = useRef(null);

  const digiRefO = useRef(null);
  const digi2RefO = useRef(null);
  const devRef = useRef(null);

  const shaderRef = useRef(null);
  const elementRef = useRef(null);

  const leftBLine = useRef(null);
  const leftTLine = useRef(null);
  const rightTLine = useRef(null);
  const rightBLine = useRef(null);

  useEffect(() => {
    // Première animation au chargement de la page
    const initialAnimation = gsap.timeline();

    initialAnimation

      .fromTo(
        webRef.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,
          delay: 5.8,
          ease: "power3.out",
        }
      )

      .fromTo(
        speRef.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,

          ease: "power3.out",
        },
        "-=1.8"
      )
      .fromTo(
        digiRef.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,

          ease: "power3.out",
        },
        "-=1.8"
      );

    // Nettoyage après l'animation
    initialAnimation.eventCallback("onComplete", () => {
      initialAnimation.kill(); // Tuer l'animation une fois terminée
    });
  }, []);
  useEffect(() => {
    // Première animation au chargement de la page
    const initialAnimation = gsap.timeline();

    initialAnimation

      .fromTo(
        webRefO.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,
          delay: 5.8,
          ease: "power3.out",
        }
      )

      .fromTo(
        speRefO.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,

          ease: "power3.out",
        },
        "-=1.8"
      )
      .fromTo(
        digiRefO.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          visibility: "visible",
          duration: 2,

          ease: "power3.out",
        },
        "-=1.8"
      );

    // Nettoyage après l'animation
    initialAnimation.eventCallback("onComplete", () => {
      initialAnimation.kill(); // Tuer l'animation une fois terminée
    });
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "1%", // Début du trigger à 1% du scroll
        end: "2%", // Fin du trigger à 31% du scroll
        scrub: 1, // Synchronisation avec le scroll pour un effet fluide
        // Utile pour le développement, désactive pour la production
      },
    });

    tl.fromTo(
      webRef.current,
      { y: "0%" },
      {
        y: "100%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      web2Ref.current,
      { y: "-100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      speRef.current,
      { y: "0%" },
      {
        y: "-100%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      spe2Ref.current,
      { y: "100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      digiRef.current,
      { y: "0%" },
      {
        y: "100%",

        scrollTrigger: {
          trigger: mainRef,
          start: "0%",
          end: "15%",
          ease: "power1.inOut",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      digi2Ref.current,
      { y: "-100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      leftBLine.current,
      {
        y: "200%",
      },
      { y: "0%", duration: 1, delay: 6.3 }
    )
      .fromTo(
        leftTLine.current,
        {
          x: "-200%",
        },
        { x: "0%", duration: 1 },
        "<"
      )
      .fromTo(
        rightTLine.current,
        {
          y: "-200%",
        },
        { y: "0%", duration: 1 },
        "<"
      )
      .fromTo(
        rightBLine.current,
        {
          x: "200%",
        },
        { x: "0%", duration: 1 },
        "<"
      );
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "1%", // Début du trigger à 1% du scroll
        end: "2%", // Fin du trigger à 31% du scroll
        scrub: 1, // Synchronisation avec le scroll pour un effet fluide
        // Utile pour le développement, désactive pour la production
      },
    });

    tl.fromTo(
      webRefO.current,
      { y: "0%" },
      {
        y: "100%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      web2RefO.current,
      { y: "-100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      speRefO.current,
      { y: "0%" },
      {
        y: "-100%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      spe2RefO.current,
      { y: "100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      digiRefO.current,
      { y: "0%" },
      {
        y: "100%",

        scrollTrigger: {
          trigger: mainRef,
          start: "0%",
          end: "15%",
          ease: "power1.inOut",
          scrub: 1,
        },
      }
    );
    tl.fromTo(
      digi2RefO.current,
      { y: "-100%" },
      {
        y: "0%",

        scrollTrigger: {
          trigger: mainRef,
          ease: "power1.inOut",
          start: "0%",
          end: "15%",
          scrub: 1,
        },
      }
    );

    // Deuxième animation - de y: 0% à y: -200% entre 40% et 41%
  }, []);

  return (
    <h1
      ref={containRef}
      className=" font-projekt font-thin justify-center  textcolor flex flex-col items-center w-full h-2/3 mt-16 lg:mb-0 relative "
    >
      <div
        ref={shaderRef}
        className="overflow-hidden z-30 flex items-center circle justify-center  "
      >
        <div className="relative w-full h-full">
          {" "}
          <div className="shader-container5 relative ">
            <Canvas camera={{ position: [0, 0, 1], fov: 25 }} dpr={[1, 3]}>
              <ShaderSceneCopy />
            </Canvas>
          </div>
          <div
            ref={elementRef}
            className="absolute overlaytext  top-1/2 right-1/2 flex flex-col space-y-2 "
          >
            <div className="relative pointerevent ">
              {" "}
              <div className="relative h-fit   pointerevent items-center justify-start flex-col flex overflow-hidden">
                <span
                  ref={webRefO}
                  className=" h-full pointerevent invisible dynamic-text "
                >
                  {" "}
                  <span className="pointerevent  ">WEB</span>
                  <span ref={devRef} className="ml-5  pointerevent">
                    DEVELOPER
                  </span>
                </span>
                <span
                  ref={web2RefO}
                  className="h-full absolute   pointerevent dynamic-text"
                >
                  {" "}
                  <span className="pointerevent  ">WEB</span>
                  <span className="ml-5 pointerevent">DEVELOPER</span>
                </span>
              </div>{" "}
            </div>

            <div className="relative h-fit pointerevent   items-center justify-start flex-col flex overflow-hidden">
              <span
                ref={speRefO}
                className=" pointerevent invisible h-full dynamic-text "
              >
                SPECIALIZED IN <span className="pointerevent ">CRAFTING</span>
              </span>
              <span
                ref={spe2RefO}
                className="h-full pointerevent absolute dynamic-text"
              >
                SPECIALIZED IN <span className="pointerevent ">CRAFTING</span>
              </span>
            </div>
            <div className="relative pointerevent ">
              <div className="relative h-fit   items-center justify-start flex-col flex overflow-hidden">
                <span ref={digiRefO} className="invisible h-full dynamic-text ">
                  <span className="pointerevent  ">DIGITAL</span> EXPERIENCES
                </span>
                <span ref={digi2RefO} className="h-full absolute dynamic-text">
                  <span className="pointerevent ">DIGITAL</span> EXPERIENCES
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="circle23  absolute -translate-y-1 ">
        <div className="relative w-full h-full ">
          <div
            ref={leftBLine}
            className="absolute w-10 h-10 border-neutral-800 border-l-2 bottom-0 left-0 "
          ></div>
          <div
            ref={leftTLine}
            className="absolute w-20 h-10 border-neutral-800 border-b-2 bottom-0 left-0"
          ></div>
          <div
            ref={rightTLine}
            className="absolute w-10 h-10 border-neutral-800 border-r-2 -top-0 right-0"
          ></div>
          <div
            ref={rightBLine}
            className="absolute w-20 h-10 border-neutral-800 border-t-2 top-0 right-0"
          ></div>
        </div>
      </div>

      <div className="absolute right-1/2 top-1/2 overlaytext2  z-10 flex space-y-2 flex-col">
        <div className="relative pointerevent ">
          {" "}
          <div className="relative h-fit    text-neutral-800 pointerevent items-center justify-start flex-col flex overflow-hidden">
            <span
              ref={webRef}
              className=" h-full pointerevent invisible dynamic-text "
            >
              {" "}
              <span className="pointerevent  ">WEB</span>
              <span ref={devRef} className="ml-5  pointerevent">
                DEVELOPER
              </span>
            </span>
            <span
              ref={web2Ref}
              className="h-full absolute   pointerevent dynamic-text"
            >
              {" "}
              <span className="pointerevent  ">WEB</span>
              <span className="ml-5 pointerevent">DEVELOPER</span>
            </span>
          </div>{" "}
        </div>

        <div className="relative h-fit pointerevent text-neutral-900  items-center justify-start flex-col flex overflow-hidden">
          <span
            ref={speRef}
            className=" pointerevent invisible h-full dynamic-text "
          >
            SPECIALIZED IN <span className="pointerevent ">CRAFTING</span>
          </span>
          <span
            ref={spe2Ref}
            className="h-full pointerevent absolute dynamic-text"
          >
            SPECIALIZED IN <span className="pointerevent ">CRAFTING</span>
          </span>
        </div>
        <div className="relative pointerevent text-neutral-800">
          <div className="relative h-fit   items-center justify-start flex-col flex overflow-hidden">
            <span ref={digiRef} className="invisible h-full dynamic-text ">
              <span className="pointerevent  ">DIGITAL</span> EXPERIENCES
            </span>
            <span ref={digi2Ref} className="h-full absolute dynamic-text">
              <span className="pointerevent ">DIGITAL</span> EXPERIENCES
            </span>
          </div>
        </div>
      </div>
    </h1>
  );
};

export default NewTitle;
