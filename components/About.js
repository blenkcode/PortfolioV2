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
  return (
    <div className="text-neutral-100 py-28 items-start justify-center text-[1.8vw] flex w-4/5 font-Satoshi  px-10 relative flex-col">
      <div
        ref={line1ref}
        className="mb-16 flex items-center text-[2.5vw] text-neutral-800 w-full z-20 "
      >
        Hey! I'm <span className="opacity-0">.</span>
        <span className=" font-Satoshi font-bold">Valentin</span>
        <span className="opacity-0">.</span> a 28 years old developer.
      </div>
      <div className="w-full flex translate-x-[3%]">
        <div className="text-neutral-800">
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
            className="mt-8 text-[1vw] w-fit py-3 border-1  border-neutral-800"
          >
            <AnimatedButton text="CONTACT ME" />
          </div>
          <div
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
