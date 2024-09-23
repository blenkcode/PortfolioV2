import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/Home.module.css";
import { gsap } from "gsap";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);
import {
  faLaptop,
  faDatabase,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";

function Right() {
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      btnRef.current,
      { opacity: 0, x: 200, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 4,
        ease: "power3.out",
        visibility: "visible",
      }
    );
  }, []);

  return (
    <div
      ref={btnRef}
      className="mr-0 invisible flex flex-col lg:items-start lg:justify-center md:items-center  lg:h-lvh font-hind  w-full "
    >
      <div className="flex flex-col lg:items-start justify-center md:items-center">
        {" "}
        <div className="relative flex flex-col xl:items-start justify-center items-center lg:px-10 ">
          <img
            className="2xl:w-96 xl:w-80 lg:w-80 md:w-1/2 sm:w-1/2 shadow-2xl-violet-900 shadow-inner-5xl-violet-300 z-10"
            src="https://res.cloudinary.com/dmijime4v/image/upload/v1725829736/o2o6p2sihg2gzeulpzhe.png"
            alt="Valentin Mor portrait"
          />

          <div className="absolute inset-0 z-0 bg-violet-900 opacity-10 rounded-full blur-3xl animation-move-loop max-w1/2"></div>
        </div>
        <div className=" mt-10  lg:px-0 w-full flex flex-col justify-center items-center   ">
          <div className="flex flex-col items-start pl-2  w-full px-0 lg:pl-10  mb-3 text-sm 2xl:text-xl xl:text-sm lg:text-xs font-Noehmi text-white">
            <div className=" mb-3 w-fit ">
              <FontAwesomeIcon
                className="mr-3 text-violet-400 text-sm"
                icon={faLaptop}
              />
              Front-end / Back-end
            </div>
            <div className="text-md mb-3 w-fit   ">
              <FontAwesomeIcon
                className="mr-3 ml-1 text-violet-400 text-sm"
                icon={faDatabase}
              />
              Gestion de base de données
            </div>
            <div className="text-md w-fit    ">
              <FontAwesomeIcon
                className="mr-3 ml-1  text-violet-400 text-sm"
                icon={faScrewdriverWrench}
              />
              Maintenance des services
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
