import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VirtualScroll = ({ children }) => {
  const containerRef = useRef(null);
  const virtualScrollRef = useRef(null);

  useEffect(() => {
    // Créer un conteneur virtuel pour le scroll
    const virtualHeight =
      containerRef.current.offsetHeight + window.innerHeight; // Hauteur additionnelle pour l'overscroll

    virtualScrollRef.current.style.height = `${virtualHeight}px`;

    // Configuration du smooth scroll
    const smoothScroll = gsap.to(containerRef.current, {
      y: -(virtualHeight - window.innerHeight),
      ease: "none",
      scrollTrigger: {
        trigger: virtualScrollRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Ajustez cette valeur pour une animation plus ou moins fluide
        invalidateOnRefresh: true,
      },
    });

    // Exemple d'animations à déclencher pendant le scroll
    gsap.to(".element-to-animate", {
      rotation: 360,
      scale: 1.5,
      scrollTrigger: {
        trigger: ".element-to-animate",
        start: "center center",
        end: "bottom top",
        scrub: 1,
        markers: true, // Pour le debug, à retirer en production
      },
    });

    return () => {
      // Nettoyage
      smoothScroll.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={virtualScrollRef}
        style={{
          position: "absolute",
          width: "100%",
          visibility: "hidden",
        }}
      />
      <div
        ref={containerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default VirtualScroll;
