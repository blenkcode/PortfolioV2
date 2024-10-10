import { useTheme } from "../ThemeContext";
import { useRef, useEffect, useState } from "react";
const ThemeSwitcher = () => {
  const clickSoundRef = useRef(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const [invisible, setInvisible] = useState(false);
  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.3;
      clickSoundRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };

  const handleClick = () => {
    playClickSound();
    toggleTheme();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-14 h-8 border-1   border-solid text-white rounded-full relative lg:mr-10 mr-5  px-1 overflow-hidden scale-90 ${
        isDarkMode
          ? "bg-zinc-700 border-zinc-300 "
          : " border-zinc-700 bg-transparent"
      }`}
    >
      {" "}
      <audio ref={clickSoundRef} src="/click1.wav"></audio>{" "}
      <div
        className={`w-3 h-3 scale-125  rounded-3xl absolute top-2 left-2 -translate-x-1 z-20 transition-all duration-300 ${
          isDarkMode
            ? "opacity-100 bg-zinc-700"
            : "opacity-0 bg-violet-800 translate-x-full"
        }`}
      ></div>
      <div
        className={`w-5 h-5  transition-all duration-300 rounded-full z-10 ${
          isDarkMode ? "bg-zinc-200" : "translate-x-6 bg-violet-800"
        }`}
      ></div>
    </button>
  );
};

export default ThemeSwitcher;
