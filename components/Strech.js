import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Stretch = () => {
  const lineRef = useRef(null); // Reference to the line

  useEffect(() => {
    const line = lineRef.current; // Access the current value of the ref

    // Mouseenter: Curved path animation
    line.addEventListener("mouseenter", () => {
      gsap.to(line, {
        duration: 0.6,
        attr: {
          d: "M89.5006 42.9997C122.288 -14.4197 159 -18 211.001 61.9996C266.5 76.4998 319.869 58.6181 298.5 94.9999C182.5 292.5 421.92 65.887 369.5 154.5C306.5 261 211.001 430 230.001 261C245.808 120.404 240.579 214.853 181.501 172.5C72.0007 93.9998 -107.5 388 89.5006 42.9997Z",
        }, // Curved path
        ease: "power1.out",
      });
    });

    // Mouseleave: Back to straight line
    line.addEventListener("mouseleave", () => {
      gsap.to(line, {
        duration: 0.6,
        attr: {
          d: "M16.5001 82.9998C53.0496 27.8987 119.5 190.5 138 102C157 32.0005 294.369 -23.8818 273.001 12.5C157.001 210 209.055 140.155 296.5 194.5C384.999 249.5 243 251 157 301C34.689 372.112 98.5 284.5 108.501 212.5C116.066 158.03 -49.4995 182.499 16.5001 82.9998Z",
        }, // Back to straight line
        ease: "elastic.out(1, 0.2)", // Elastic effect when it snaps back
      });
    });

    // Clean up event listeners when the component unmounts
    return () => {
      line.removeEventListener("mouseenter", null);
      line.removeEventListener("mouseleave", null);
    };
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return (
    <div className="w-fit">
      <svg
        width="286"
        height="108"
        className="line-svg"
        viewBox="0 0 286 108"
        fill="red"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={lineRef}
          d="M16.5001 82.9998C53.0496 27.8987 119.5 190.5 138 102C157 32.0005 294.369 -23.8818 273.001 12.5C157.001 210 209.055 140.155 296.5 194.5C384.999 249.5 243 251 157 301C34.689 372.112 98.5 284.5 108.501 212.5C116.066 158.03 -49.4995 182.499 16.5001 82.9998Z"
          stroke="black"
        />
      </svg>
    </div>
  );
};

export default Stretch;
