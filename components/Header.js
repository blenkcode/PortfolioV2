import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Time from "./Time";
import { useRef } from "react";
import { useRouter } from "next/router";
import { useMainRef } from "../MainRefContext";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "../ThemeContext";
function Header() {
  const { isDarkMode } = useTheme();
  const { mainRefValue } = useMainRef();
  const hoverSoundRef = useRef(null);
  const clickSoundRef = useRef(null);
  const bassRef = useRef(null);
  const router = useRouter();
  const swooshRef = useRef(null);
  const playbassSound = () => {
    if (clickSoundRef.current) {
      bassRef.current.currentTime = 0;
      bassRef.current.volume = 0.8;
      bassRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  const handleProject = () => {
    playbassSound();
    if (mainRefValue) {
      const mainRect = mainRefValue.getBoundingClientRect();

      const scrollPosition =
        mainRect.top + window.scrollY + mainRect.height * 0.5;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  const playSwooshSound = () => {
    if (swooshRef.current) {
      swooshRef.current.currentTime = 0;
      swooshRef.current.volume = 0.4;
      swooshRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  const playHoverSound = () => {
    if (hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.volume = 0.4;
      hoverSoundRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };

  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.3;
      clickSoundRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };

  const handlerouter = () => {
    router.push("/");

    if (scrollY >= 1) {
      playbassSound();
    } else {
      playClickSound();
    }
  };
  return (
    <div className="lg:fixed absolute md:top-7 top-4 left-0 w-full h-auto bg-transparent items-center z-50 ">
      <div className="flex lg:px-7 px-2 w-full justify-between  items-center  ">
        <audio ref={bassRef} src="/reversebass.wav"></audio>
        <audio ref={hoverSoundRef} src="/interface1.wav"></audio>
        <audio ref={clickSoundRef} src="/click1.wav"></audio>

        <audio ref={swooshRef} src="/swoosh.wav"></audio>
        <div className="flex w-fit z-50">
          <div
            onClick={handlerouter}
            onMouseEnter={playHoverSound}
            className={`sm:mr-20 lg:mr-5 xl:mr-20  w-fit  font-Satoshi cursor-pointer font-thin relative group ${
              isDarkMode ? "text-zinc-200 " : "text-zinc-800"
            }`}
          >
            <span className="opacity-0">V</span>
            <span className="opacity-0">V</span>
            <span className="opacity-0">V</span>
            <span className="opacity-0">V</span>
            <span className="opacity-0">/</span>
            <span className="opacity-0">M</span>
            <div className="-translate-y-6 translate-x-6">
              <span className="absolute font-bold -translate-x-4 group-hover:-translate-x-1 transition-all duration-200 2xl:text-base lg:text-sm">
                V
              </span>
              <span
                className={`absolute font-thin  group-hover:opacity-0 transition-all duration-200 2xl:text-base lg:text-sm ${
                  isDarkMode ? "text-zinc-300 " : "text-zinc-800"
                }`}
              >
                /
              </span>
              <span className="absolute font-semibold translate-x-3 2xl:text-base lg:text-sm">
                M
              </span>
            </div>
          </div>
          <div className="invisible md:visible md:relative absolute -translatey-full lg:-translate-y-0">
            {" "}
            <Time></Time>
          </div>
        </div>
        <div
          className={`flex font-source items-center justify-end w-fit text-zinc-100 ${
            isDarkMode ? "text-zinc-200 " : "text-zinc-800"
          }`}
        >
          <ThemeSwitcher></ThemeSwitcher>
          <div
            onMouseEnter={playSwooshSound}
            onClick={handleProject}
            className="font-Satoshi font-thin group cursor-pointer "
          >
            <div className="relative 2xl:text-base lg:text-sm">
              <span className="mr-2">/</span>PROJECTS
              <div className="h-1 w-0 translate-y-1 bg-zinc-200 group-hover:w-full transition-all duration-200  rounded-full"></div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/in/valentin-mor-a03174114/"
            target="_blank"
            className="lg:mr-12 lg:ml-12 mr-2 ml-5"
          >
            <FontAwesomeIcon
              className={`text-xl 2xl:text-2xl lg:text-xl  transition duration-200 ease-in-out hover:text-violet-400 ${
                isDarkMode ? "text-zinc-200 " : "text-zinc-800"
              }`}
              icon={faLinkedin}
            />
          </a>
          <a target="_blank" href="https://github.com/blenkcode">
            <FontAwesomeIcon
              className={`text-xl 2xl:text-2xl lg:text-xl mr-5 lg:mr-6 ml-3 lg:ml-0  transition duration-200 ease-in-out hover:text-violet-400 ${
                isDarkMode ? "text-zinc-200 " : "text-zinc-800"
              }`}
              icon={faGithub}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
