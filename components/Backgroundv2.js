import React, { useEffect } from "react";

const Backgroundv2 = () => {
  useEffect(() => {
    const interBubble = document.querySelector(".interactivemouse");
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    // Fonction pour animer le mouvement de la bulle
    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        const bubbleWidth = interBubble.offsetWidth;
        const bubbleHeight = interBubble.offsetHeight;

        // Ajuster la position pour centrer l'élément autour de la souris
        interBubble.style.transform = `translate(${Math.round(
          curX - bubbleWidth / 2
        )}px, ${Math.round(curY - bubbleHeight / 2)}px)`;
      }
      requestAnimationFrame(move);
    }

    // Ajouter un écouteur d'événement pour suivre le mouvement de la souris
    const handleMouseMove = (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    move();

    // Nettoyer les écouteurs d'événements au démontage du composant
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
        <div className="interactive2"></div>
        <div className="interactive3"></div>
        <div className="interactive4"></div>
        <div className="interactive5"></div>
        <div className="interactive6"></div>
        <div className="interactivemouse"></div>
      </div>
    </div>
  );
};

export default Backgroundv2;
