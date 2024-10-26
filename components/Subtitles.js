import { useRef, useEffect } from "react";
import gsap from "gsap";
import Available from "./Available";
import {} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Pour utiliser l'icône
import {
  faSpotify,
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Subtitles = () => {
  const leftRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { y: 200, visibility: "hidden" },
      {
        y: 0,
        visibility: "visible",
        duration: 2,
        delay: 6.5,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <div
      ref={leftRef}
      className="lg:w-4/5  xl:text-base lg:text-sm w-full  flex lg:items-center lg:flex-row px-5 lg:px-0 flex-col justify-between  font-Satoshi   text-neutral-800  relative  lg:h-1/3"
    >
      <div className="flex  lg:space-y-0 space-y-10 flex-col">
        <h4 className="font-bold mb-2 allTextcolor ">TECH</h4>
        <ul className="cursor-default">
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">TypeScript w/ Next.js, React & Redux </span>
          </li>
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">Tailwind CSS, GSAP</span>
          </li>
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">Node.js w/ Express</span>
          </li>
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">MongoDB</span>
          </li>
        </ul>
      </div>
      <div className="flex  lg:space-y-0 space-y-10 flex-col">
        <h4 className="font-bold mb-2 allTextcolor ">ABOUT</h4>
        <ul className="cursor-default">
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">Valentin MOR</span>
          </li>
          <li className="relative group overflow-hidden">
            {" "}
            <span className="">Independant Developper</span>
          </li>

          <li className="relative group overflow-hidden">
            {" "}
            <span className="">Based in Montpellier France</span>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center h-1/3">
        {" "}
        <Available />
      </div>

      <div className="items-center text-neutral-200 justify-start space-x-5 flex flex-row mt-10 lg:mt-0">
        <div className="flex flex-col space-y-5">
          <div className="  relative w-9 h-9 rounded-full overflow-hidden group">
            {" "}
            <a
              href="/"
              className="w-8 h-8 z-50 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  bg-neutral-200  flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon
                className=" text-xl coloricon group-hover:rotate-x-180"
                icon={faLinkedinIn}
              />
            </a>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 -translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
          <div className="relative w-9 h-9 rounded-full overflow-hidden group">
            {" "}
            <a
              href="/"
              className="w-8 h-8 z-50 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  bg-neutral-200  flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon
                className=" text-2xl coloricon"
                icon={faGithub}
              />
            </a>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 -translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <div className="relative w-9 h-9 rounded-full overflow-hidden group">
            {" "}
            <a
              href="/"
              className="w-8 h-8 z-50 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  bg-neutral-200 flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon
                className=" text-2xl coloricon"
                icon={faInstagram}
              />
            </a>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 -translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
          <div className="relative w-9 h-9 rounded-full overflow-hidden group">
            {" "}
            <a
              href="/"
              className="w-8 h-8 z-50 absolute top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2  bg-neutral-200   flex items-center justify-center rounded-full"
            >
              <FontAwesomeIcon
                className=" text-2xl coloricon"
                icon={faSpotify}
              />
            </a>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 -translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
            <div className="absolute w-full h-full  -top-0 left-0  bgicon rounded-full z-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subtitles;
