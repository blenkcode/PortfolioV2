import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap/dist/gsap";
import { useTheme } from "../ThemeContext";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Svg = ({ mainRef }) => {
  const { isDarkMode } = useTheme();
  const svgRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [success, setSuccess] = useState(0);
  const [display, setDisplay] = useState(false); // État pour stocker la progression
  if (progress === 100) {
    setSuccess(true);
  }

  useEffect(() => {
    if (progress > 1) {
      setDisplay(true);
    } else if (progress < 1) {
      setDisplay(false);
    }
  }, [progress]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const circleElement = svgRef.current.querySelector("circle");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef,
          start: "10%",
          end: "28%",
          scrub: 1,
          onUpdate: (self) => {
            const percentage = (self.progress * 100).toFixed(0); // Calcule le pourcentage de progression
            setProgress(percentage); // Mets à jour l'état avec la nouvelle valeur de progression
          },
        },
      })
      .fromTo(
        circleElement,
        { strokeDashoffset: 440, stroke: isDarkMode ? "#FDFAF8" : "#27272A" },
        {
          strokeDashoffset: 0,
          duration: 1,
          stroke: isDarkMode ? "#C4B5FD" : "#5B21B6",
          ease: "none",
        }
      );
  }, [isDarkMode, mainRef]);

  return (
    <div className="relative ">
      <svg
        ref={svgRef}
        className="absolute"
        width="100"
        height="100"
        viewBox="0 0 150 150"
      >
        <circle
          cx="75"
          cy="75"
          r="70"
          strokeWidth="2"
          fill="none"
          strokeDasharray="440"
          strokeDashoffset="440"
        ></circle>
      </svg>
      <div
        className={`absolute top-9 -right-16  font-source  ${
          display ? "opacity-100" : "opacity-0"
        } ${isDarkMode ? "text-white" : "text-zinc-900"}`}
      >
        {progress}%
      </div>
    </div>
  );
};

export default Svg;
