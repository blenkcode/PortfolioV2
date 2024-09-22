import Language from "./Language";

import styles from "../styles/Home.module.css";
import Header from "./Header";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import { gsap } from "gsap";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";

function Left() {
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const imRef = useRef(null);
  const fullstackRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      hiRef.current,
      { opacity: 0, y: 100, visibility: "hidden" }, // État initial : invisible et déplacé
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        visibility: "visible",
      } // État final : visible et déplacé vers sa position initiale
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: 200, immediateRender: true, visibility: "hidden" }, // État initial : invisible et déplacé
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 1.2,
        ease: "power3.out",
        visibility: "visible",
      } // État final : visible et déplacé vers sa position initiale
    );
    gsap.fromTo(
      imRef.current,
      { opacity: 0, y: 100, immediateRender: true, visibility: "hidden" }, // État initial : invisible et déplacé
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.7,
        ease: "power3.out",
        visibility: "visible",
      } // Éta État final : visible et déplacé vers sa position initiale
    );
    const letters = fullstackRef.current.children;

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 100,
        scale: 50,

        visibility: "hidden", // Démarre 50px en dessous
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.045, // Décalage entre chaque lettre
        rotation: 360,
        scale: 100,
        delay: 2.4,
        visibility: "visible", // Rotation de chaque lettre
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, blur: 50, visibility: "hidden" }, // État initial : invisible et déplacé
      {
        opacity: 1,
        blur: 0,
        duration: 1.8,
        delay: 3.5,
        ease: "power3.out",
        visibility: "visible",
      } // Éta État final : visible et déplacé vers sa position initiale
    );
    gsap.fromTo(
      btnRef.current,
      { opacity: 0 }, // État initial : invisible et déplacé
      {
        opacity: 1,

        duration: 1.8,
        delay: 3.5,
        ease: "power3.out",
      } // Éta État final : visible et déplacé vers sa position initiale
    );
  }, []);

  return (
    <div className=" 2xl:pb-48  pt-36 w-full h-auto flex flex-col items-center justify-center pl-0 2xl:pl-48 xl:pl-40 lg:pl-36 md:pl-36 sm:pl-32  ">
      <div className="text-white   ">
        <div className="pl-10 sm:pl-0">
          <div className="overflow-hidden">
            {" "}
            <div
              ref={hiRef}
              className=" opacity-0 invisible z-20 text-xl 2xl:text-2xl xl:text-xl lg:text-lg md-text-m sm-text-sm text-white font-source font-light   mb-3"
            >
              Hi, my name is
            </div>
          </div>
          <div className="flex items-end">
            <div
              ref={nameRef}
              className="  invisible z-20 flex items-end text-4xl 2xl:text-6xl xl-text-6xl lg:text-5xl md:text-5xl sm:text-4xl   font-semi-bold text-purple-200  00"
            >
              Valentin Mor{" "}
            </div>
            <div className="overflow-hidden">
              <div
                ref={imRef}
                className=" invisible z-20 lg:ml-6 ml-4 text-xl 2xl:text-2xl xl:text-xl lg:text-lg md-text-m sm-text-sm font-source font-light text-white"
              >
                {" "}
                I'm a{" "}
              </div>
            </div>
          </div>

          <div
            ref={fullstackRef}
            className="  z-20 bg-transparent mt-3 font-bold text-5xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl"
          >
            <span className={styles.A}>F</span>
            <span className={styles.A}>U</span>
            <span className={styles.A}>L</span>
            <span className={styles.A}>L</span>
            <span className={styles.A}>-</span>
            <span className={styles.A}>S</span>
            <span className={styles.A}>T</span>
            <span className={styles.A}>A</span>
            <span className={styles.C}>C</span>
            <span className={styles.K}>K</span>
            <span className={styles.A}> </span>
            <span className={styles.D}>D</span>
            <span className={styles.e}>e</span>
            <span className={styles.v}>v</span>
            <span className={styles.ee}>e</span>
            <span className={styles.l}>l</span>
            <span className={styles.o}>o</span>
            <span className={styles.p}>p</span>
            <span className={styles.eee}>e</span>
            <span className={styles.r}>r</span>
          </div>
        </div>

        <div
          ref={textRef}
          className=" font-hind invisible  z-10 mt-20 text-xl 2xl:w-7/12 pl-10 sm:pl-0 lg:w-9/12 sm:w-7/12 w-4/5"
        >
          {" "}
          Je suis un développeur <span className="text-violet-400">
            React
          </span>{" "}
          et <span className="text-violet-400">Node.js</span> basé à{" "}
          <b>Montpellier.</b>
          <br></br>
          <br></br>
          Passionné par la <b>création</b> d'interfaces utilisateurs et
          d'architecture back-end, je réalise vos futures applications web!
        </div>
        <div
          ref={btnRef}
          className="mt-16 opacity-0 font-hind sm:mt-28 flex flex-col lg:flex-row pl-10 sm:pl-0"
        >
          <div className="transition-all duration-1000 delay-3000 mb-10 lg:mb-0">
            <a
              href="/VALENTIN-MOR-CV-2024.pdf"
              download
              className="border-zinc-300 mr-10 transition-all w-fit ease-in-out border-solid border-1 border-opacity-20 rounded-md px-5 py-3 hover:border-opacity-40 hover:border-violet-400 hover:text-violet-400"
            >
              Télécharger un CV
              <FontAwesomeIcon className="ml-3" icon={faDownload} />
            </a>
          </div>
          <div className="transition-all duration-1000 delay-3000 mb-10 lg:mb-0 ">
            <a
              href="mailto:valentinmor.pro@gmail.com?subject=Demande%20d'information"
              className="border-zinc-300 mr-10 transition-all w-fit ease-in-out border-solid border-1 border-opacity-20 rounded-md px-5 py-3 hover:border-opacity-40 hover:border-violet-400 hover:text-violet-400"
            >
              Contactez moi !
              <FontAwesomeIcon className="ml-3" icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Left;
