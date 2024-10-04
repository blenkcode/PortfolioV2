import Right from "./Right";
import Stack from "./Stack";

import Left from "./Left";
import Portfoliov2 from "./Portfoliov2";
import Background from "./Background";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import { useTheme } from "../ThemeContext";

import { useMainRef } from "../MainRefContext";
function Home({}) {
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const leftRef = useRef(null);
  const mainRef = useRef(null);
  const circleRef = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const circle5Ref = useRef(null);
  const circle6Ref = useRef(null);
  const circle7Ref = useRef(null);
  const circle8Ref = useRef(null);
  const circle9Ref = useRef(null);
  const rightRef = useRef(null);
  const stackRef = useRef(null);
  const portfolioRef = useRef(null);
  const svgRef = useRef(null);
  const { setMainRefValue } = useMainRef();
  const morphRef = useRef(null);
  const backgroundTriggerRef = useRef(null);
  useEffect(() => {
    if (mainRef.current) {
      setMainRefValue(mainRef.current);
    }
  }, [setMainRefValue]);

  useEffect(() => {
    const screenWidth = window.innerWidth;

    if (backgroundTriggerRef.current) {
      backgroundTriggerRef.current.kill();
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainRef.current,
        start: "3%",
        end: "60%",
        scrub: 3,
        onUpdate: (self) => {},
      },
    });
    if (screenWidth > 1000) {
      tl.fromTo(
        mainRef.current,
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 0.8)"
            : "rgba(1, 10, 10, 0.1)",
        },
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 0.5)"
            : "rgba(24, 24, 27, 1)",
          duration: 1,
        }
      ).to(mainRef.current, {
        backgroundColor: isDarkMode
          ? "rgba(24, 24, 27, 0.8)"
          : "rgba(24, 24, 27, 0.1)",
        duration: 1,
      });
    } else {
      tl.fromTo(
        mainRef.current,
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 1)"
            : "rgba(1, 10, 10, 0.1)",
        },
        {
          backgroundColor: isDarkMode
            ? "rgba(24, 24, 27, 1)"
            : "rgba(24, 24, 27, 0.1)",
          duration: 1,
        }
      ).to(mainRef.current, {
        backgroundColor: isDarkMode
          ? "rgba(24, 24, 27, 1)"
          : "rgba(24, 24, 27, 0.1)",
        duration: 1,
      });
    }

    backgroundTriggerRef.current = tl.scrollTrigger;
    ScrollTrigger.refresh();

    return () => {
      if (backgroundTriggerRef.current) {
        backgroundTriggerRef.current.kill();
      }
    };
    // Supprimer uniquement le ScrollTrigger lié au background si il existe
  }, [isDarkMode]);
  //GSAP SCROLL EVENTS
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: mainRef.current,
      //     start: "3%",
      //     end: "60%",
      //     scrub: 3,
      //   },
      // });

      gsap.fromTo(
        leftRef.current,
        { y: 0, opacity: 1 },
        {
          y: "-100%",
          opacity: 0,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "0%",
            end: "8%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 1, y: 0 },
        {
          opacity: 0,

          y: "-100%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "0%",
            end: "8%",
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        stackRef.current,
        { opacity: 0, visibility: "hidden", scale: 0.2 },
        {
          opacity: 1,
          scale: 1,
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "9%",
            end: "9%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        stackRef.current,
        { y: -150 },
        {
          y: -810,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "30%",
            end: "40%",
            scrub: 3,
          },
        }
      );

      gsap.fromTo(
        portfolioRef.current,
        { y: "100%", visibility: "hidden" }, // Commence avec l'élément hors écran (translate-y-full)
        {
          y: "0%", // Translate jusqu'à y = 0 (visible à l'écran)
          visibility: "visible",
          scrollTrigger: {
            trigger: mainRef.current, // Déclencher avec le scrolling de mainRef
            start: "40%", // Commence à 40% du scroll
            end: "42%", // Finit à 46% du scroll
            scrub: 2,
            // Synchronisation avec le scroll
          },
        }
      );

      gsap.set(circleRef.current, { scale: 0 });
      gsap.fromTo(
        circleRef.current,
        { scale: 0, visibility: "hidden" },
        {
          scale: 1,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "2%",
            end: "10%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        circleRef.current,
        { y: 0 },
        {
          y: 900,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "30%",
            end: "40%",
            scrub: 3,
          },
        }
      );
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "5%",
          end: "40%",
          scrub: 2,
        },
      });

      timeline
        .fromTo(
          circle2Ref.current,
          { y: -1000, visibility: "hidden" },
          { y: 700, visibility: "visible", ease: "power1.inOut" }
        )
        .fromTo(
          circle3Ref.current,
          { y: 700, visibility: "hidden" },
          { y: -1000, visibility: "visible", ease: "power1.inOut" },
          "<" // "<" signifie que cette animation commence au même moment que la précédente
        )
        .fromTo(
          circle4Ref.current,
          { y: 500, x: 110, visibility: "hidden" },
          { y: -1000, visibility: "visible", ease: "power1.inOut" },
          "<"
        )
        .fromTo(
          circle5Ref.current,
          { y: -1000, visibility: "hidden" },
          { y: 700, visibility: "visible", ease: "power1.inOut" },
          "<"
        )
        .fromTo(
          circle6Ref.current,
          { y: -700, visibility: "hidden" },
          { y: 1000, visibility: "visible", ease: "power1.inOut", scrub: 3 },
          "<"
        )
        .fromTo(
          circle7Ref.current,
          { y: 700, visibility: "hidden" },
          { y: -1200, visibility: "visible", ease: "power1.inOut", scrub: 3 },
          "<"
        )
        .fromTo(
          circle8Ref.current,
          { y: -1000, visibility: "hidden" },
          { y: 700, visibility: "visible", ease: "power1.inOut", scrub: 3 },
          "<"
        )
        .fromTo(
          circle9Ref.current,
          { y: 700, x: 60, visibility: "hidden" },
          { y: -1200, visibility: "visible", ease: "power1.inOut", scrub: 3 },
          "<"
        );
    }
  }, []);
  //GSAP ANIMATION
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "3%",
          end: "60%",
          scrub: 3,
        },
      })
      .fromTo(morphRef.current, { opacity: 1 }, { opacity: 0, duration: 1 })
      .to(morphRef.current, {
        opacity: 1,
        duration: 1,
      });
  }, [mainRef, morphRef]);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "13%",
          end: "23%",
          scrub: 1,
        },
      })
      .fromTo(
        svgRef.current.querySelector("circle"),
        { strokeDashoffset: 440, stroke: isDarkMode ? "#FDFAF8" : "#4F5053" },
        {
          strokeDashoffset: 0,
          duration: 1,
          stroke: isDarkMode ? "#4F5053" : "#4F5053",
          ease: "none",
        }
      );
  }, []);
  console.log(isDarkMode);
  return (
    <main
      ref={mainRef}
      className=" flex flex-col transition-colors  bg-opacity-70 items-center justify-center relative overflow-hidden h-auto w-full  "
    >
      <div
        ref={morphRef}
        className={`fixed top-1/2   right-1/2 translate-x-1/2 -translate-y-1/2 w-full h-screen flex flex-row    ${
          isDarkMode ? "opacity-100 " : "opacity-0 "
        }`}
      >
        <Background></Background>
      </div>

      <div className="flex flex-col px-5 lg:px-0 lg:mt-0 mt-20 justify-center items-center w-full relative   ">
        <div className="flex w-full lg:flex-row flex-col lg:h-lvh justify-center items-center ">
          <div ref={leftRef} className=" lg:w-1/2 top-1/2 transform  z-40">
            <Left></Left>
          </div>

          <div
            ref={rightRef}
            className="  transform fixed lg:relative invisible lg:visible"
          >
            <Right></Right>
          </div>
        </div>
        <div className="w-full lg:h-lvh">
          <div
            ref={circleRef}
            className={`invisible rounded-full shadow-2xl  left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 fixed  h-circlee w-circlee  bg-opacity-70  z-30 ${
              isDarkMode ? "bg-zinc-900" : "bg-zinc-200"
            }`}
          >
            <svg
              ref={svgRef}
              className="absolute -top-16  opacity-60 -left-16 translate-x-5 translate-y-5"
              width="600"
              height="600"
              viewBox="0 0 150 150"
            >
              <circle
                cx="75"
                cy="75"
                r="70"
                stroke="#4F5053"
                strokeWidth="2"
                fill="none"
                strokeDasharray="440"
                strokeDashoffset="440"
              ></circle>
            </svg>
          </div>
          <div
            ref={circle2Ref}
            className="w-40 rounded-full invisible shadow-2xl flex items-center justify-center bottom-10 right-96 fixed h-40 bg-opacity-30 z-10 bg-violet-400"
          >
            {" "}
            <img src="/react.png" className="w-2/3"></img>
          </div>
          <div
            ref={circle3Ref}
            className="w-40 rounded-full invisible shadow-2xl bottom-72 flex justify-center items-center z-10 left-36 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/next.png"></img>
          </div>
          <div
            ref={circle4Ref}
            className="w-40 rounded-full invisible shadow-2xl bottom-80 flex justify-center items-center left-80 translate-x-20 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/node.png"></img>
          </div>
          <div
            ref={circle5Ref}
            className="w-40 rounded-full invisible shadow-2xl bottom-72  flex justify-center items-center z-10 right-96 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/ex.png" className="w-2/3"></img>
          </div>

          <div
            ref={circle6Ref}
            className="w-40 rounded-full invisible shadow-2xl top-20 flex justify-center items-center z-10 right-20 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/mongo.png" className="w-2/3"></img>
          </div>
          <div
            ref={circle7Ref}
            className="w-40 rounded-full invisible shadow-2xl -bottom-32 flex justify-center items-center z-10 left-36 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/tail.png" className="w-4/5"></img>
          </div>
          <div
            ref={circle8Ref}
            className="w-40 rounded-full invisible shadow-2xl bottom-32 flex justify-center items-center z-10 right-20 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/redux1.png" className="w-2/3 "></img>
          </div>
          <div
            ref={circle9Ref}
            className="w-40 rounded-full invisible shadow-2xl bottom-0 flex justify-center items-center z-10 left-96 fixed h-40 bg-opacity-30 bg-violet-400"
          >
            <img src="/gsaplogo.png" className="w-2/3 grayscale "></img>
          </div>
          <div
            ref={stackRef}
            className=" w-full py-10 lg:py-0 lg:fixed right-1/2 lg:invisible lg:translate-x-1/2 top-1/2  z-30"
          >
            {" "}
            <Stack></Stack>
          </div>
        </div>

        <div
          ref={portfolioRef}
          className="w-full lg:h-lvh mt-10  lg:mt-0  pb-10 lg:pb-0 flex items-start justify-center lg:invisible visible lg:fixed top-0 lg:py-0 2xl:shadow-2xl lg:shadow-none shadow-2xl  "
        >
          <Portfoliov2 mainRef={mainRef} />
        </div>
        <div className="w-full lg:visible invisible h-0 lg:h-lvh opacity-0  lg:py-0 2xl:shadow-2xl lg:shadow-none shadow-2xl -z-50 ">
          {" "}
        </div>
        <div className="w-full lg:visible invisible h-0 lg:h-lvh opacity-0  lg:py-0 2xl:shadow-2xl lg:shadow-none shadow-2xl -z-50 ">
          {" "}
        </div>
      </div>
    </main>
  );
}

export default Home;
