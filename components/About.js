import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import ImageDistortion from "./MorphShader";
import React, { Suspense } from "react";
const About = ({ mainRef }) => {
  const line1ref = useRef(null);
  const line2ref = useRef(null);

  const line4ref = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);
  const imgCRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Nouvelle animation pour imgRef
    gsap.fromTo(
      imgRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: mainRef,
          start: "9%",
        },
      }
    );
  }, []);
  useEffect(() => {
    setIsMounted(true);

    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const createAnimation = (elements, config) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "1%",
          end: "2%",
          scrub: 1,
        },
      });

      elements.forEach((element, index) => {
        if (element.current) {
          tl.fromTo(
            element.current,
            {
              x: config.startX[index],
              ...(config.startY && { y: config.startY[index] }),
              ...(config.startOpacity && {
                opacity: config.startOpacity[index],
              }),
            },
            {
              x: config.endX[index],
              ...(config.endY && { y: config.endY[index] }),
              ...(config.endOpacity && { opacity: config.endOpacity[index] }),
              scrollTrigger: {
                trigger: mainRef,
                ease: "power1.inOut",
                start: config.animStart || "5%",
                end: config.animEnd || "30%",
                scrub: config.scrub ?? 1,
              },
            }
          );
        }
      });
    };

    setTimeout(() => {
      // Text animations
      createAnimation([line1ref, line2ref, line4ref, imgRef], {
        startX: ["-20%", "-30%", "-30%", "-80%"],
        endX: ["-10%", "0%", "-12%", "-5%"],
        animStart: "5%",
        animEnd: "30%",
      });

      // Image animations
      createAnimation([img1Ref, img2Ref], {
        startX: ["-75%", "-33%"],
        endX: ["28%", "8%"],
        startY: ["-6%", "-2%"],
        endY: ["14%", "13%"],
        animStart: "3%",
        animEnd: "23%",
      });

      // New opacity animation for imgRef
      gsap.fromTo(
        imgRef.current,
        { opacity: 0 },
        {
          opacity: 1,

          duration: 1.2,
          delay: 0,
          scrollTrigger: {
            trigger: mainRef,
            start: "7%",
            toggleActions: "play none none reverse",
          },
        }
      );
      gsap.fromTo(
        line4ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: mainRef,
            start: "9%",
          },
        }
      );
      gsap.fromTo(
        line1ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.25,
          scrollTrigger: {
            trigger: mainRef,
            start: "9%",
          },
        }
      );
      gsap.fromTo(
        line2ref.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 0.8,
          scrollTrigger: {
            trigger: mainRef,
            start: "9%",
          },
        }
      );
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mainRef]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="text-neutral-100 pr-32 2xl:pb-80 xl:pb-72 lg:pb-64  2xl:pt-56 xl:pt-52 lg:pt-48 items-center justify-end 2xl:text-4xl flex  font-Satoshi font-thin w-full px-10 relative">
      <div
        ref={imgRef}
        className="imageabout opacity-0 absolute mt-20  left-1/3 group z-10 overflow-visible "
      >
        {" "}
        <div className="relative  w-4/6  h-full">
          <div ref={img1Ref} className="absolute z-20  scale-125 opacity-70">
            <ImageDistortion
              imageUrl="/ValentinMOR.webp"
              className="z-10"
              fadeDuration={100}
              width={775}
              height={987} // Durée du fade en millisecondes
            />
            <div className="w-12 h-1 bg-neutral-800 opacity-30 absolute -top-20"></div>
            <div className="w-12 h-1 bg-neutral-800 opacity-30 absolute right-0 -bottom-20"></div>
          </div>
          <img
            ref={img2Ref}
            src="/ValentinMOR.webp"
            className="absolute overflow-hidden scale-150 z-10 top-0 backdrop-blur-xl shadow-2xl   opacity-40"
          ></img>
        </div>
      </div>
      <p className="z-20 w-1/2   dynamic-textabout relative">
        <div
          ref={line4ref}
          className="mb-10 dynamic-textabouttitle text-neutral-800 "
        >
          Hello! I'm{" "}
          <span className="allTextcolor font-playfair">Valentin</span> a 28
          years old <br></br>front-end developer.
        </div>
        <div className="mb-3 text-neutral-800" ref={line1ref}>
          I strive to create intuitive and usefull interfaces for your web
          applications.
        </div>
        <div className="mb-3 text-neutral-800" ref={line2ref}>
          I'm passionate about animations and transitions that gives a unique
          feeling to a website.
        </div>
      </p>
    </div>
  );
};

export default About;
