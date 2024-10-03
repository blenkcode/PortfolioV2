import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";

const Background = () => {
  useEffect(() => {
    gsap.to(".rotate-y", {
      keyframes: [
        {
          x: -400, // Translation horizontale
          y: -50, // Translation verticale
          rotateZ: 360, // Rotation sur l'axe Z
          scale: 1.2, // Échelle
          duration: 30, // Durée de l'animation
        },
      ],
      repeat: -1, // Répétition infinie
      yoyo: true, // Animation aller-retour
    });
  }, []);
  return (
    <div className="w-full h-screen flex flex-row  blur-3xl    ">
      <div className=" flex ">
        <div className="w-200  h-200 rounded-full translate-y-20  bg-violet-400 bg-opacity-10 rotate-y ">
          <div className="w-192 h-192 rounded-full -translate-x-52 - translate-y-20  bg-zinc-900 bg-opacity-40 ">
            <div className="w-110 h-110 -translate-x-10 -translate-y-20  rounded-full bg-violet-400 bg-opacity-10 "></div>
          </div>
        </div>
        <div className="w-200 scale-150 h-200 rounded-full translate-y-20  bg-violet-400 bg-opacity-10 rotate-y delay-700">
          <div className="w-192 h-192 rounded-full -translate-x-52 - translate-y-20  bg-zinc-900 bg-opacity-50 ">
            <div className="w-110 h-110 -translate-x-10 -translate-y-20  rounded-full bg-violet-400 bg-opacity-10 "></div>
          </div>
        </div>
        <div className="w-200  h-200 rounded-full translate-y-20  bg-violet-400 bg-opacity-10 rotate-y delay-300">
          <div className="w-192 h-192 rounded-full -translate-x-52 - translate-y-20  bg-zinc-700 bg-opacity-50 ">
            <div className="w-110 h-110 -translate-x-10 -translate-y-20  rounded-full bg-violet-400 bg-opacity-10 "></div>
          </div>
        </div>
        <div className="w-200 scale-150 h-200 rounded-full translate-y-20  bg-violet-400 bg-opacity-10 rotate-y ">
          <div className="w-192 h-192 rounded-full -translate-x-52 - translate-y-20  bg-zinc-500 bg-opacity-50 ">
            <div className="w-110 h-110 -translate-x-10 -translate-y-20  rounded-full bg-violet-400 bg-opacity-10 "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
