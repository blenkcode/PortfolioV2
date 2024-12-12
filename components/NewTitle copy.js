"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import GsapMagnetic from "../utils/GsapMagnetic2";
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
    <h1
      className=" pointer-events-none font-bold justify-end
     rounded-xl flex flex-col items-start pl-[4vw]   h-lvh  lg:mb-0 relative  w-full font-Satoshi z-20"
    >
      {" "}
      <div className="flex flex-col items-start justify-end absolute top-[30%] right-[12%] ">
        <div className=" pointer-events-auto tracking-normal w-[22vw]    text-[1.8vw] font-Satoshi">
          {" "}
          <div className="flex flex-col">
            {" "}
            <span className="font-Satoshi font-thin">Front-end developer</span>
            <span className="font-Satoshi font-thin">
              Crafting web experiences
            </span>
            <span className="font-Satoshi font-thin text-[1.2vw] mt-[1vw]">
              based in Montpellier, France.
            </span>
          </div>
          <div className="flex  space-x-[10%] w-full mt-[2vw] ">
            {/* <GsapMagnetic>
              <div className="text-[1vw] w-fit  font-thin   z-30 cursor-pointer    group relative overflow-hidden">
                {" "}
                <div
                  className="border-2 rounded-full border-neutral-200 button py-3 px-5 group-hover:bg-neutral-100 group-hover:bg-opacity-20  transition duration-200 relative z-20 

                [perspective:1000px]"
                >
                  {" "}
                  <span className="text-neutral-200  transition-all    group-hover:translate-x-full duration-300 ">
                    CONTACT
                  </span>
                </div>
              </div>
            </GsapMagnetic> */}
            <GsapMagnetic>
              <div className="text-[1vw] w-fit font-thin   z-30 cursor-pointer    group relative overflow-hidden">
                {" "}
                <div
                  className="border-2 rounded-full border-neutral-200 button py-3 px-5 group-hover:bg-neutral-100 group-hover:bg-opacity-20  transition duration-200 relative z-20 

                [perspective:1000px]"
                >
                  {" "}
                  <span className="text-neutral-100 transition-all    group-hover:translate-x-full duration-300 ">
                    BROWSE PROJECTS
                  </span>
                </div>
              </div>
            </GsapMagnetic>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {" "}
        <div className="relative  tracking-tight font-thin text-[14vw]  leading-tight  pb-[0vw]  ">
          mor valentin
        </div>
      </div>
    </h1>
  );
};

export default NewTitle;
