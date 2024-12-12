import React, { useState, useEffect } from "react";

const MouseTracker = ({ isMouse }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-[100px]  h-[100px]  z-50 `}
      style={{
        transform: `translate(${mousePosition.x - 125}px, ${
          mousePosition.y - 50
        }px)`,
        pointerEvents: "none",
      }}
    >
      <div
        className={`bg-neutral-200 rounded-full w-full h-full relative  ${
          isMouse ? "opacity-100" : "opacity-0"
        }`}
      ></div>
    </div>
  );
};

export default MouseTracker;
