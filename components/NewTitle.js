"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ShaderSceneCopy from "./ShaderSceneCopy";
import Available from "./Available";
import TextDistortion from "./shaders/textShader";
import AnimatedButton from "./ModularButton";
const NewTitle = ({ mainRef }) => {
  const FreeRef = useRef(null);
  const welcomeRef = useRef(null);
  const titleRef = useRef(null);
  useEffect(() => {
    // Première animation au chargement de la page
    const initialAnimation = gsap.timeline();

    initialAnimation.fromTo(
      FreeRef.current,
      { y: "100%", visibility: "hidden" },
      {
        y: "0%",
        visibility: "visible",
        duration: 2,
        delay: 6.2,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      welcomeRef.current,
      { y: "100%", visibility: "hidden" },
      {
        y: "0%",
        visibility: "visible",
        duration: 1,
        delay: 6.2,
        ease: "power3.out",
      }
    );

    // Nettoyage après l'animation
    initialAnimation.eventCallback("onComplete", () => {
      initialAnimation.kill(); // Tuer l'animation une fois terminée
    });
  }, []);

  return (
    <h1 className="  font-bold justify-center rounded-xl textcolor flex flex-col items-center px-5 py-5  h-lvh  lg:mb-0 relative  w-full">
      <div className="left-32 bottom-1/3 font-Satoshi font-normal -translate-y-full space-x-2 absolute text-neutral-800 flex items-center">
        {/* <div className="flex items-center overflow-hidden relative">
          <div ref={FreeRef}>Free-lance</div>
        </div>{" "} */}
      </div>
      <div className="font-normal font-Satoshi  text-neutral-800 absolute w-fit  top-5 hover:text-neutral-800 transition-all text-[1vw] duration-200">
        {" "}
        <AnimatedButton text="AVAILABLE FOR WORK" />
      </div>{" "}
      <div className="items-center  w-full relative justify-center z-10 flex  flex-col">
        <div className="flex items-center justify-start  ">
          <TextDistortion
            text={`FRONT END
WEB DEVELOPPER`}
            fontSize="7.5vw"
            className="w-full"
          />
        </div>

        <div className=" absolute font-Satoshi font-normal -bottom-10 text-neutral-800 mt-32 flex items-center space-x-2">
          <div className="w-3 h-3 bg-neutral-800"></div>
          <div className="flex items-center overflow-hidden relative">
            <div ref={welcomeRef}>Welcome to my 2024 portfolio</div>
          </div>{" "}
        </div>
      </div>
    </h1>
  );
};

export default NewTitle;
