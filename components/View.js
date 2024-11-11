import React from "react";
import { useTheme } from "../ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const View = ({ link }) => {
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
      className=" mt-5 z-50  "
      onMouseEnter={playClickSound}
    >
      {" "}
      <audio ref={clickSoundRef} src="/click1.wav"></audio>
      <div
        className={`group border-1 py-2 px-4  flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative overflow-hidden text-neutral-800  border-neutral-800`}
      >
        <span className="hover-group:text-stone-200  opacity-0 translate-">
          PROJECT
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
        <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
          PROJECT
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
        <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
          PROJECT
          <FontAwesomeIcon className="ml-3 -rotate-45" icon={faArrowRight} />
        </span>
      </div>
    </a>
  );
};

export default View;
