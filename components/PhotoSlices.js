import React from "react";
import { gsap } from "gsap";
import GsapMagnetic from "../utils/GsapMagnetic";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const PhotoSlices = ({ mainRef }) => {
  const oneref = useRef(null);
  const imgRef = useRef(null);
  const tworef = useRef(null);
  const threeref = useRef(null);
  const fourref = useRef(null);
  const fiveref = useRef(null);
  const sixref = useRef(null);
  const sevenref = useRef(null);
  const eightref = useRef(null);
  const nineref = useRef(null);
  const tenref = useRef(null);
  const eleveneref = useRef(null);
  const twelveref = useRef(null);
  const thirteenref = useRef(null);
  const fourteenref = useRef(null);
  const fifthteenref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        oneref.current,
        { x: "-100%", y: "100%", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "8%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        twelveref.current,
        { x: "100%", y: "100%", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "5%",
            end: "8%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        eleveneref.current,
        { x: "70%", y: "200%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "8%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        fifthteenref.current,
        { x: "150%", y: "-150%", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "8%",

            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        fiveref.current,
        { x: "-50%", y: "-170%", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "8%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        fourref.current,
        { x: "-110%", opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "8%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        imgRef.current,
        { x: "20%", y: "-30%" },
        {
          x: 0,
          y: "10%",

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "3%",
            end: "17%",

            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative flex  opacity-80  box-border">
      <div className="flex-col flex box-border">
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/14.png" className="box-border "></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/13.png" className="box-border"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/15.png" className=" box-border"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/22.png" className=" box-border"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/1.png" className=" box-border"></img>
          </div>
        </GsapMagnetic>
      </div>
      <div className="flex-col flex box-border">
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/11.png" className=" box-border"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/10.png" className="perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/9.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/8.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/2.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
      </div>
      <div className="flex-col flex mr-[0.005vw]">
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/7.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/6.png" className="perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/5.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/4.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
        <GsapMagnetic>
          <div>
            {" "}
            <img src="/slices/3.png" className=" perspective-[1000px]"></img>
          </div>
        </GsapMagnetic>
      </div>
    </div>
  );
};

export default PhotoSlices;
