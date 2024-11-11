"use client";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Time from "./Time";
import gsap from "gsap";
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
    if (router.pathname === "/") {
      // Si l'URL actuelle est déjà "/"
      window.scrollTo({ top: 0, behavior: "auto" }); // Remonte en haut de la page
    } else {
      // Si l'URL n'est pas "/"
      router.push("/"); // Redirige vers "/"
    }

    // Détection du scroll pour jouer les sons
    if (window.scrollY >= 1) {
      playbassSound();
    } else {
      playClickSound();
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: "-200%" },
      {
        y: 0,

        duration: 1.2,
        delay: 6.6,
        ease: "power1.out",
      }
    );
  }, []);
  return (
    <div
      ref={headerRef}
      className="absolute md:top-7 lg:text-base text-sm top-4 left-0 w-full h-auto bg-transparent items-center z-50 "
    >
      <div className="flex lg:px-7 px-2 w-full justify-between  items-center  ">
        <audio ref={bassRef} src="/reversebass.wav"></audio>
        <audio ref={hoverSoundRef} src="/interface1.wav"></audio>
        <audio ref={clickSoundRef} src="/click1.wav"></audio>

        <audio ref={swooshRef} src="/swoosh.wav"></audio>
        <div className="flex w-fit z-50">
          <div
            onClick={handlerouter}
            onMouseEnter={playHoverSound}
            className={`sm:mr-20 lg:mr-5 xl:mr-20  w-fit  font-Satoshi cursor-pointer relative group ${
              isDarkMode ? "text-neutral-800 " : "text-zinc-800"
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
                className={`absolute   group-hover:opacity-0 transition-all duration-200 2xl:text-base lg:text-sm ${
                  isDarkMode ? "text-zinc-900 " : "text-zinc-800"
                }`}
              >
                /
              </span>
              <span className="absolute font-bold translate-x-3 2xl:text-base lg:text-sm">
                M
              </span>
            </div>
          </div>
        </div>

        <div
          className={`flex  items-center justify-end w-fit lg:max-w-none max-w-36 text-zinc-100 ${
            isDarkMode ? "text-zinc-900 " : "text-zinc-800"
          }`}
        >
          {" "}
          <div className=" md:relative absolute -translatey-full lg:-translate-y-0">
            {" "}
            <Time></Time>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
