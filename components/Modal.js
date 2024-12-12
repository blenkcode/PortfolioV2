import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { Canvas } from "@react-three/fiber";
import GsapMagnetic from "../utils/GsapMagnetic2";
import ShaderSceneCopy from "./ShaderSceneCopy";
const Modal = ({ modal, projects }) => {
  const { active, index } = modal;
  const containerRef = useRef(null);
  useEffect(() => {
    // Définir le point de transformation au centre du conteneur
    gsap.set(containerRef.current, {
      transformOrigin: "50% 50%",
    });

    const moveContainerX = gsap.quickTo(containerRef.current, "left", {
      duration: 0.8,
      ease: "power3.out",
    });
    const moveContainerY = gsap.quickTo(containerRef.current, "top", {
      duration: 0.8,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const vw = window.innerWidth / 100;
      const containerWidth = 28 * vw; // 22vw en pixels
      const halfWidth = containerWidth / 2;

      moveContainerX(clientX - halfWidth);
      moveContainerY(clientY - halfWidth); // Utilise halfWidth aussi pour la hauteur car c'est un carré
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div ref={containerRef} className="fixed z-50 pointer-events-none ">
      <div
        className={` ${
          active ? "scale-100" : "scale-0"
        } z-40 absolute w-[28vw] aspect-square overflow-x-hidden transition-all duration-500`}
      >
        <div
          className={`absolute  modalslider w-[22vw] aspect-square flex items-center translate-x-[3vw] justify-center flex-col`}
          style={{ top: index * -100 + "%" }}
        >
          {projects.map((projects, index) => {
            return (
              <div
                key={index}
                style={{ backgroundColor: projects.color }}
                className={` w-[28vw] aspect-square transition-all duration-500 flex items-center justify-center flex-col px-5 relative ${
                  active && index === modal.index ? "scale-100" : "scale-0"
                }`}
              >
                <img
                  src={projects.src}
                  className=" shadow-2xl  z-30 pointer-events-none "
                ></img>
                <div
                  className={`absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 z-50 ${
                    active && index === modal.index ? "scale-100" : "scale-0"
                  } transition-all duration-500 delay-700`}
                >
                  <GsapMagnetic>
                    <div className="aspect-square w-[5vw] rounded-full   flex items-center shadow-2xl justify-center bg-[#212D56]">
                      discover
                    </div>
                  </GsapMagnetic>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
