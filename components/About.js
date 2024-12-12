import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import React from "react";

import GsapMagnetic from "../utils/GsapMagnetic2";

const About = ({ mainRef }) => {
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
  const bgRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const imgRef = useRef(null);
  const idoRef = useRef(null);
  const skillsRef = useRef(null);

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
          start: "6% top",
          toggleActions: "play reverse play reverse",
          // "play" quand entre dans la vue
          // "reverse" quand sort de la vue
          // "play" quand re-entre
          // "reverse" quand re-sort
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
          line9ref.current,
          {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          line10ref.current,
          {
            rotate: 0,
            scale: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.7"
        )
        .from(
          imgRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=1"
        );
    });

    // Cleanup function
    return () => {
      ctx.revert();
    };
  }, [isMounted, mainRef]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation 1 : déplacement de l'élément idoRef
    gsap.to(idoRef.current, {
      scrollTrigger: {
        trigger: mainRef,
        start: "9%",
        end: "30%",
        scrub: true,
      },
      x: 500,
    });

    // Animation 2 : déplacement de l'élément skillsRef
    gsap.to(skillsRef.current, {
      scrollTrigger: {
        trigger: mainRef,
        start: "9%",
        end: "30%",
        scrub: true,
      },
      x: -500,
    });
  }, [mainRef]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef,
        start: "top",
        end: "bottom",
        scrub: true,
        id: "background-animation",
      },
    });

    tl.fromTo(
      bgRef.current,
      {
        y: "2vw",
        ease: "none",
      },
      {
        y: "34vw",
      }
    );
  }, []);
  return (
    <div className="   text-neutral-200 justify-start text-[1.8vw]  h-[60vh]  w-full font-Satoshi  relative flex font-thin items-center  overflow-hidden z-20">
      <div className="w-full flex flex-col  items-start pl-[10vw]  justify-start  ">
        <div className="w-fit flex flex-col  items-start">
          <div ref={line2ref} className="flex  font-bold text-[2.5vw]">
            <span className="font-thin mr-[0.5vw]">Hey ! I'm </span> Valentin
          </div>
          <div ref={line3ref} className="flex  mt-[2%] ">
            I build websites with a high sense of interactivity and performance,
          </div>

          <div ref={line4ref} className="text-center">
            my work focus on delivering web interfaces that perfectly
          </div>
          <div ref={line5ref} className="text-center">
            suits your needs and ahestetics
          </div>

          <div ref={line6ref} className=" text-[1vw] mt-[2vw]  ">
            {" "}
            <GsapMagnetic>
              <a
                href="/about"
                className="text-[1vw] w-fit font-thin   z-30 cursor-pointer    group relative overflow-hidden"
              >
                <div
                  className="border-2 rounded-full border-neutral-200 button py-3 px-5 group-hover:bg-neutral-100 group-hover:bg-opacity-20  transition duration-200 relative z-20 

                [perspective:1000px]"
                >
                  <span className="text-neutral-100 transition-all    group-hover:translate-x-full duration-300 ">
                    learn more
                  </span>
                </div>
              </a>
            </GsapMagnetic>
          </div>
          {/* <div ref={line6ref}>
            {" "}
            <div className="text-[1vw] w-fit mt-[2vw] font-thin   z-30 cursor-pointer    group relative overflow-hidden ">
              {" "}
              <div
                className="border-2 rounded-full shadow-lg border-neutral-800 py-3 px-5  group-hover:bg-opacity-20  transition duration-200 relative z-20 

               [perspective:1000px]"
              >
                {" "}
                <span className="text-neutral-800 transition-all    group-hover:translate-y-full opacity-0 duration-300 ">
                  download resume
                </span>
                <span className="text-neutral-800 absolute top-1/2 translate-x-1/2 right-1/2 text-nowrap -translate-y-1/2 transition-all    group-hover:translate-y-[200%] duration-500 ">
                  download resume
                </span>
                <span className="text-neutral-800 flex justify-evenly transition-all   absolute w-full group-hover:-translate-y-1/2 top-1/2 -translate-y-[220%] translate-x-1/2 right-1/2 duration-500 ">
                  <img src="/d.svg" className="w-[1.5vw]"></img>{" "}
                  <img src="/d.svg" className="w-[1.5vw]"></img>
                </span>
              </div>
            </div>
          </div> */}

          {/* <div className="text-[2vw] mt-[10%] flex flex-col space-y-10">
            {" "}
            <div
              ref={line7ref}
              className="flex  lg:space-y-2 space-y-3 flex-col"
            >
              <h4 className="font-bold mb-2  flex items-center space-x-3 text-neutral-600 text-nowrap ">
              
                <span>i work w/</span>
              </h4>
              <ul className="cursor-default flex flex-col space-y-1 text-[1vw]">
                <li ref={line8ref} className="relative group overflow-hidden">
                  {" "}
                  <span className="">
                    Javascript, TypeScript w/ Next.js, React, GSAP, Tailwind{" "}
                  </span>
                </li>
                <li className="relative group overflow-hidden"> </li>
                <li ref={line9ref} className="relative group overflow-hidden">
                  {" "}
                  <span className="">WebGL, Node.js w/ Express, MongoDB</span>
                </li>
                <li className="relative group overflow-hidden"> </li>
              </ul>
            </div>
          </div> */}
          {/* <div
            ref={line10ref}
            className="flex justify-between w-[10vw] text-[1.5vw] mt-[7%]  "
          >
            {" "}
            <FontAwesomeIcon
              className="hover:scale-110 hover:textcolor2 transition-all ease-in-out duration-300 cursor-pointer"
              icon={faLinkedin}
            />
            <FontAwesomeIcon
              icon={faGithub}
              className="hover:scale-110 hover:textcolor2 transition-all ease-in-out duration-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faSpotify}
              className="hover:scale-110 hover:textcolor2 transition-all ease-in-out duration-300 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="hover:scale-110 hover:textcolor2 transition-all ease-in-out duration-300 cursor-pointer"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="w-1/2 relative flex items-center justify-start flex-col">
        <div
          ref={bgRef}
          className="w-[18vw] h-[22.9vw] relative overflow-hidden"
        >
        

          <img
            ref={imgRef}
            className="shadow-xl opacity-80  top-0"
            src="/ValentinMor.webp"
          ></img>
        </div>
      </div> */}
      <div
        ref={imgRef}
        className="overflow-hidden aspect-square absolute opacity-100 w-[15vw] right-[10%]  top-1/2 -translate-y-1/2 z-60"
      >
        {" "}
        <img
          className=" scale-[130%] relative opacity-70 -translate-y-[10%]"
          src="/ValentinMor.webp"
        ></img>
      </div>
      <div className="overflow-hidden aspect-square absolute  w-[15vw] right-[13%] scale-[110%] top-[58%] opacity-70 blur-[1px] -translate-y-1/2 z-10">
        {" "}
        <img
          className=" scale-[130%] relative opacity-70 -translate-y-[10%]"
          src="/ValentinMor.webp"
        ></img>
      </div>
      <div className="overflow-hidden aspect-square absolute  w-[15vw] right-[12%] scale-[105%] top-[55%] opacity-70 blur-[1px] -translate-y-1/2 z-10">
        {" "}
        <img
          className=" scale-[130%] relative opacity-70 -translate-y-[10%]"
          src="/ValentinMor.webp"
        ></img>
      </div>
      <div className="overflow-hidden aspect-square absolute  w-[15vw] right-[15%] scale-[120%] top-[70%] opacity-70 blur-[1px] -translate-y-1/2 z-10">
        {" "}
        <img
          className=" scale-[130%] relative opacity-70 -translate-y-[10%]"
          src="/ValentinMor.webp"
        ></img>
      </div>
    </div>
  );
};

export default About;
