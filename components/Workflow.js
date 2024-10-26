import { gsap } from "gsap";
import { useEffect, useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import ShaderScene from "../components/ShaderScene";
const Workflow = ({ mainRef }) => {
  const collabRef = useRef(null);
  const collabTitleRef = useRef(null);
  const collabPRef = useRef(null);
  const boxShaderRef = useRef(null);
  const interRef = useRef(null);
  const interTitleRef = useRef(null);
  const interPRef = useRef(null);
  const speedRef = useRef(null);
  const speedTitleRef = useRef(null);
  const speedPRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      collabRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      interRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1.2,
        delay: 0.4,
        duration: 0.8,

        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      speedRef.current,
      { y: "-20%", opacity: 0 },
      {
        opacity: 1.2,
        y: "0%",
        duration: 0.8,
        delay: 0.8,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      speedTitleRef.current,
      { y: "-20%", opacity: 0 },
      {
        opacity: 1.2,
        y: "0%",
        duration: 0.8,
        delay: 1,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      speedPRef.current,
      { y: "-20%", opacity: 0 },
      {
        opacity: 1.2,
        y: "0%",
        duration: 0.8,
        delay: 1.2,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      interTitleRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1.2,
        delay: 0.5,
        duration: 0.8,

        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      interPRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1.2,
        delay: 0.7,
        duration: 0.8,

        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      collabTitleRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        delay: 0.2,
        duration: 0.8,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
    gsap.fromTo(
      collabPRef.current,
      { y: "-20%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        delay: 0.4,
        duration: 0.8,
        scrollTrigger: {
          toggleActions: "play none none reverse",
          trigger: mainRef,
          start: "22%", // Déclenchement au centre de l'écran
          // Fin de l'animation quand le bas atteint le haut
        },
      }
    );
  }, []);
  return (
    <div className="flex mt-44 opacity-0 flex-col items-start justify-start w-full  mb-52 relative ">
      <div className="text-neutral-800 font-Satoshi items-center justify-center font-thin w-full flex space-x-20  ">
        <div
          ref={collabRef}
          className="w-96 h-72 items-center shadow-2xl  justify-start flex flex-col space-y-5"
        >
          <div className="w-full p-10 ">
            {" "}
            <h4 ref={collabTitleRef} className="text-3xl allTextcolor mb-5">
              WORKFLOW
            </h4>
            <p ref={collabPRef} className="text-lg ">
              When developing your website, I focus on understanding your goals
              and preferences, while also offering my professional input to
              deliver the best possible outcome.
            </p>
          </div>
        </div>
        <div
          ref={interRef}
          className="w-96 h-72 items-center shadow-2xl  justify-start flex flex-col space-y-5"
        >
          <div className="w-full p-10 ">
            {" "}
            <h4 ref={interTitleRef} className="text-3xl allTextcolor mb-5">
              INTERACTION
            </h4>
            <p ref={interPRef} className="text-lg ">
              A seamless user experience is built through thoughtful animations
              and intuitive interactions. I dedicate time to designing these
              aspects.
            </p>
          </div>
        </div>
        <div
          ref={speedRef}
          className="w-96 h-72  items-center shadow-2xl  justify-start flex flex-col space-y-5"
        >
          {" "}
          <div className="w-full p-10 ">
            {" "}
            <h4 ref={speedTitleRef} className="text-3xl allTextcolor mb-5">
              SPEED
            </h4>
            <p ref={speedPRef} className="text-lg ">
              In the digital world, speed is crucial. I prioritize optimizing
              your project's performance, ensuring that every tool is used
              according to best practices for maximum efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
