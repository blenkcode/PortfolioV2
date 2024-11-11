import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import AnimatedButton from "../components/ModularButton";
const About = ({ mainRef }) => {
  const line1ref = useRef(null);
  const line2ref = useRef(null);
  const line3ref = useRef(null);
  const line4ref = useRef(null);
  const line5ref = useRef(null);
  const line6ref = useRef(null);
  const line7ref = useRef(null);
  const line8ref = useRef(null);

  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);
  const idoRef = useRef(null);
  const skillsRef = useRef(null);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      // Nettoyage des animations existantes
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  // Effet pour les animations
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    // Configuration de la timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "5% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });

      // Animation sequence
      tl.from(line1ref.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          line2ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line3ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line4ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line5ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line6ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line7ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line8ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          imgRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        );
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, [isMounted, mainRef]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "8%",
        end: "17%",
        scrub: 2,
        id: "background-animation",
      },
    });

    tl.to(idoRef.current, {
      x: "50%",
      ease: "none",
    });
    tl.to(
      skillsRef.current,
      {
        x: "-50%",
        ease: "none",
      },
      "<="
    );
  }, []);
  useEffect(() => {
    if (!isMounted || typeof window === "undefined") return;

    // Configuration de la timeline
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "19% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "23% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "27% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });

      // Animation sequence
      tl.from(box1.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl2.from(box2.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
      tl3.from(box3.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, [isMounted, mainRef]);
  return (
    <div className=" py-28 items-start justify-center text-[1.8vw] flex w-4/5 font-Satoshi  px-10 relative flex-col font-thin">
      <div
        ref={line1ref}
        className="mb-16 flex items-center text-[2.5vw]  w-full z-20 "
      >
        Hey! I'm <span className="opacity-0">.</span>
        <span className=" font-Satoshi font-bold">Valentin</span>
        <span className="opacity-0">.</span> a 28 years old developer.
      </div>
      <div className="w-full flex translate-x-[3%]">
        <div className="">
          <div ref={line2ref} className="flex">
            <span className="flex">
              I strive to <span className="opacity-0">.</span>{" "}
              <p className="font-bold"> create</p>
              <span className="opacity-0">.</span> intuitive and usefull{" "}
              <span className="opacity-0">.</span>
              {/* <img
                className="w-[2.3vw] animate-atom grayscale "
                src="/svg/atom.svg"
              ></img> */}
              {/* <span className="opacity-0">.</span> */}
              interfaces<span></span>
            </span>
          </div>
          <div ref={line3ref} className="flex">
            for your web applications.
            {/* <img
              className="w-[2vw]  animate-web perspective-[1000px]"
              src="/svg/web.svg"
            ></img>{" "} */}
          </div>
          <div ref={line4ref} className="flex">
            <span className="flex">
              {" "}
              I'm <span className="opacity-0">.</span>
              {/* <img
                className="w-[2vw]  animate-heartpulse"
                src="/svg/heart3.svg"
              ></img>
              <span className="opacity-0">.</span> */}
              <p className="font-bold"> passionate</p>{" "}
              <span className="opacity-0">.</span> about{" "}
              <span className="opacity-0">.</span> <span>animations</span>{" "}
              <span className="opacity-0">.</span>and transitions,
            </span>{" "}
          </div>
          <div ref={line5ref} className="flex">
            <span className="flex">
              {" "}
              that gives a unique feeling
              <span className="opacity-0">.</span>
              {/* <img className="w-[2vw] " src="/svg/smile1.svg"></img>
              <span className="opacity-0">.</span> */}
              to a <span className="opacity-0">.</span>
              <p className="font-bold"> website</p>.
            </span>{" "}
          </div>
          {/* <div ref={line6ref} className="flex">
            <span className="flex">
              {" "}
              I also produce <span className="opacity-0">.</span>
              <img
                className="w-[2vw] animate-speaker "
                src="/svg/speaker.svg"
              ></img>{" "}
              <span className="opacity-0">.</span>
              electronic music as <span className="opacity-0">.</span>
              <Link
                target="_blank"
                href="https://open.spotify.com/intl-fr/artist/1dkEG4atVRsDIkhriguiSp"
              >
                "Blenk".
              </Link>
            </span>{" "}
          </div> */}
          <div ref={line7ref} className="mt-10 text-[1vw]">
            Don't hesitate to get in touch !
          </div>
          <div
            ref={line8ref}
            className="mt-8 text-[1vw] w-fit py-3 border-1  border-neutral-200"
          >
            <AnimatedButton text="CONTACT ME" />
          </div>
          {/* <div
            ref={imgRef}
            className="w-[15vw]  z-10 absolute top-[15%] right-[10%] "
          >
            <div className="relative">
              <Image
                src="/valentin.webp"
                width={2365}
                height={3348}
                className="opacity-90 z-50 "
                alt="Valentin Mor"
              ></Image>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-[15%] flex  items-end justify-between w-full">
        <div ref={idoRef} className="text-[10vw] font-bold relative ">
          I DO{" "}
        </div>
        <div
          ref={skillsRef}
          className="space-y-[2vw] flex flex-col items-start justify-end"
        >
          <div
            ref={line1ref}
            className="flex  items-center  transition-all duration-500  text-[2.5vw]   z-20 "
          >
            Web Developpement
          </div>
          <div
            ref={line1ref}
            className=" flex items-center text-[2.5vw]    z-20 "
          >
            Sound Design
          </div>
          <div
            ref={line1ref}
            className="flex items-center text-[2.5vw]    z-20 "
          >
            Creative coding
          </div>
        </div>
      </div>
      <div className=" translate-y-[20%] z-40 text-[1.5vw] flex flex-col items-center justify-center w-full relative h-full ">
        <div
          ref={box1}
          className=" relative flex flex-col p-10 w-1/3 items-center justify-center over   "
        >
          <div className="flex  items-center       ">
            When i'm developing your website,
          </div>
          <div className="flex  items-center       ">
            I focus on understanding your goals and preferences.
          </div>
          <div className="absolute -top-12 -left-10 border-1 border-neutral-200 border-opacity-30 rounded-full w-[4vw] h-[4vw] text-[2vw] flex items-center bg-slate-700  justify-center">
            01
          </div>
        </div>

        <div
          ref={box2}
          className="flex border-opacity-30 items-center w-1/3 text-center  over relative   p-10 mt-32   "
        >
          Building a seamless user experience through thoughtful animations and
          intuitive interactions.
          <div className="absolute -top-12 -left-10  rounded-full w-[4vw] h-[4vw] text-[2vw] flex items-center bg-slate-700  justify-center">
            02
          </div>
        </div>
        <div
          ref={box3}
          className="flex border-opacity-30 items-center w-1/3   mt-32   over p-10   relative   "
        >
          Delivering a usefull interface that needs the less possible
          maintenancy
          <div className="absolute -top-12 -left-10  rounded-full w-[4vw] h-[4vw] text-[2vw] flex items-center bg-slate-700  justify-center">
            03
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
