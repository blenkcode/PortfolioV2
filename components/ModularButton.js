import React from "react";

const AnimatedButton = ({ text }) => {
  const letters = text.split("");

  // Fonction pour générer un délai aléatoire parmi une sélection de valeurs

  const delays = [
    "delay-[0.05s]",
    "delay-[0.1s]",
    "delay-[0.15s]",
    "delay-[0.20s]",
    "delay-[0.25s]",
    "delay-[0.30s]",
    "delay-[0.35s]",
    "delay-[0.40s]",
    "delay-[0.45s]",
    "delay-[0.50s]",
    "delay-[0.55s]",
    "delay-[0.60s]",
    "delay-[0.65s]",
    "delay-[0.70s]",
    "delay-[0.75s]",
    "delay-[0.8s]",
    "delay-[0.85s]",
    "delay-[0.90s]",
    "delay-[0.95s]",
  ];

  return (
    <div className="flex  cursor-pointer group items-start justify-start lg:space-y-0  overflow-hidden duration-500 transition-all  w-fit relative flex-col font-Satoshi font-thin  ">
      <div className="relative  w-fit z-30 hover:border-neutral-200 duration-300 rounded-full  border-transparent border-1 transition-all px-3 py-1 items-center flex justify-center ">
        <span className="opacity-0 flex px-1 py-2">{text}</span>
        <span className="absolute perspective-[1000px] flex top-1/2 -translate-y-[55%] right-1/2 translate-x-1/2 w-fit ">
          {letters.map((letter, index) => (
            <React.Fragment key={`top-${index}`}>
              {letter === " " ? (
                <span className="opacity-0">.</span>
              ) : (
                <span
                  className={`flex [transform:rotateX(0deg)]  transition-all  group-hover:scale-0 group-hover:duration-300 duration-0  opacity-100 group-hover:opacity-0 group-hover:[transform:rotateY(90deg)_rotateZ(90deg)]   ease-in-out origin-center `}
                >
                  {letter}
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
        <span className="absolute perspective-[1000px] flex  top-1/2 -translate-y-[55%] right-1/2 translate-x-1/2  w-fit">
          {letters.map((letter, index) => (
            <React.Fragment key={`top-${index}`}>
              {letter === " " ? (
                <span className="opacity-0">.</span>
              ) : (
                <span
                  className={`flex [transform:rotateY(-180deg)_rotateZ(-180deg)] group-hover:delay-200 transition-all  scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 group-hover:[transform:rotateY(0deg)_rotateZ(0deg)]  group-hover:duration-300 duration-0 ease-in-out origin-center `}
                >
                  {letter}
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default AnimatedButton;
