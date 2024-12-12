import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const SomeText = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const containerRef = useRef(null);
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: containerRef.current,
  //         start: "-70% ",

  //         toggleActions: "play none none none",
  //         once: false,
  //       },
  //     });

  //     tl.from(box1.current, {
  //       y: 50,
  //       opacity: 0,
  //       duration: 0.8,
  //       ease: "power2.out",
  //     })
  //       .from(
  //         box2.current,
  //         {
  //           y: 50,
  //           opacity: 0,
  //           duration: 0.8,
  //           ease: "power2.out",
  //         },
  //         "-=0.5"
  //       )
  //       .from(
  //         box3.current,
  //         {
  //           y: 50,
  //           opacity: 0,
  //           duration: 0.8,
  //           ease: "power2.out",
  //         },
  //         "-=0.5"
  //       );
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, [, containerRef]);
  return (
    <div
      ref={containerRef}
      className="font-Satoshi relative text-[1vw]  bg-neutral-100 flex items-start justify-start h-auto  flex-col text-neutral-900  py-12 "
    >
      <div className="w-3/4 flex flex-col items-center">
        <div ref={box1} className="w-2/3  pb-[4vw]">
          {" "}
          <div className="  z-40 flex flex-col    relative h-full  ">
            <div className=" relative flex flex-col  w    ">
              <div className=" tracking-wider flex items-scenter textcolor2  mb-8  text-[2vw]  items-center">
                <img className=" w-[3vw] mr-[2vw] " src="/b.svg"></img>
                TEAM-WORK
              </div>

              <div className="  relative ">
                <div className="        ">
                  I focus on understanding your goals and preferences, <br></br>
                  through regular check-ins and open communication.
                </div>
                <div className="   mt-[1vw]     ">
                  My process involves active listening, detailed documentation,
                  <br></br>
                  and feedback loops to ensure we're aligned at every stage of
                  development.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1 mt-[2.5vw] bg-neutral-300"></div>
        </div>
        <div ref={box2} className="w-2/3 pb-[4vw] ">
          {" "}
          <div className="  z-40  flex flex-col    relative h-full  ">
            <div className=" relative flex flex-col  w    ">
              <div className=" tracking-wider flex mb-8 textcolor2 text-[2vw]  items-center">
                <img className=" w-[3vw] mr-[2vw] " src="/a.svg"></img>
                PLAYFULL
              </div>

              <div className="  relative ">
                <div className="         ">
                  A seamless user experience is built through thoughtful
                  animations <br></br>and intuitive interactions.
                </div>
                <div className="     mt-[1vw]    ">
                  I spend time to design these aspects, ensuring each animation{" "}
                  <br></br>
                  enhances functionality rather than hindering it.
                </div>
                <div className="    mt-[1vw]    ">
                  My approach combines performance optimization with subtle{" "}
                  <br></br>
                  motion design to create engaging yet efficient interfaces.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-1 mt-[2.5vw] bg-neutral-300"></div>
        </div>
        <div ref={box3} className="w-2/3  pb-[10vw]">
          {" "}
          <div className="  z-40  flex flex-col    relative h-full  ">
            <div className=" relative flex flex-col  w    ">
              <div className=" tracking-wider  mb-8 textcolor2 flex text-[2vw]  items-center">
                <img className=" w-[3vw] mr-[2vw] " src="/c.svg"></img>
                VISION
              </div>

              <div className="  relative ">
                <div className="         ">
                  I deliver handy admin interfaces that need the least possible{" "}
                  <br></br>
                  maintenance, focusing on scalable solutions and clean
                  architecture.
                </div>
                <div className="    mt-[1vw]       ">
                  My development process prioritizes future-proof code and{" "}
                  <br></br>
                  efficient content management systems that empower <br></br>
                  your team to manage content independently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SomeText;
