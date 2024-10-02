import Right from "./Right";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import Left from "./Left";
import Portfoliov2 from "./Portfoliov2";
import Background from "./Background";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";

import { useMainRef } from "../MainRefContext";
function Home({}) {
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
  useEffect(() => {
    if (mainRef.current) {
      // Passe la valeur de mainRef.current au contexte
      setMainRefValue(mainRef.current);
    }
  }, [setMainRefValue]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (router.query.scrollToPortfolio && screenWidth > 1000) {
      portfolioRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [router.query]);

  //GSAP SCROLL EVENTS
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const screenWidth = window.innerWidth;
    if (screenWidth > 1000) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "3%",
            end: "60%",
            scrub: 3,
          },
        })
        .fromTo(
          mainRef.current,
          { backgroundColor: "rgba(24, 24, 27, 0.6)" },
          { backgroundColor: "rgba(24, 24, 27, 1)", duration: 1 }
        )
        .to(mainRef.current, {
          backgroundColor: "rgba(24, 24, 27, 0.6)",
          duration: 1,
        });

      gsap.fromTo(
        leftRef.current,
        { x: 0, opacity: 1 },
        {
          x: -940,
          opacity: 0,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "3%",
            end: "8%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        rightRef.current,
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: 700,
          scrollTrigger: {
            trigger: mainRef.current,
            start: "3%",
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
            start: "40%",
            end: "46%",
            scrub: 3,
          },
        }
      );
      if (screenWidth >= 1536) {
        gsap.fromTo(
          portfolioRef.current,
          { y: 900, visibility: "hidden" },
          {
            y: -400,
            visibility: "visible",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "40%",
              end: "46%",
              scrub: 3,
            },
          }
        );
      } else if (screenWidth >= 1280) {
        gsap.fromTo(
          portfolioRef.current,
          { y: 900, visibility: "hidden" },
          {
            y: -450,
            visibility: "visible",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "40%",
              end: "46%",
              scrub: 3,
            },
          }
        );
      } else if (screenWidth >= 1024) {
        gsap.fromTo(
          portfolioRef.current,
          { y: 900, visibility: "hidden" },
          {
            y: -950,
            visibility: "visible",
            scrollTrigger: {
              trigger: mainRef.current,
              start: "35%",
              end: "46%",
              scrub: 3,
            },
          }
        );
      }

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
            end: "45%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        circle2Ref.current,
        { y: -1000, visibility: "hidden" },
        {
          y: 700,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "5%",
            end: "38%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        circle3Ref.current,
        { y: 700, visibility: "hidden" },
        {
          y: -1000,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "4%",
            end: "34%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        circle4Ref.current,
        { y: 500, visibility: "hidden" },
        {
          y: -1000,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "7%",
            end: "40%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        circle5Ref.current,
        { y: -1000, visibility: "hidden" },
        {
          y: 700,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "13%",
            end: "39%",
            scrub: 2,
          },
        }
      );
      gsap.fromTo(
        circle6Ref.current,
        { y: -700, visibility: "hidden" },
        {
          y: 1000,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "4%",
            end: "42%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        circle7Ref.current,
        { y: 700, visibility: "hidden" },
        {
          y: -1200,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "5%",
            end: "38%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        circle8Ref.current,
        { y: -1000, visibility: "hidden" },
        {
          y: 700,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "12%",
            end: "40%",
            scrub: 3,
          },
        }
      );
      gsap.fromTo(
        circle9Ref.current,
        { y: 700, visibility: "hidden" },
        {
          y: -1200,
          visibility: "visible",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "7%",
            end: "40%",
            scrub: 3,
          },
        }
      );

      gsap.to(".rotate-y", {
        keyframes: [
          { x: -400, y: -50, rotateZ: 360, scale: 1.2, duration: 30 },
        ],
        repeat: -1,
        yoyo: true,
      });
    } else {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "1%",
            end: "60%",
            scrub: 3,
          },
        })
        .fromTo(
          mainRef.current,
          { backgroundColor: "rgba(24, 24, 27, 0.7)" },
          { backgroundColor: "rgba(24, 24, 27, 1)", duration: 1 }
        )
        .to(mainRef.current, {
          backgroundColor: "rgba(24, 24, 27, 0.7)",
          duration: 1,
        });
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
      .fromTo(
        morphRef.current,
        { opacity: 1, filter: "blur(32px)" },
        { opacity: 0, duration: 1 }
      )
      .to(morphRef.current, {
        opacity: 1,
        duration: 1,
        filter: "blur(64px)",
      });
  }, [mainRef, morphRef]);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "13%",
          end: "18%",
          scrub: 1,
        },
      })
      .fromTo(
        svgRef.current.querySelector("circle"),
        { strokeDashoffset: 440, stroke: "#FDFAF8" },
        { strokeDashoffset: 0, duration: 1, stroke: "#A287F2", ease: "none" }
      );
  }, []);

  return (
    <main
      ref={mainRef}
      className=" flex flex-col bg-zinc-900 bg-opacity-70 items-center justify-center relative overflow-hidden h-auto w-full  "
    >
      <div
        ref={morphRef}
        className="blur-2xl fixed top-0 right-0 w-full h-screen flex flex-row -translate-y-96  "
      >
        <Background></Background>
      </div>

      <div className="flex flex-col px-5 lg:px-0 lg:mt-0 mt-20 justify-center items-center w-full relative   ">
        <div
          ref={leftRef}
          className="lg:fixed 2xl:left-52 xl:left-32 lg:left-20 lg:w-1/2 top-1/2 transform lg:-translate-y-1/2 left-5 z-40"
        >
          <Left></Left>
        </div>

        <div
          ref={rightRef}
          className="fixed 2xl:right-52 xl:right-20 lg:right-10 top-1/2 transform -translate-y-1/2 invisible lg:visible"
        >
          <Right></Right>
        </div>
        <div
          ref={circleRef}
          className="invisible rounded-full  left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 fixed  h-circlee w-circlee  bg-opacity-30 bg-zinc-900 z-30"
        >
          <svg
            ref={svgRef}
            className="absolute -top-16  opacity-60 -left-16 translate-x-1 translate-y-1"
            width="600"
            height="600"
            viewBox="0 0 150 150"
          >
            <circle
              cx="75"
              cy="75"
              r="70"
              stroke="#FDFAF8"
              strokeWidth="2"
              fill="none"
              strokeDasharray="440"
              strokeDashoffset="440"
            ></circle>
          </svg>
        </div>
        <div
          ref={circle2Ref}
          className="w-36 rounded-full invisible shadow-2xl flex items-center justify-center bottom-32 right-96 fixed h-36 bg-opacity-30 z-10 bg-violet-300"
        >
          {" "}
          <img src="/react.png" className="w-2/3"></img>
        </div>
        <div
          ref={circle3Ref}
          className="w-36 rounded-full invisible shadow-2xl bottom-32 flex justify-center items-center z-10 left-36 fixed h-36 bg-opacity-30 bg-violet-300"
        >
          <img src="/next.png"></img>
        </div>
        <div
          ref={circle4Ref}
          className="w-40 rounded-full invisible shadow-2xl bottom-80 flex justify-center items-center left-80 translate-x-20 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/node.png"></img>
        </div>
        <div
          ref={circle5Ref}
          className="w-40 rounded-full invisible shadow-2xl -bottom-0  flex justify-center items-center z-10 right-96 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/ex.png" className="w-2/3"></img>
        </div>

        <div
          ref={circle6Ref}
          className="w-40 rounded-full invisible shadow-2xl bottom-96 flex justify-center items-center z-10 right-20 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/mongo.png" className="w-2/3"></img>
        </div>
        <div
          ref={circle7Ref}
          className="w-40 rounded-full invisible shadow-2xl -bottom-20 flex justify-center items-center z-10 left-20 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/tail.png" className="w-4/5"></img>
        </div>
        <div
          ref={circle8Ref}
          className="w-36 rounded-full invisible shadow-2xl bottom-32 flex justify-center items-center z-10 right-20 fixed h-36 bg-opacity-30 bg-violet-300"
        >
          <img src="/redux1.png" className="w-2/3 "></img>
        </div>
        <div
          ref={circle9Ref}
          className="w-36 rounded-full invisible shadow-2xl -bottom-20 flex justify-center items-center z-10 left-96 fixed h-36 bg-opacity-30 bg-violet-300"
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
        <div
          ref={portfolioRef}
          className="w-full lg:fixed py-10 lg:py-0  2xl:shadow-2xl lg:shadow-none shadow-2xl lg:invisible visible right-1/2 lg:translate-x-1/2 xl:top-96 z-40"
        >
          {" "}
          <Portfoliov2 mainRef={mainRef} />
        </div>
        <div className="w-full lg:h-500 h-0"></div>
        <div className="w-full xl:h-500 lg:h-200 h-0"></div>
        <div className="w-full 2xl:h-500 xl:h-0"></div>
        <div className="w-full 2xl:h-500 xl:h-0 "></div>
      </div>
    </main>
  );
}

export default Home;
