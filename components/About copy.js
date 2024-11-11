import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import AnimatedButton from "../components/ModularButton";
const About = ({ mainRef }) => {
  const devRef = useRef(null);
  const createRef = useRef(null);
  const passRef = useRef(null);
  const webRef = useRef(null);
  const line1ref = useRef(null);
  const line2ref = useRef(null);
  const line3ref = useRef(null);
  const line4ref = useRef(null);
  const line5ref = useRef(null);
  const line6ref = useRef(null);
  const line7ref = useRef(null);
  const line8ref = useRef(null);
  const line9ref = useRef(null);
  const line10ref = useRef(null);
  const line11ref = useRef(null);
  const line12ref = useRef(null);
  const line13ref = useRef(null);
  const line14ref = useRef(null);
  const line15ref = useRef(null);
  const line16ref = useRef(null);
  const line17ref = useRef(null);
  const line18ref = useRef(null);
  const line19ref = useRef(null);
  const line20ref = useRef(null);
  const line21ref = useRef(null);
  const line22ref = useRef(null);
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

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "30% top",
          toggleActions: "play none none none",
          markers: true,
          once: false,
        },
      });

      // Animations simultanées en utilisant la même position "<"
      tl.fromTo(
        devRef.current,
        { y: "-1%", x: "40%" },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      )
        .fromTo(
          createRef.current,
          {
            y: "-80%",
            x: "475%",
          },
          {
            x: "0%",
            y: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          passRef.current,
          {
            y: "-160%",
            x: "286%",
          },
          {
            x: "0%",
            y: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          webRef.current,
          {
            y: "-130%",
            x: "80%",
          },
          {
            y: "0%",
            x: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line1ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "-=0.2" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line2ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line3ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line4ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line5ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line6ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line7ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line8ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line9ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line10ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line11ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line12ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line13ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line14ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line15ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line16ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line17ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line18ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line19ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line20ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line21ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        )
        .fromTo(
          line22ref.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            ease: "power2.out",
          },
          "<" // Commence en même temps que l'animation précédente
        );
    });

    return () => ctx.revert();
  }, [isMounted, mainRef]); // Ajout des dépendances nécessaires

  if (!isMounted) return null;
  return (
    <div className="text-neutral-100 py-28 items-start justify-center text-[2vw] flex w-4/5 font-Satoshi  px-10 relative flex-col">
      <div className="mb-14  text-[2vw]  text-neutral-800 w-full z-20 flex items-center ">
        <div
          ref={line22ref}
          className="bg-neutral-800 w-[1.5vw] h-[1.5vw] mr-4 opacity-0"
        ></div>{" "}
        <span ref={line1ref} className="opacity-0">
          {" "}
          Hey! I'm{" "}
        </span>
        <span className="opacity-0">.</span>{" "}
        <span ref={line2ref} className=" font-playfair opacity-0">
          Valentin{" "}
        </span>{" "}
        <span className="opacity-0">.</span>
        <span ref={line3ref} className="opacity-0">
          a 28 years old
        </span>
        <span className="opacity-0">.</span>{" "}
        <span ref={devRef} className="font-bold ">
          developer
        </span>
      </div>
      <div className="w-full flex">
        <div className="text-neutral-800">
          <div className="flex">
            <span className="flex">
              <span ref={line4ref} className="opacity-0">
                I strive to
              </span>{" "}
              <span className="opacity-0">.</span>{" "}
              <span ref={createRef} className="font-bold">
                create
              </span>
              <span className="opacity-0">.</span>
              <span ref={line5ref} className="opacity-0">
                intuitive and usefull
              </span>{" "}
              <span className="opacity-0">.</span>
              <img
                ref={line6ref}
                className="w-[2.3vw] animate-atom grayscale opacity-0"
                src="/svg/atom.svg"
              ></img>
              <span className="opacity-0">.</span>
              <span ref={line7ref} className="opacity-0">
                interfaces
              </span>
              <span></span>
            </span>
          </div>
          <div className="flex">
            <span ref={line8ref} className="opacity-0">
              for your [ web
            </span>
            <span className="opacity-0">.</span>{" "}
            <img
              ref={line9ref}
              className="w-[2vw] opacity-0 animate-web perspective-[1000px]"
              src="/svg/web.svg"
            ></img>{" "}
            <span className="opacity-0">.</span>
            <span ref={line10ref} className="opacity-0">
              applications. ]
            </span>
          </div>
          <div className="flex">
            <span className="flex">
              {" "}
              <span ref={line11ref} className="opacity-0">
                I'm
              </span>
              <span className="opacity-0">.</span>
              <img
                ref={line12ref}
                className="w-[2vw] opacity-0 animate-heartpulse"
                src="/svg/heart3.svg"
              ></img>
              <span className="opacity-0">.</span>
              <p ref={passRef} className="font-bold">
                {" "}
                passionate
              </p>{" "}
              <span className="opacity-0">.</span>
              <span ref={line13ref} className="opacity-0">
                about
              </span>{" "}
              <span className="opacity-0">.</span>{" "}
              <span ref={line14ref} className="opacity-0">
                animations
              </span>{" "}
              <span className="opacity-0">.</span>
              <span ref={line15ref} className="opacity-0">
                and transitions,
              </span>
            </span>{" "}
          </div>
          <div className="flex">
            <span className="flex">
              {" "}
              <span ref={line16ref} className="opacity-0">
                {" "}
                that gives a unique feeling
              </span>
              <span className="opacity-0">.</span>
              <img
                ref={line21ref}
                className="w-[2vw] opacity-0"
                src="/svg/smile1.svg"
              ></img>
              <span className="opacity-0">.</span>
              <span ref={line17ref} className="opacity-0">
                {" "}
                to a{" "}
              </span>
              <span className="opacity-0">.</span>
              <p ref={webRef} className="font-bold">
                {" "}
                website
              </p>
            </span>{" "}
          </div>
          <div ref={line18ref} className="flex opacity-0">
            <span className="flex ">
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
          </div>
          <div ref={line19ref} className="mt-10 opacity-0">
            Don't hesitate to get in touch !
          </div>
          <div
            ref={line20ref}
            className="mt-10 text-[1.6vw] w-fit border-2 rounded-full border-neutral-800"
          >
            <AnimatedButton text="CONTACT ME" />
          </div>
          <div
            ref={imgRef}
            className="w-[12vw]  z-10 absolute top-[45%] right-[10%] "
          >
            <div className="relative">
              <div className="absolute -top-[30%] border-1 border-neutral-900 rounded-full px-2 -right-[40%] rotate-12 text-[0.7vw]">
                Yep that's me !
              </div>
              <Image
                src="/valentin.webp"
                width={2365}
                height={3348}
                className="opacity-90 z-50"
                alt="Valentin Mor"
              ></Image>

              <div className="absolute top-0 opacity-40 scale-125 z-20">
                {" "}
                <Image
                  src="/valentin.webp"
                  width={2365}
                  height={3348}
                  className="opacity-50"
                  alt="Valentin Mor"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
