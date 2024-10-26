import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTheme } from "../ThemeContext";
import Projet from "./Projet";
import Workflow from "./Workflow";

function Stack({ mainRef }) {
  const CONCE1Ref = useRef(null);
  const CONCE2Ref = useRef(null);
  const PTION1ref = useRef(null);
  const PTION2ref = useRef(null);
  const DEVEL1ref = useRef(null);
  const DEVEL2ref = useRef(null);
  const OPMENT1ref = useRef(null);
  const OPMENT2ref = useRef(null);
  const INTER1ref = useRef(null);
  const INTER2ref = useRef(null);
  const ACTIVE1ref = useRef(null);
  const ACTIVE2ref = useRef(null);
  const ECOSY1ref = useRef(null);
  const ECOSY2ref = useRef(null);
  const STEMS1ref = useRef(null);
  const STEMS2ref = useRef(null);
  const l1 = useRef(null);
  const l2 = useRef(null);
  const l3 = useRef(null);
  const l5 = useRef(null);
  const l6 = useRef(null);
  const l7 = useRef(null);
  const l4 = useRef(null);
  const l8 = useRef(null);
  const l9 = useRef(null);
  const l10 = useRef(null);
  const l11 = useRef(null);

  const projet1 = useRef(null);
  const project1box = useRef(null);
  const projet2 = useRef(null);
  const project2box = useRef(null);
  const projet3 = useRef(null);
  const project3box = useRef(null);
  const projet4 = useRef(null);
  const project4box = useRef(null);
  const { isDarkMode } = useTheme();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      l2.current,
      { y: 0 },
      {
        y: 100,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      l3.current,
      { y: 0 },
      {
        y: 300,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l4.current,
      { y: 0 },
      {
        y: 600,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l5.current,
      { y: 0 },
      {
        y: 900,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l6.current,
      { y: 0 },
      {
        y: 1200,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l7.current,
      { y: 0 },
      {
        y: 1500,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l8.current,
      { y: 0 },
      {
        y: 1800,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l9.current,
      { y: 0 },
      {
        y: 2100,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l10.current,
      { y: 0 },
      {
        y: 2400,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      l11.current,
      { y: 0 },
      {
        y: 2700,
        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      projet1.current,
      { y: 0 },
      {
        y: 1500,

        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      project1box.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "46%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      projet2.current,
      { y: 0 },
      {
        y: 1800,

        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      project2box.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.2,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "46%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      projet3.current,
      { y: 0 },
      {
        y: 2100,

        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      project3box.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.6,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "46%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      projet4.current,
      { y: 0 },
      {
        y: 2400,

        scrollTrigger: {
          trigger: mainRef,
          start: "26%",
          end: "50%",
          scrub: 1, // Assure une animation fluide pendant le scroll
          ease: "power3.inOut",
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      project4box.current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        delay: 0.8,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "46%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
  }, []);
  useEffect(() => {
    if (!gsap.plugins?.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const commonScrollTrigger = {
        trigger: mainRef,
        ease: "power1.inOut",
        start: "12%",
        end: "26%",

        scrub: 2,
      };

      // Grouper les éléments par type d'animation
      const slideUpElements = [
        { ref: CONCE1Ref.current, from: "0%", to: "100%" },
        { ref: DEVEL1ref.current, from: "0%", to: "100%" },
        { ref: INTER1ref.current, from: "0%", to: "100%" },
        { ref: ECOSY1ref.current, from: "0%", to: "100%" },
        { ref: ACTIVE2ref.current, from: "0%", to: "-100%" },
        { ref: STEMS2ref.current, from: "0%", to: "-100%" },
        { ref: OPMENT2ref.current, from: "0%", to: "-100%" },
        { ref: PTION2ref.current, from: "0%", to: "-100%" },
      ];

      const slideDownElements = [
        { ref: CONCE2Ref.current, from: "-100%", to: "0%" },
        { ref: DEVEL2ref.current, from: "-100%", to: "0%" },
        { ref: INTER2ref.current, from: "-100%", to: "0%" },
        { ref: ECOSY2ref.current, from: "-100%", to: "0%" },
        { ref: PTION1ref.current, from: "100%", to: "0%" },
        { ref: ACTIVE1ref.current, from: "100%", to: "0%" },
        { ref: STEMS1ref.current, from: "100%", to: "0%" },
        { ref: OPMENT1ref.current, from: "100%", to: "0%" },
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "1%",
          end: "2%",
          scrub: 1,
        },
      });

      // Animer tous les éléments qui montent
      slideUpElements.forEach(({ ref, from, to }) => {
        tl.fromTo(
          ref,
          { y: from },
          {
            y: to,
            scrollTrigger: commonScrollTrigger,
          },
          0 // Commencer toutes les animations en même temps
        );
      });

      // Animer tous les éléments qui descendent
      slideDownElements.forEach(({ ref, from, to }) => {
        tl.fromTo(
          ref,
          { y: from },
          {
            y: to,
            scrollTrigger: commonScrollTrigger,
          },
          0 // Commencer toutes les animations en même temps
        );
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="relative z-10 pb-32 font-thin  dynamic-text3 flex flex-col justify-center items-end text-neutral-800 font-projekt">
      <h2 className="flex flex-col tab pb-3 lg:pb-0 lg:pr-10  items-end 2xl:space-y-3 xl:space-y-2 lg:space-y-1 space-y-1 w- h-fit  ">
        <div className="flex mt-2">
          <span className="relative w-fit overflow-hidden">
            <div ref={CONCE1Ref}>CONCE</div>
            <div ref={CONCE2Ref} className="absolute top-0">
              CONCE
            </div>
          </span>
          <span className="relative w-fit overflow-hidden">
            <div ref={PTION1ref}>PTION</div>
            <div ref={PTION2ref} className="absolute top-0">
              PTION
            </div>
          </span>{" "}
          <span className="2xl:px-5 xl:px-3 lg:px-2  px-2">&</span>{" "}
          <span className="relative w-fit overflow-hidden">
            <div ref={DEVEL1ref}>DEVEL</div>
            <div ref={DEVEL2ref} className="absolute top-0">
              DEVEL
            </div>
          </span>
          <span className="relative w-fit overflow-hidden">
            <div ref={OPMENT1ref}>OPMENT</div>
            <div
              ref={OPMENT2ref}
              className="absolute top-0
            "
            >
              OPMENT
            </div>
          </span>{" "}
        </div>

        <div className="flex">
          <span className="">OF</span>{" "}
          <span className="relative w-fit overflow-hidden  lg:ml-5 ml-2">
            <div ref={INTER1ref}>INTER</div>
            <div
              ref={INTER2ref}
              className="absolute top-0
            "
            >
              INTER
            </div>
          </span>{" "}
          <span className="relative w-fit overflow-hidden">
            <div ref={ACTIVE1ref}>ACTIVE</div>
            <div
              ref={ACTIVE2ref}
              className="absolute top-0
            "
            >
              ACTIVE
            </div>
          </span>
        </div>
        <div className="flex relative">
          <div
            ref={l1}
            className="w-full  h-1 bg-neutral-900 absolute -bottom-10"
          ></div>
          <div
            ref={l2}
            className="w-full  h-1 bg-neutral-900 absolute  -bottom-10"
          ></div>
          <div
            ref={l3}
            className="w-full  h-1 bg-neutral-900 absolute -bottom-10"
          ></div>
          <div
            ref={l4}
            className="w-full  h-1 bg-neutral-900 absolute  -bottom-10"
          ></div>
          <div
            ref={l5}
            className="w-full  h-1 bg-neutral-900 absolute -bottom-10"
          ></div>
          <div
            ref={l6}
            className="w-full  h-1 bg-neutral-900 absolute  -bottom-10"
          ></div>
          <div
            ref={l7}
            className="w-full  h-1 bg-neutral-900 absolute   -bottom-10"
          ></div>
          <div
            ref={projet1}
            className="overflow-hidden absolute  -bottom-4 right-0"
          >
            {" "}
            <div ref={project1box} className="flex  items-end space-x-5">
              <div className=" text-3xl allTextcolor  ">SPORT-SANTE MED</div>
              <Projet className=" " href="" img="./sante1.webp" />
            </div>
          </div>
          <div
            ref={projet2}
            className="overflow-hidden absolute  -bottom-4 right-0"
          >
            {" "}
            <div ref={project2box} className="flex items-end space-x-5">
              <div className=" text-3xl allTextcolor ">LCDO FESTIVAL</div>
              <Projet href="" img="./lcdo1.webp" />
            </div>
          </div>
          <div
            ref={projet3}
            className="overflow-hidden absolute  -bottom-4 right-0"
          >
            {" "}
            <div
              ref={project3box}
              className="flex  items-end justify-start space-x-5"
            >
              <div className=" text-3xl allTextcolor ">HEAF</div>
              <Projet href="" img="./fh1.png" />
            </div>
          </div>
          <div
            ref={projet4}
            className="overflow-hidden absolute  -bottom-4 right-0"
          >
            {" "}
            <div
              ref={project4box}
              className="flex  items-end justify-start space-x-5"
            >
              <div className=" text-3xl allTextcolor ">MUTABLE INSTRUMENTS</div>
              <Projet href="" img="./mutable.webp" />
            </div>
          </div>
          <div
            ref={l8}
            className="w-full  h-1 bg-neutral-900 absolute  -bottom-10"
          ></div>
          <div
            ref={l9}
            className="w-full  h-1 bg-neutral-900 absolute   -bottom-10"
          ></div>
          <div
            ref={l10}
            className="w-full  h-1 bg-neutral-900 absolute  -bottom-10"
          ></div>
          <div
            ref={l11}
            className="w-full  h-1 bg-neutral-900 absolute   -bottom-10"
          ></div>
          <div className="w-full  h-1 bg-neutral-900 absolute opacity-5  -bottom-10"></div>
          WEB{" "}
          <span className="relative w-fit overflow-hidden lg:ml-5 ml-2">
            <div ref={ECOSY1ref}>ECOSY</div>
            <div
              ref={ECOSY2ref}
              className="absolute top-0
            "
            >
              ECOSY
            </div>
          </span>
          <span className="relative w-fit overflow-hidden">
            <div ref={STEMS1ref}>STEMS</div>
            <div
              ref={STEMS2ref}
              className="absolute top-0
            "
            >
              STEMS
            </div>
          </span>{" "}
        </div>
      </h2>
      <Workflow mainRef={mainRef}></Workflow>
    </div>
  );
}

export default Stack;
