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
    <div className="w-full h-screen flex flex-row scale-150  translate-x-1/3   ">
      <div className="">
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 rounded-full bg-violet-800 bg-opacity-10 rotate-y ">
          <div className="w-80 h-80 rounded-full bg-zinc-300 bg-opacity-30 rotate-y">
            <div className="w-64 h-64 rounded-full bg-zinc-900 bg-opacity-40 rotate-y">
              <div className="w-44 h-44 rounded-full bg-violet-900 bg-opacity-10 rotate-y"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
