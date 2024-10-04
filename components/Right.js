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

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;

  //   // Avoids animation if the screen width is less than 1000
  //   if (screenWidth > 1000) {
  //     // Set initial state to avoid recalculations
  //     gsap.set(btnRef.current, { opacity: 0, visibility: "hidden", x: 50 });

  //     // Animate opacity and visibility in one go
  //     gsap.to(btnRef.current, {
  //       opacity: 1,
  //       x: 0,
  //       visibility: "visible",
  //       duration: 2,
  //       delay: 2.3,
  //       ease: "power3.out",
  //     });
  //   }
  // }, []);

  return (
    <div
      ref={btnRef}
      className="mr-0   flex flex-col items-start justify-center   h-fit font-hind  w-full "
    >
      <div className="flex flex-col lg:items-start justify-center md:items-center">
        {" "}
        <div className="relative flex flex-col xl:items-start justify-center items-center lg:px-10 ">
          {" "}
          <img
            className=" z-20 2xl:w-96 xl:w-80 lg:w-80 md:w-1/2 sm:w-1/2 shadow-2xl-violet-900   "
            src="/finalvm.webp"
            alt="Valentin Mor portrait"
            loading="lazy"
            rel="preload"
            fetchpriority="high"
          />
          {/* <div className="absolute inset-0 z-0 bg-violet-900 opacity-10 rounded-full blur-3xl  max-w1/2"></div>
          <div className="absolute flex rotate-two -left-14 -top-14 translate-x-8">
            <div className="h-96 w-96 -translate-y-10 rounded-full  shadow-md    overflow-hidden mr-5">
              <div className="h-full w-full  rounded-full blur-3xl"></div>
            </div>
          </div> */}
        </div>
        <div className=" mt-10  lg:px-0 w-full flex flex-col justify-center items-center   "></div>
      </div>
    </div>
  );
}

export default Right;
