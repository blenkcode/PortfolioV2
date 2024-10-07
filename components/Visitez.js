import React from "react";
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Visitez = ({ link }) => {
  const { isDarkMode } = useTheme();
  const clickSoundRef = useRef(null);
  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.1;
      clickSoundRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  return (
    <a
      href={link}
      target="_blank"
      className=" mt-5   "
      onMouseEnter={playClickSound}
    >
      {" "}
      <audio ref={clickSoundRef} src="/click1.wav"></audio>
      <div
        className={`group border hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-40 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden ${
          isDarkMode
            ? "border-zinc-200 text-white  "
            : "border-zinc-900 text-zinc-900 "
        }`}
      >
        <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
          Visitez
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
        <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
          Visitez
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
        <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
          Visitez
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
      </div>
    </a>
  );
};

export default Visitez;
