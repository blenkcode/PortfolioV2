"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const GsapMagnetic = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });
    const yTo = gsap.quickTo(ref.current, "y", {
      duration: 1,
      ease: "elastic.out(1,0.3)",
    });

    const mouseMove = (e) => {
      if (!ref.current) return;

      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      const radius = 200;

      if (distance < radius) {
        // Calculer l'intensité avec une courbe inversée
        const intensity = Math.pow(1 - distance / radius, 0.9);

        // Inverser la direction du mouvement en multipliant par -1
        const x = (clientX - centerX) * intensity * -3; // Multiplié par -1 pour répulser
        const y = (clientY - centerY) * intensity * -3; // Multiplié par -1 pour répulser

        // Optionnel : limiter le déplacement maximum
        const maxMove = 50; // Ajustez cette valeur selon vos besoins
        xTo(Math.max(Math.min(x, maxMove), -maxMove));
        yTo(Math.max(Math.min(y, maxMove), -maxMove));
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.isValidElement(children)
    ? React.cloneElement(children, {
        ref,
        style: {
          ...children.props.style,
          transform: "translate3d(0, 0, 0)",
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
          willChange: "transform",
        },
      })
    : children;
};

export default GsapMagnetic;
