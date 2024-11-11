"use client";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Projet from "./Projet";
import PortfolioCounter from "./ProjectCounter";
import Image from "next/image";
import Visitez from "../components/Visitez";
import View from "./View";
import ProjectSlices from "./ProjectSlices";
import ProjectSlicesSante from "./ProjectSlicesSante";
// Enregistrer le plugin en dehors du composant
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function AllProjects({ mainRef }) {
  const titleRef = useRef(null);
  const counterRef = useRef(null);
  const containerRef = useRef(null);
  const santeRef = useRef(null);
  const marineRef = useRef(null);
  const lcdoRef = useRef(null);
  const mutableRef = useRef(null);
  const heafRef = useRef(null);
  const [lcdo, setLcdo] = useState(true);
  const [sante, setSante] = useState(false);
  const [mutable, setMutable] = useState(false);
  const [heaf, setHeaf] = useState(false);
  const [marine, setMarine] = useState(false);
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    setLcdo(true);
    const container = containerRef.current;
    const title = titleRef.current;
    const counter = counterRef.current;

    // Ajouter position absolute initiale
    gsap.set([title, counter], {
      position: "absolute",
    });

    // Créer le ScrollTrigger pour changer la position
    ScrollTrigger.create({
      trigger: container,
      start: "0% top", // Ajustez selon vos besoins
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
        const progress = self.progress * 100; // Progrès du scroll en pourcentage
        // console.log(`Progress: ${progress}%`); // Debug

        if (progress >= 0 && progress < 19) {
          setLcdo(true);
        } else {
          setLcdo(false);
        }
        if (progress >= 19 && progress < 41) {
          setSante(true);
        } else {
          setSante(false);
        }
        if (progress >= 41 && progress < 62) {
          setMarine(true);
        } else {
          setMarine(false);
        }
        if (progress >= 62 && progress < 83) {
          setHeaf(true);
        } else {
          setHeaf(false);
        }
        if (progress >= 83 && progress <= 100) {
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
  const data = [
    {
      img1: "/sante2.png",
      img2: "/sante3.png",
      img3: "/sante4.png",
      link: "https://lcdo-three.vercel.app/",
    },
    {
      img1: "",
      img2: "",
      img3: "",
      link: "https://sport-sante-mediterranee.vercel.app/",
    },
    {
      img1: "",
      img2: "",
      img3: "",
      link: "https://mutable-instruments-shop.vercel.app/",
    },
    {
      img1: "",
      img2: "",
      img3: "",
      link: "https://heafv2.vercel.app/",
    },

    {
      img1: "",
      img2: "",
      img3: "",
      link: "https://mutable-instruments-shop.vercel.app/",
    },
  ];

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
  return (
    <div
      ref={containerRef}
      className="flex items-start text-neutral-800 px-20 justify-start  relative min-h-[400vh] w-full"
    >
      <div
        ref={titleRef}
        className={` h-lvh w-full right-0 transition-all duration-500 font-Satoshi font-thin flex-col  z-60 flex ${
          fixed ? " bottom-0 " : " top-0"
        }`}
        style={{ position: "absolute" }} // Position initiale
      >
        <h3 className="text-[4vw] text-nowrap flex items-center  justify-center  font-bold w-3/5  mt-[4%] mb-[2%] ">
          <div className="w-2/3">Selected PROJECTS</div>
        </h3>
        <div className="flex items-center justify-center h-full">
          <div className="w-2/5 h-full flex flex-col items-end justify-center relative ">
            <div className="w-2/3 relative overflow-hidden">
              {" "}
              <Image
                className="opacity-0"
                src="/lcd.png"
                width={1920}
                height={975}
                alt="Project 1"
              />
              <div
                className={`absolute top-0 transition-all duration-500 ease-in-out flex flex-col w-full ${
                  lcdo ? "translate-y-0" : ""
                } ${sante ? "translate-y-[-20%]" : ""} ${
                  marine ? "translate-y-[-40%]" : ""
                } ${heaf ? "translate-y-[-60%]" : ""} ${
                  mutable ? "translate-y-[-80%]" : ""
                }`}
              >
                <Image
                  className={`h-full w-full  ease-in-out  transition-all duration-500 ${
                    lcdo ? "blur-none" : "blur-sm scale-75"
                  }`}
                  src="/lcd.png"
                  width={1920}
                  height={995}
                  alt="Project 1"
                />
                <Image
                  className={`h-full w-full   ease-in-out  transition-all duration-500 ${
                    sante ? "blur-none" : "blur-sm scale-75"
                  }`}
                  src="/sante1.webp"
                  width={1920}
                  height={995}
                  alt="Project 1"
                />
                <Image
                  className={`h-full w-full transition-all duration-500 ${
                    marine ? "blur-none" : "blur-sm scale-75"
                  }`}
                  src="/mb.png"
                  width={1920}
                  height={995}
                  alt="Project 1"
                />
                <Image
                  className={`h-full w-full ease-in-out transition-all duration-500 ${
                    heaf ? "blur-none" : "blur-sm scale-75"
                  }`}
                  src="/fh1.png"
                  width={1920}
                  height={995}
                  alt="Project 1"
                />
                <Image
                  className={`h-full w-full  ease-in-out  transition-all duration-500 ${
                    mutable ? "blur-none" : "blur-sm scale-75"
                  }`}
                  src="/mutable.webp"
                  width={1920}
                  height={995}
                  alt="Project 1"
                />
              </div>
            </div>
            <div className="w-2/3 text-xs  xl:text-base lg:text-sm  mt-10 relative h-2/5 overflow-hidden">
              <div
                className={`absolute flex-col flex  top-0 left-0 w-full h-full ${
                  lcdo ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    lcdo
                      ? "translate-y-0 opacity-100 delay-100 "
                      : "-translate-y-10 opacity-0 "
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className={`  transition-all duration-500 ease-in-out ${
                    lcdo
                      ? "translate-y-0 opacity-100 delay-200"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </div>
                <div
                  className={` delay-100 transition-all duration-500 ease-in-out ${
                    lcdo
                      ? "translate-y-0 opacity-100 delay-300"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    lcdo
                      ? "translate-y-0 opacity-100 delay-500"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  nisi ut aliquip ex ea commodo consequat.{" "}
                </div>
                <div className="flex items-center justify-start mt-10">
                  <div className=" mr-5  z-60">
                    <Visitez />
                  </div>
                  <div className="  z-60">
                    <View />
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full ${
                  sante ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    sante
                      ? "translate-y-0 opacity-100 "
                      : "-translate-y-10 opacity-0 "
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className={`  transition-all duration-500 ease-in-out ${
                    sante
                      ? "translate-y-0 opacity-100 delay-75"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </div>
                <div
                  className={` delay-100 transition-all duration-500 ease-in-out ${
                    sante
                      ? "translate-y-0 opacity-100 delay-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    sante
                      ? "translate-y-0 opacity-100 delay-200"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  nisi ut aliquip ex ea commodo consequat.{" "}
                </div>
                <div className="flex items-center justify-start mt-10">
                  <div className=" mr-5  z-60">
                    <Visitez />
                  </div>
                  <div className="  z-60">
                    <View />
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full ${
                  marine ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    marine
                      ? "translate-y-0 opacity-100 "
                      : "-translate-y-10 opacity-0 "
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className={`  transition-all duration-500 ease-in-out ${
                    marine
                      ? "translate-y-0 opacity-100 delay-75"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </div>
                <div
                  className={` delay-100 transition-all duration-500 ease-in-out ${
                    marine
                      ? "translate-y-0 opacity-100 delay-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    marine
                      ? "translate-y-0 opacity-100 delay-200"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  nisi ut aliquip ex ea commodo consequat.{" "}
                </div>
                <div className="flex items-center justify-start mt-10">
                  <div className=" mr-5  z-60">
                    <Visitez />
                  </div>
                  <div className="  z-60">
                    <View />
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full ${
                  heaf ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    heaf
                      ? "translate-y-0 opacity-100 "
                      : "-translate-y-10 opacity-0 "
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className={`  transition-all duration-500 ease-in-out ${
                    heaf
                      ? "translate-y-0 opacity-100 delay-75"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </div>
                <div
                  className={` delay-100 transition-all duration-500 ease-in-out ${
                    heaf
                      ? "translate-y-0 opacity-100 delay-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    heaf
                      ? "translate-y-0 opacity-100 delay-200"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  nisi ut aliquip ex ea commodo consequat.{" "}
                </div>
                <div className="flex items-center justify-start mt-10">
                  <div className=" mr-5  z-60">
                    <Visitez />
                  </div>
                  <div className="  z-60">
                    <View />
                  </div>
                </div>
              </div>
              <div
                className={`absolute top-0 left-0 w-full h-full ${
                  mutable ? "translate-y-0" : "translate-y-full"
                }`}
              >
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    mutable
                      ? "translate-y-0 opacity-100 "
                      : "-translate-y-10 opacity-0 "
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </div>
                <div
                  className={`  transition-all duration-500 ease-in-out ${
                    mutable
                      ? "translate-y-0 opacity-100 delay-75"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                </div>
                <div
                  className={` delay-100 transition-all duration-500 ease-in-out ${
                    mutable
                      ? "translate-y-0 opacity-100 delay-100"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  {" "}
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </div>
                <div
                  className={` transition-all duration-500 ease-in-out ${
                    mutable
                      ? "translate-y-0 opacity-100 delay-200"
                      : "-translate-y-10 opacity-0"
                  }`}
                >
                  nisi ut aliquip ex ea commodo consequat.{" "}
                </div>
                <div className="flex items-center justify-start mt-10">
                  <div className=" mr-5  z-60">
                    <Visitez />
                  </div>
                  <div className="  z-60">
                    <View />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/5 flex flex-col items-center  justify-center  h-full text-[1.8vw] ">
            {" "}
            <div className="flex relative items-end flex-col space-y-1 translate-y-[-60%] ">
              {" "}
              {/* <img
                src="/svg/arrowf.svg"
                className={`rotate-180 absolute top-[7%] -right-10 transition-all duration-500${
                  lcdo ? "translate-y-0" : ""
                } ${sante ? "translate-y-[270%]" : ""} ${
                  marine ? "translate-y-[270%]" : ""
                } ${heaf ? "translate-y-24" : ""} ${
                  mutable ? "translate-y-32" : ""
                } absolute w-4 top-2 -right-10`}
              ></img> */}
              <span
                onClick={() => handleChange("lcdo")}
                className={`cursor-pointer flex relative items-center transition-all duration-500 text-nowrap ${
                  lcdo ? "font-bold" : "font-thin"
                }`}
              >
                LCDO FESTIVAL
              </span>
              <span
                onClick={() => handleChange("sante")}
                className={`cursor-pointer relative flex items-center text-nowrap transition-all duration-500 ${
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
            {/* <div
              className=" flex items-center justify-center mt-20 "
              // Position initiale
            >
              <PortfolioCounter
                lcdo={lcdo}
                marine={marine}
                sante={sante}
                mutable={mutable}
                heaf={heaf}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProjects;
