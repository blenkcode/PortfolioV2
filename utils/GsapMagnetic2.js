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

      // Calculer la distance entre le curseur et le centre
      const distance = Math.sqrt(
        Math.pow(clientX - centerX, 2) + Math.pow(clientY - centerY, 2)
      );

      // Rayon d'effet (augmentez cette valeur pour un effet plus large)
      const radius = 150; // Par exemple, 200 pixels autour de l'élément

      // Si le curseur est dans le rayon d'effet
      if (distance < radius) {
        // Calculer l'intensité basée sur la distance (plus proche = plus fort)
        const intensity = Math.pow(1 - distance / radius, 1.9); // Exposant pour une courbe plus douce

        // Calculer le déplacement avec un facteur multiplicateur
        const x = (clientX - centerX) * intensity; // Facteur 0.5 pour adoucir le mouvement
        const y = (clientY - centerY) * intensity;

        xTo(x);
        yTo(y);
      } else {
        // En dehors du rayon, retour en douceur à la position initiale
        xTo(0);
        yTo(0);
      }
    };

    // Retour à la position initiale quand la souris sort de la fenêtre
    const mouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    // Attacher les événements à la fenêtre au lieu de l'élément
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseleave", mouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return React.isValidElement(children)
    ? React.cloneElement(children, { ref })
    : children;
};

export default GsapMagnetic;
