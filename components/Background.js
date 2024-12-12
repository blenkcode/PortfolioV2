"use client";
import React from "react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { useEffect, useRef } from "react";
import ShaderSceneCopy from "../components/ShaderSceneCopy";
import { Canvas } from "@react-three/fiber";
const Background = ({ mainRef }) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
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
    <div
      ref={backgroundRef}
      className="fixed top-0 left-0 w-full h-[200vh] opacity-100 pointer-events-auto"
    >
      <Canvas>
        <ShaderSceneCopy />
      </Canvas>
      <div className="w-full h-full fixed top-0 backgroundd z-10 pointer-events-none"></div>
      <div className="w-full h-full fixed top-0 backgroundd2 z-10 pointer-events-none"></div>
    </div>
  );
};

export default Background;
