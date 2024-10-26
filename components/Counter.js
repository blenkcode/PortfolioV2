import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
const SmoothCounter = () => {
  const FirstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const numberRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      FirstRef.current,
      { y: "0%", visibility: "hidden" },
      {
        y: "-100%",
        visibility: "visible",
        duration: 5.5,
      },
      "<"
    )
      .fromTo(
        secondRef.current,
        { y: "-100%", visibility: "hidden" },
        {
          y: "0%",
          duration: 5.5,
          delay: 0,
          ease: "power3.inOut",
          visibility: "visible",
        },
        "<"
      )
      .fromTo(
        thirdRef.current,
        { y: "100%", visibility: "hidden" },
        {
          y: "0%",
          duration: 3,
          delay: 2.5,
          ease: "power3.inOut",
          visibility: "visible",
        },
        "<"
      )
      .to(numberRef.current, {
        x: "200%",
        duration: 0.8,
        ease: "power3.inOut",
      })
      .to(
        textRef.current,
        {
          x: "-200%",
          duration: 0.8,
          ease: "power3.inOut",
        },
        "<"
      )
      .to(
        bgRef.current,
        {
          opacity: 0,
          visibility: "hidden",
          duration: 0.2,
        },
        "<"
      );
    return () => tl.kill();
  }, []);
  return (
    <div
      ref={bgRef}
      className="fixed transition-all duration-1000  opacity-100 font-projekt top-0 w-full h-lvh transition-overlay bg-neutral-200 flex items-start justify-end p-10  "
    >
      <div
        ref={textRef}
        className=" text-neutral-800 text-8xl absolute bottom-10 left-10"
      >
        <div className="text-sm mb-10 font-thin">Valentin MOR</div>
        <div className="dynamic-text font-thin">Portfolio /2024</div>
      </div>

      <div
        ref={numberRef}
        className="text-8xl  font-thin flex text-neutral-800 "
      >
        <span className="overflow-hidden ml-0  relative">
          <span className="opacity-0">0</span>
          <span ref={thirdRef} className="absolute left-0">
            1
          </span>
        </span>{" "}
        <span className="overflow-hidden mr-1 h-24 relative ">
          {" "}
          <span className="opacity-0">0</span>
          <div
            ref={secondRef}
            className="flex absolute top-0 flex-col"
            style={{ transform: "translateY(100%)" }} // Position initiale correcte
          >
            {Array.from({ length: 11 }, (_, i) => i % 10).map((num, index) => (
              <span
                key={index}
                className="flex-shrink-0 h-24 flex  items-center justify-center"
              >
                {num}
              </span>
            ))}
          </div>
        </span>
        <span className="overflow-hidden h-24 relative ">
          {" "}
          <span className="opacity-0">0</span>
          <div ref={FirstRef} className="flex absolute top-24 flex-col">
            {Array.from({ length: 21 }, (_, i) => i % 10).map((num, index) => (
              <span
                key={index}
                className="flex-shrink-0 h-24 flex items-center justify-center"
              >
                {num}
              </span>
            ))}
          </div>
        </span>
      </div>
      {/* <div className="circle23  absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 ">
          <div className="relative w-full h-full ">
            <div className="absolute w-10 h-10 border-neutral-800 border-l-2 bottom-0 left-0"></div>
            <div className="absolute w-20 h-10 border-neutral-800 border-b-2 bottom-0 left-0"></div>
            <div className="absolute w-10 h-10 border-neutral-800 border-r-2 -top-0 right-0"></div>
            <div className="absolute w-20 h-10 border-neutral-800 border-t-2 top-0 right-0"></div>
          </div>
        </div> */}
    </div>
  );
};

export default SmoothCounter;
