"use client";
import React, { useEffect, useRef } from "react";

import Time from "./Time";
import gsap from "gsap";
import { useRouter } from "next/router";
import AnimatedButton from "./ModularButton";
function Header() {
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
        // delay: 6.6,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div
      ref={headerRef}
      className="absolute md:top-7 font-Satoshi font-thin invisible   lg:text-base text-sm top-4 left-0 w-full h-auto flex items-start justify-start  z-50 text-neutral-200 "
    >
      {/* <div className="flex lg:px-7 px-2 w-full justify-between  items-center  ">
        <div className="font-thin font-Satoshi    w-fit  transition-all text-[1vw] duration-200">
          {" "}
         
        </div>{" "}
      </div> */}
      <div className=" w-fit flex space-x-[3vw] ml-[5vw] text-[1.3vw]">
        <span>
          {" "}
          <AnimatedButton text="home" />
        </span>
        <span>
          {" "}
          <AnimatedButton text="about" />
        </span>
        <span>
          {" "}
          <AnimatedButton text="contact" />
        </span>
      </div>
    </div>
  );
}

export default Header;
