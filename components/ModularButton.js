import React from "react";

const AnimatedButton = ({ text }) => {
  const letters = text.split("");

  // Fonction pour générer un délai aléatoire parmi une sélection de valeurs
  const getRandomDelay = () => {
    const delays = ["delay-75", "delay-200", "delay-100", "delay-300"];
    return delays[Math.floor(Math.random() * delays.length)];
  };

  return (
    <div className="flex px-6  cursor-pointer group items-start justify-start lg:space-y-0  overflow-hidden duration-500 transition-all  w-fit relative flex-col font-Satoshi font-bold text-neutral-800 ">
      <div className="relative  w-fit z-30">
        <span className="opacity-0 flex">{text}1</span>
        <span className="absolute perspective-[1000px] flex top-0 left-0 w-full">
          {letters.map((letter, index) => (
            <React.Fragment key={`top-${index}`}>
              {letter === " " ? (
                <span className="opacity-0">.</span>
              ) : (
                <span
                  className={`flex [transform:rotateX(0deg)]  transition-all opacity-100 group-hover:opacity-0  group-hover:[transform:rotateY(180deg)_translateY(-300%)]  duration-500 ease-in-out origin-center ${getRandomDelay()}`}
                >
                  {letter}
                </span>
              )}
            </React.Fragment>
          ))}
        </span>
        <span className="absolute perspective-[1000px]  flex top-0 left-0 w-full">
          {letters.map((letter, index) => (
            <React.Fragment key={`bottom-${index}`}>
              {letter === " " ? (
                <span className="opacity-0">.</span>
              ) : (
                <span
                  className={`flex [transform:rotateY(-180deg)_translateY(100%)] opacity-0 group-hover:opacity-100 group-hover:[transform:rotateY(0deg)_translateY(0%)]  transition-all duration-500 ease-in-out origin-center ${getRandomDelay()}`}
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
