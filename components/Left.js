import styles from "../styles/Home.module.css";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef } from "react";
import { useTheme } from "../ThemeContext";
function Left() {
  const { isDarkMode } = useTheme();
  const hiRef = useRef(null);
  const nameRef = useRef(null);
  const imRef = useRef(null);
  const fullstackRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      hiRef.current,
      { opacity: 0, y: 100, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: 200, immediateRender: true, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      imRef.current,
      { opacity: 0, y: 100, immediateRender: true, visibility: "hidden" },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.8,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    const letters = fullstackRef.current.children;

    gsap.fromTo(
      letters,
      {
        opacity: 0,
        y: 100,
        scale: 50,

        visibility: "hidden",
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
        stagger: 0.05,
        rotation: 360,
        scale: 100,
        delay: 1.3,
        visibility: "visible",
      }
    );
    gsap.fromTo(
      textRef.current,
      { opacity: 0, blur: 50, visibility: "hidden" },
      {
        opacity: 1,
        blur: 0,
        duration: 3.5,
        delay: 2.3,
        ease: "power3.out",
        visibility: "visible",
      }
    );
    gsap.fromTo(
      btnRef.current,
      { opacity: 0 },
      {
        opacity: 1,

        duration: 3.5,
        delay: 2.3,
        ease: "power3.out",
      }
    );
  }, []);
  const bassShotRef = useRef(null);
  const bassShot2Ref = useRef(null);
  const playShot = () => {
    if (bassShotRef.current) {
      bassShotRef.current.currentTime = 0;
      bassShotRef.current.volume = 0.4;
      bassShotRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  const playShot2 = () => {
    if (bassShot2Ref.current) {
      bassShot2Ref.current.currentTime = 0;
      bassShot2Ref.current.volume = 0.4;
      bassShot2Ref.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  return (
    <div className="  w-full text-white h-full flex flex-col items-start justify-center    ">
      <div className=" sm:pl-0 w-fit">
        <audio ref={bassShotRef} src="/bassshot.wav"></audio>
        <audio ref={bassShot2Ref} src="/bassshot2.wav"></audio>
        <div className="overflow-hidden ">
          {" "}
          <div
            ref={hiRef}
            className={` opacity-0 invisible  text-lg 2xl:text-2xl xl:text-lg lg:text-lg md-text-md sm-text-sm font-source font-light   mb-3 ${
              isDarkMode ? "text-white " : "text-zinc-700"
            }`}
          >
            Hi, my name is
          </div>
        </div>
        <div className="flex items-end">
          <div
            ref={nameRef}
            className={` invisible z-20 flex items-end text-4xl 2xl:text-6xl xl-text-5xl lg:text-4xl md:text-5xl sm:text-4xl font-Noehmi font-semi-bold   ${
              isDarkMode ? "text-violet-300 " : "text-violet-900"
            }`}
          >
            Valentin Mor{" "}
          </div>
          <div className="overflow-hidden">
            <div
              ref={imRef}
              className={`invisible z-20 lg:ml-6 2xl:mb-2 xl:mb-1 md:mb-0 mb-1 ml-4 text-lg 2xl:text-2xl xl:text-xl lg:text-lg md-text-m sm-text-sm font-source font-light ${
                isDarkMode ? "text-white " : "text-zinc-700"
              }`}
            >
              {" "}
              I'm a{" "}
            </div>
          </div>
        </div>

        <div
          ref={fullstackRef}
          className="  z-20 bg-transparent mt-4 font-bold font-Noehmi text-5xl 2xl:text-7xl xl-text-6xl lg:text-6xl md:text-5xl sm:text-5xl"
        >
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>F</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>u</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>l</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>l</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>-</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>S</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>t</span>
          <span className={`${isDarkMode ? styles.A : styles.ALight}`}>a</span>
          <span className={`${isDarkMode ? styles.C : styles.CLight}`}>c</span>
          <span className={`${isDarkMode ? styles.K : styles.KLight}`}>k</span>
          <span className={styles.A}> </span>
          <span className={`${isDarkMode ? styles.D : styles.DLight}`}>D</span>
          <span className={`${isDarkMode ? styles.e : styles.eLight}`}>e</span>
          <span className={`${isDarkMode ? styles.v : styles.vLight}`}>v</span>
          <span className={`${isDarkMode ? styles.ee : styles.eeLight}`}>
            e
          </span>
          <span className={`${isDarkMode ? styles.l : styles.lLight}`}>l</span>
          <span className={`${isDarkMode ? styles.o : styles.oLight}`}>o</span>
          <span className={`${isDarkMode ? styles.p : styles.pLight}`}>p</span>
          <span className={`${isDarkMode ? styles.eee : styles.eeeLight}`}>
            e
          </span>
          <span className={`${isDarkMode ? styles.r : styles.rLight}`}>r</span>
        </div>
      </div>

      <div
        ref={textRef}
        className={` font-Satoshi font-normal invisible flex-col flex z-10 2xl:mt-15 xl:mt-15 lg:mt-10 mt-5 text-md  lg:text-md 2xl:text-lg  shadow-xl bg-opacity-20 p-3 rounded-xl  md:w-fit w-4/5  ${
          isDarkMode ? "text-white shadow-2xl" : "text-zinc-700 shadow-2xl"
        }`}
      >
        {" "}
        <span>
          Je suis un développeur{" "}
          <span
            className={`  ${
              isDarkMode ? "text-violet-300" : "text-violet-900"
            }`}
          >
            Next
          </span>{" "}
          &{" "}
          <span
            className={`  ${
              isDarkMode ? "text-violet-300" : "text-violet-900"
            }`}
          >
            Node.js
          </span>{" "}
          basé à <b>Montpellier.</b>
        </span>
        <span className="mt-2">
          Je design et code vos futures applications{" "}
          <span
            className={`  ${
              isDarkMode ? "text-violet-300" : "text-violet-900"
            }`}
          >
            Web
          </span>{" "}
          &{" "}
          <span
            className={`  ${
              isDarkMode ? "text-violet-300" : "text-violet-900"
            }`}
          >
            Mobile
          </span>
          .
        </span>
      </div>
      <div
        ref={btnRef}
        className="mt-5 opacity-0 font-Satoshi font-thin lg:mt-12 flex flex-col lg:flex-row  sm:pl-0 "
      >
        <a href="/MOR-VALENTIN-CV-2024.pdf" download onMouseEnter={playShot}>
          <div
            className={` group border-1  border-opacity-50  py-2 px-4 rounded-lg flex  justify-center  items-center cursor-pointer transition-all  w-fit relative duration-300 overflow-hidden ${
              isDarkMode
                ? "text-white border-zinc-200 hover:border-violet-300 "
                : "text-zinc-900 border-zinc-900 hover:border-violet-900  "
            }`}
          >
            <span className="hover-group: group-hover:text-violet-300  opacity-0 translate-  2xl:text-lg lg:text-base text-sm  ">
              Télécharger un CV
              <FontAwesomeIcon className="ml-3" icon={faDownload} />
            </span>
            <span className=" 2xl:text-lg lg:text-base text-sm  transition-all group-hover:text-violet-300 duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
              Télécharger un CV
              <FontAwesomeIcon className="ml-3" icon={faDownload} />
            </span>
            <span
              className={`transition-all  2xl:text-lg lg:text-base text-sm   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20 ${
                isDarkMode
                  ? "group-hover:text-violet-300"
                  : "group-hover:text-violet-900"
              }`}
            >
              Télécharger un CV
              <FontAwesomeIcon className="ml-3" icon={faDownload} />
            </span>
          </div>
        </a>
        <a
          href="mailto:valentinmor.pro@gmail.com"
          className="lg:ml-10 mt-5 lg:mt-0"
          onMouseEnter={playShot2}
        >
          <div
            className={` group border-1  border-opacity-50  py-2 px-4 rounded-lg flex  justify-center  items-center cursor-pointer transition-all  w-fit relative duration-300 overflow-hidden  ${
              isDarkMode
                ? "text-white border-zinc-200 hover:border-violet-300"
                : "text-zinc-900 border-zinc-900 hover:border-violet-900"
            }`}
          >
            <span className="hover-group: 2xl:text-lg lg:text-base text-sm hover:text-sky-600  opacity-0 translate-">
              Contactez moi !
              <FontAwesomeIcon className="ml-3" icon={faEnvelope} />
            </span>
            <span
              className={`transition-all 2xl:text-lg lg:text-base text-sm   duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20 ${
                isDarkMode
                  ? "group-hover:text-violet-300"
                  : "group-hover:text-violet-900"
              }`}
            >
              Contactez moi !
              <FontAwesomeIcon className="ml-3" icon={faEnvelope} />
            </span>
            <span
              className={`transition-all  2xl:text-lg lg:text-base text-sm   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20 ${
                isDarkMode
                  ? "group-hover:text-violet-300"
                  : "group-hover:text-violet-900"
              }`}
            >
              Contactez moi !
              <FontAwesomeIcon className="ml-3" icon={faEnvelope} />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Left;
