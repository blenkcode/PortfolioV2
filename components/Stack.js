import { gsap } from "gsap";
import { useEffect, useRef } from "react";
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

  useEffect(() => {
    if (!gsap.plugins?.ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    const ctx = gsap.context(() => {
      const commonScrollTrigger = {
        trigger: mainRef,
        ease: "power1.inOut",
        start: "80%",
        end: "85%",
        markers: true,
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
    <div className="relative z-10 pb-32 h-lvh  dynamic-text3 flex flex-col justify-start items-center text-neutral-800 font-Satoshi font-bold">
      <h2 className="flex flex-col tab pb-3 lg:pb-0  items-center 2xl:space-y-3 xl:space-y-2 lg:space-y-1 space-y-1 w- h-fit  ">
        <div className="flex mt-2">
          <span className="relative w-fit overflow-hidden">
            <div ref={CONCE1Ref}>You have </div>
            <div ref={CONCE2Ref} className="absolute top-0">
              You have
            </div>
          </span>
          <span className="relative w-fit overflow-hidden">
            <div ref={PTION1ref}> some</div>
            <div ref={PTION2ref} className="absolute top-0">
              some
            </div>
          </span>{" "}
          <span className="2xl:px-5 xl:px-3 lg:px-2  px-2">&</span>{" "}
          <span className="relative w-fit overflow-hidden">
            <div ref={DEVEL1ref}>questions</div>
            <div ref={DEVEL2ref} className="absolute top-0">
              questions
            </div>
          </span>
          <span className="relative w-fit overflow-hidden">
            <div ref={OPMENT1ref}>?</div>
            <div
              ref={OPMENT2ref}
              className="absolute top-0
            "
            >
              ?
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
    </div>
  );
}

export default Stack;
