import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "../ThemeContext";
import { gsap } from "gsap";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then((mod) => mod.FontAwesomeIcon),
  { ssr: false }
);

function Right() {
  const { isDarkMode } = useTheme();
  const btnRef = useRef(null);

  useEffect(() => {
    // Set initial state to avoid recalculations
    gsap.set(btnRef.current, { opacity: 0, visibility: "hidden", x: 50 });

    // Animate opacity and visibility in one go
    gsap.to(btnRef.current, {
      opacity: 1,
      x: 0,
      visibility: "visible",
      duration: 2,
      delay: 2.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <div
      ref={btnRef}
      className="mr-0  invisible flex flex-col items-start justify-center lg:scale-100 scale-75  h-fit font-hind  w-full "
    >
      <div className="flex flex-col lg:items-start justify-center md:items-center">
        {" "}
        <div className="relative flex flex-col xl:items-start justify-center z-20 items-center lg:px-10 group w-fit ">
          {" "}
          <img
            className=" z-30 2xl:w-96 transition-all duration-500  xl:w-80 grayscale lg:w-80 md:w-1/2 sm:w-1/2 group-hover:scale-105 shadow-2xl-violet-900   "
            src="/finalVM.webp"
            alt="Valentin Mor portrait"
            loading="lazy"
            rel="preload"
            fetchpriority="high"
          />
          <div className="w-10 h-10 lg:visible invisible   ">
            {/* <div
              className={`w-full -translate-x-10 h-full  z-10 rounded-full blur-3xl absolute top-0  opacity-0 group-hover:opacity-100 transition-all duration-500 ${
                isDarkMode
                  ? "bg-opacity-20 bg-violet-400 "
                  : "bg-opacity-30 bg-violet-900 "
              }`}
            ></div> */}
            <div className="absolute  w-44  py-20 px-2 right-14 -top-24 rotate-six overflow-hidden ">
              <div className="w-80 h-20 rounded-full translate-x-full ml-10  transition-all duration-700    group-hover:translate-x-0 relative  ">
                <span className="w-1 h-full absolute rounded-full left-7 shadow-2xl bg-zinc-100"></span>
              </div>
            </div>
            <div className="absolute  w-56 py-20 px-2 left-5 -top-40 rotate-five overflow-hidden ">
              <div className="w-56 h-32 rounded-full  translate-x-full ml-10 transition-all duration-700   group-hover:translate-x-0 relative">
                <span className="w-1 h-full absolute left-20 rounded-full bg-zinc-100 shadow-2xl "></span>
              </div>
            </div>
            <div className="absolute w-80 py-20 px-2 -left-32 top-8 overflow-hidden rotate-two ">
              <div className="w-80 h-44 rounded-full translate-x-full ml-10    transition-all duration-700    relative group-hover:translate-x-0">
                <span className="w-1 h-full left-24 shadow-2xl absolute rounded-full bg-zinc-100"></span>
              </div>
            </div>
            <div className="absolute  w-56 py-20 px-2 -left-8 -bottom-28 rotate-four overflow-hidden ">
              <div className="w-80 h-20 rounded-full ml-10 translate-x-full  transition-all duration-700   relative group-hover:translate-x-0">
                <span className="w-1 h-full left-28 absolute shadow-2xl  rounded-full bg-zinc-100"></span>
              </div>
            </div>
            <div className="absolute  w-96 py-20 px-2 -right-5 -bottom-24 -rotate-one overflow-hidden ">
              <div className="w-72 h-36 rounded-full translate-x-full  ml-10  transition-all duration-700    relative group-hover:translate-x-0">
                <span className="w-1 h-full left-32 shadow-2xl absolute rounded-full bg-zinc-100"></span>
              </div>
            </div>
            <div className="absolute  w-72 py-20 px-2 -right-28 top-10 -rotate-three overflow-hidden ">
              <div className="w-96 h-48 rounded-full translate-x-full ml-10   transition-all duration-700  relative group-hover:translate-x-0">
                <span className="w-1 h-full absolute shadow-2xl  left-28 rounded-full bg-zinc-100"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
