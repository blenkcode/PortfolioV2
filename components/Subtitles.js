import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
const Subtitles = () => {
  const [whoIsHovered, setWhoIsHovered] = useState("");
  const leftRef = useRef(null);
  useEffect(() => {
    if (whoIsHovered === "linked") {
    }
  }, [whoIsHovered]);
  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { y: 200, visibility: "hidden" },
      {
        y: 0,
        visibility: "visible",
        duration: 2,
        delay: 6.8,
        ease: "power3.out",
      }
    );
  }, []);
  return (
    <div
      ref={leftRef}
      className="lg:w-4/5 text-xs  xl:text-base lg:text-sm w-full  flex lg:items-start lg:flex-row px-5 lg:px-0 flex-col justify-between  font-Satoshi space-y-14 lg:space-y-0   text-neutral-800 mt-14 lg:mt-0 relative  lg:h-1/4"
    >
      <div className="flex 2xl:space-x-32 xl:space-x-28 lg:space-x-20 justify-between space-x-5">
        <div className="flex  lg:space-y-0 space-y-2 flex-col">
          <h4 className="font-bold mb-2 text-neutral-800 flex items-center space-x-3">
            <div className="w-3 h-3 bg-neutral-800"></div>
            <div>TECH-STACK</div>
          </h4>
          <ul className="cursor-default">
            <li className="relative group overflow-hidden">
              {" "}
              <span className="">TypeScript w/ Next.js, React </span>
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
        <div className="flex  lg:space-y-0 space-y-2 flex-col">
          <h4 className="font-bold mb-2 text-neutral-800 flex items-center space-x-3">
            <div className="w-3 h-3 bg-neutral-800"></div>
            <div>ABOUT ME</div>
          </h4>
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
      </div>

      <div className="flex flex-col items-center justify-center lg:h-1/3 space-y-2">
        <div>YOU KNOW THE DEAL</div>
        <div className="font-bold relative">
          SCROLL
          <img
            src="/svg/newarrow.svg"
            className="absolute rotate-90 top-1/2 -translate-y-1 -left-10"
          ></img>
        </div>
      </div>

      <div className="items-start justify-center text-neutral-200 lg:justify-start flex flex-col mt-0 lg:mt-0">
        <h4 className="font-bold mb-2 text-neutral-800 flex items-center space-x-2">
          <div className="w-3 h-3 bg-neutral-800"></div>
          <div>SOCIALS</div>
        </h4>
        <div className="flex flex-col items-start text-neutral-800">
          <div className="flex">
            <div
              onMouseEnter={() => setWhoIsHovered("linked")}
              className="group border-solid border-1 border-neutral-800 hover:text-stone-200 transition-all duration-300 px-2 py-1 w-24 relative overflow-hidden"
            >
              {" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/valentin-mor-a03174114/"
                className="z-50 absolute "
              >
                Linked-In
              </a>
              <div className="z-10 w-full h-full bg-neutral-800 top-0 absolute left-0 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
            <div
              onMouseEnter={() => setWhoIsHovered("git")}
              className="group border-solid border-l-0 border-1 border-neutral-800 hover:text-stone-200 transition-all duration-300 px-2 py-1 w-24 relative overflow-hidden"
            >
              {" "}
              <a
                target="_blank"
                href="https://github.com/blenkcode"
                className="z-50 absolute "
              >
                Git-Hub
              </a>
              <div className="opacity-0">Git-hub</div>
              <div className="z-10 w-full h-full bg-neutral-800 top-0 absolute left-0 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </div>
          <div className="flex">
            <div
              onMouseEnter={() => setWhoIsHovered("spotify")}
              className="group border-solid border-t-0 border-1 border-neutral-800 hover:text-stone-200 transition-all duration-300 px-2 py-1 w-24 relative overflow-hidden"
            >
              {" "}
              <a
                target="_blank"
                href="https://open.spotify.com/intl-fr/artist/1dkEG4atVRsDIkhriguiSp"
                className="z-50 absolute "
              >
                Spotify
              </a>
              <div className="z-10 w-full h-full bg-neutral-800 top-0 absolute left-0 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
            <div
              onMouseEnter={() => setWhoIsHovered("instagram")}
              className="group border-solid border-t-0 border-l-0 border-1 border-neutral-800 hover:text-stone-200 transition-all duration-300 px-2 py-1 w-24 relative overflow-hidden"
            >
              {" "}
              <a
                target="_blank"
                href="https://www.instagram.com/blenk_sound/"
                className="z-50 absolute "
              >
                Instagram
              </a>
              <div className="opacity-0">Instagram</div>
              <div className="z-10 w-full h-full bg-neutral-800 top-0 absolute left-0 scale-0 group-hover:scale-100 transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subtitles;
