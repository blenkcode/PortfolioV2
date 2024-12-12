"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import ScrollEffect from "./shaders/ImageShader";
import WebGLGridEffect from "./shaders/ImageShader";
import Visitez from "../components/Visitez";
import ElasticContainer from "./shaders/ImageShader";
import MouseTracker from "./MouseTracker";
// Enregistrer le plugin en dehors du composant
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function AllProjects({ mainRef }) {
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const containerRef = useRef(null);

  const [lcdo, setLcdo] = useState(false);
  const [sante, setSante] = useState(false);
  const [mutable, setMutable] = useState(false);
  const [heaf, setHeaf] = useState(false);
  const [marine, setMarine] = useState(false);
  const [fixed, setFixed] = useState(false);

  const [isMouse, setIsMouse] = useState(false);

  const lcdoRef1 = useRef(null);
  const lcdoRef2 = useRef(null);
  const santeRef1 = useRef(null);
  const santeRef2 = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const counter = counterRef.current;

    gsap.set([title, counter], {
      position: "absolute",
    });
    ScrollTrigger.create({
      trigger: container,
      start: "0% top",
      endTrigger: container,
      end: "bottom bottom",

      onEnter: () => {
        gsap.to([title, counter], {
          position: "fixed",
          duration: 1,
        });
      },
      onEnterBack: () => {
        gsap.to([title, counter], {
          position: "fixed",
          duration: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to([title, counter], {
          position: "absolute",
          duration: 1,
        });
      },
      onLeave: () => {
        gsap.to([title, counter], {
          position: "absolute",
          duration: 0.5,
        });
      },
      onUpdate: (self) => {
        const progress = self.progress * 100;

        if (progress >= 5 && progress < 20) {
          setLcdo(true);
        } else {
          setLcdo(false);
        }
        if (progress >= 20 && progress < 41) {
          setSante(true);
        } else {
          setSante(false);
        }
        if (progress >= 41 && progress < 54) {
          setMarine(true);
        } else {
          setMarine(false);
        }
        if (progress >= 54 && progress < 75) {
          setHeaf(true);
        } else {
          setHeaf(false);
        }
        if (progress >= 75 && progress <= 100) {
          setMutable(true);
        } else {
          setMutable(false);
        }
        if (progress >= 100) {
          setFixed(true);
        } else {
          setFixed(false);
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const handleChange = (who) => {
    if (who === "lcdo") {
      setLcdo(true);
      setMarine(false);
      setSante(false);
      setMutable(false);
      setHeaf(false);
    } else if (who === "sante") {
      setLcdo(false);
      setMarine(false);
      setSante(true);
      setMutable(false);
      setHeaf(false);
    } else if (who === "marine") {
      setLcdo(false);
      setMarine(true);
      setSante(false);
      setMutable(false);
      setHeaf(false);
    } else if (who === "heaf") {
      setLcdo(false);
      setMarine(false);
      setSante(false);
      setMutable(false);
      setHeaf(true);
    } else if (who === "mutable") {
      setLcdo(false);
      setMarine(false);
      setSante(false);
      setMutable(true);
      setHeaf(false);
    }
  };
  const handleMouseEnter = () => {
    setIsMouse(true);
    console.log("hello");
  };

  const handleMouseLeave = () => {
    setIsMouse(false);
    console.log(isMouse);
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lcdoRef1.current,
        { y: "40%" },
        {
          y: 0,

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "30%",
            end: "50%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        lcdoRef2.current,
        { y: "30%" },
        {
          y: 0,

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "30%",
            end: "50%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        santeRef1.current,
        { y: "40%" },
        {
          y: 0,

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "40%",
            end: "60%",

            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        santeRef2.current,
        { y: "30%" },
        {
          y: 0,

          ease: "power2.out",
          scrollTrigger: {
            trigger: mainRef,
            start: "40%",
            end: "60%",

            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleLcdo = () => {
    console.log("click");
  };
  return (
    <div
      ref={containerRef}
      className="flex items-end animate-item px-20 justify-start  relative min-h-[600vh]  w-full"
    >
      <div className="w-1/2 translate-x-[0%] h-fit flex flex-col items-center justify-end relative z-50 ">
        <MouseTracker isMouse={isMouse} />{" "}
        <div className="mb-[50%] relative ">
          <div onClick={handleLcdo} className="  cursor-pointer relative">
            {" "}
            <Image
              className={`h-full rotate-x-20 w-full transfrom-[rotateX(20deg)]  ease-in-out  transition-all duration-500 ${
                lcdo ? "" : " scale-50  opacity-0 "
              }`}
              src="/lcdo/lcdoMock.png"
              width={1920}
              height={995}
              alt="Project 1"
            />
          </div>

          <div
            ref={lcdoRef1}
            className="absolute scale-[0.6] top-[40%] translate-x-[30%]"
          >
            <Image
              className={`h-full w-full   ease-in-out  transition-all duration-500 ${
                lcdo ? "" : " scale-50  opacity-0 "
              }`}
              src="/lcdo/lcdo2.png"
              width={1920}
              height={995}
              alt="Project 1"
            />
          </div>
          <div
            ref={lcdoRef2}
            className="absolute w-[15vw] top-[50%] translate-x-[20%]"
          >
            <img
              className={`h-full w-full  ease-in-out  transition-all duration-500 ${
                lcdo ? "" : " scale-50  opacity-0 "
              }`}
              src="/lcdo/lcdo3.png"
              alt="Project 1"
            />
          </div>
        </div>
        <div className="mb-[50%] relative">
          <Image
            className={`h-full rotate-x-20 w-full transfrom-[rotateX(20deg)]  ease-in-out  transition-all duration-500 ${
              sante ? "" : " scale-50  opacity-0 "
            }`}
            src="/kineMock.png"
            width={1920}
            height={995}
            alt="Project 1"
          />
          <div
            ref={santeRef1}
            className="absolute scale-[0.6] top-[40%] translate-x-[30%]"
          >
            <Image
              className={`h-full w-full   ease-in-out  transition-all duration-500 ${
                sante ? "" : " scale-50  opacity-0 "
              }`}
              src="/kine/1.png"
              width={1920}
              height={995}
              alt="Project 1"
            />
          </div>
          <div
            ref={santeRef2}
            className="absolute w-[15vw] top-[50%] translate-x-[20%]"
          >
            <img
              className={`h-full w-full   ease-in-out  transition-all duration-500 ${
                sante ? "" : " scale-50  opacity-0 "
              }`}
              src="/kine/mockKinetel.png"
              alt="Project 1"
            />
          </div>
        </div>
        <div className="mb-[50%] w-[50vw]"></div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mb-[50%] z-50 "
        >
          <Image
            className={`h-full w-full ease-in-out transition-all duration-500 ${
              heaf ? "" : " scale-50  opacity-20  "
            }`}
            src="/fh1.png"
            width={1920}
            height={995}
            alt="Project 1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div className="mb-[120%]">
          <Image
            className={`h-full w-full  ease-in-out  transition-all duration-500 ${
              mutable ? "" : " scale-50  opacity-20"
            }`}
            src="/mutable.webp"
            width={1920}
            height={995}
            alt="Project 1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      </div>
      <div
        ref={titleRef}
        className={` h-lvh w-full right-0 transition-all duration-500 font-Satoshi font-thin flex-col  justify-center items-end  z-60 flex ${
          fixed ? " bottom-0 " : " top-0"
        }`}
        style={{ position: "absolute" }} // Position initiale
      >
        <h1 className="text-[3vw] font-bold flex items-end justify-center mt-[10%] w-1/2  animate-title">
          SELECTED PROJECTS
        </h1>
        <div className="flex items-center animate-item justify-center h-full w-1/2">
          <div className="w-full flex flex-col items-center  justify-center  h-fit text-[1.5vw] translate-y-[-25%]  ">
            {" "}
            <div className="flex relative items-center justify-center flex-col space-y-1  ">
              {" "}
              <span
                onClick={() => handleChange("lcdo")}
                className={`cursor-pointer flex relative items-center transition-all duration-500  ${
                  lcdo ? "font-bold" : "font-thin"
                }`}
              >
                LCDO FESTIVAL
              </span>
              <span
                onClick={() => handleChange("sante")}
                className={`cursor-pointer relative flex items-center transition-all duration-500 ${
                  sante ? "font-bold" : "font-thin"
                }`}
              >
                SPORT-SANTE-MEDITERANNEE
              </span>
              <span
                onClick={() => handleChange("marine")}
                className={`relative cursor-pointer transition-all duration-500 ${
                  marine ? "font-bold" : "font-thin"
                }`}
              >
                MARINE BENABOU MASTERING
              </span>
              <span
                onClick={() => handleChange("heaf")}
                className={`cursor-pointer relative transition-all duration-500 ${
                  heaf ? "font-bold" : "font-thin"
                }`}
              >
                HEAF
              </span>
              <span
                onClick={() => handleChange("mutable")}
                className={`cursor-pointer relative transition-all duration-500 ${
                  mutable ? "font-bold" : "font-thin"
                }`}
              >
                MUTABLE INSTRUMENTS
              </span>
            </div>
            <div
              className=" flex items-center justify-center mt-20 "
              // Position initiale
            >
              <Visitez link="/lcdo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
