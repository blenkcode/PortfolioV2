import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap/dist/gsap";
import { useTheme } from "../ThemeContext";

import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
const Portfoliov2 = React.forwardRef(({ mainRef }) => {
  const lcdoRef = useRef(null);
  const [lcdo, setLcdo] = useState(false);
  const [sante, setSante] = useState(false);
  const [mutable, setMutable] = useState(false);
  const [heaf, setHeaf] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setLcdo(true);
    gsap.registerPlugin(ScrollTrigger);
    if (screenWidth > 1000) {
      gsap.fromTo(
        lcdoRef.current,
        { y: "5%" },
        {
          y: "-110%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "55%", // Déclenchement au centre de l'écran
            end: "100%", // Fin de l'animation quand le bas atteint le haut
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress * 100; // Progrès du scroll en pourcentage
              // console.log(`Progress: ${progress}%`); // Debug
              if (screenWidth > 1000) {
                if (progress < 11) {
                  setLcdo(true);
                } else {
                  setLcdo(false);
                }
                if (progress >= 11 && progress < 25) {
                  setSante(true);
                } else {
                  setSante(false);
                }
                if (progress >= 25 && progress < 42) {
                  setHeaf(true);
                } else {
                  setHeaf(false);
                }
                if (progress >= 42 && progress <= 100) {
                  setMutable(true);
                } else {
                  setMutable(false);
                }
              } else {
                setLcdo(false);
              }
            },
          },
        }
      );
    }
  }, []);

  const { isDarkMode } = useTheme();

  useEffect(() => {
    playShot();
    console.log("sound");
  }, [heaf, sante]);
  useEffect(() => {
    playShot2();
    console.log("sound");
  }, [mutable, sante]);

  const bassShotRef = useRef(null);
  const bassShot2Ref = useRef(null);
  const playShot = () => {
    if (bassShotRef.current) {
      // Revenir au début du son pour qu'il se rejoue à chaque hover
      bassShotRef.current.currentTime = 0;

      // Régler le volume
      bassShotRef.current.volume = 0.2;

      // Tenter de jouer le son avec gestion des erreurs
      bassShotRef.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };
  const playShot2 = () => {
    if (bassShot2Ref.current) {
      // Revenir au début du son pour qu'il se rejoue à chaque hover
      bassShot2Ref.current.currentTime = 0;

      // Régler le volume
      bassShot2Ref.current.volume = 0.5;

      // Tenter de jouer le son avec gestion des erreurs
      bassShot2Ref.current.play().catch((error) => {
        console.log("Erreur lors de la lecture de l'audio :", error);
      });
    }
  };

  const handleproject = () => {
    router.push("/lcdo");
  };
  const handleheaf = () => {
    router.push("/heaf");
  };
  const handlemutable = () => {
    router.push("/mutable");
  };
  const handlecarby = () => {
    router.push("/kine");
  };

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
    <div className="w-full lg:fixed h-full  lg:mt-0   ">
      <audio ref={clickSoundRef} src="/click1.wav"></audio>
      <audio ref={bassShotRef} src="/bassshot.wav"></audio>
      <audio ref={bassShot2Ref} src="/bassshot2.wav"></audio>
      <div className="flex w-full h-full items-end justify-between lg:pl-0 pl-10 ">
        <div className="lg:w-1/4 lg:h-2/3 w-0 h-0 lg:visible invisible ">
          <div
            className={`lg:visible invisible     flex items-center justify-start  flex-col text-base  shadow-2xl text-zinc font-Satoshi font-thin   ${
              isDarkMode ? "text-zinc-200" : "text-zinc-800"
            }`}
          >
            <span
              className={`mb-1 mt-10 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl ${
                lcdo ? "opacity-100 lg:visible" : "opacity-0 invisible"
              }`}
            >
              <div className="mb-2">En développement Alpha.</div>
              <div className="mb-2">
                Site Vitrine / Web Application pour le Festival LCDO
              </div>
              <div className="mb-2">
                Interface administrateur / Vitrine / Shop / Line-Up.
              </div>
              <div>
                <u>Technologies utilisées :</u> React, Next.js, Redux, MongoDB,
                Tailwind CSS, Node.js, Express.
              </div>
            </span>
            <span
              className={`mb-1 mt-8 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
                sante ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="mb-2">
                Situé à Marseillan dans l'Hérault ce cabinet d'ostéopathie et
                kinésithérapie propose différents services, analyse de course,
                bike fiting, et massages.
              </div>
              <div>
                <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind
                CSS, Gsap.
              </div>
            </span>
            <span
              className={`mb-1 fixed mt-12 xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
                heaf ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="mb-2">
                Web-application de santé, accompagnement et conseil
                nutritionels.
              </div>
              <div className="mb-2">
                Perdre du poids, prendre du muscle, se maintenir en forme.
              </div>
              <div>
                <u>Technologies utilisées :</u> Javascript, React, Chart.js
                Next.js Redux, MongoDB, Tailwind CSS, Spline, Express, Node.js.
              </div>
            </span>
            <span
              className={`mb-1 mt-20 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
                mutable ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="mb-2">Site marchand en produits de musique.</div>
              <div className="mb-2">
                La compagnie Française Mutable Instruments est spécialisée dans
                la production de module de synthèse audio.
                <br></br> Page d'acceuil, magasin et possibilité de stocker des
                articles en favoris.
              </div>
              <div className="mt-2">
                <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind
                CSS.
              </div>
            </span>
          </div>
        </div>
        <div className="w-fit lg:h-2/3 ">
          <div
            ref={lcdoRef}
            className="flex items-center flex-col justify-center  "
          >
            <div
              onClick={() => handleproject()}
              className="relative group w-full  lg:w-2/5 "
            >
              <div
                className={` z-40   rounded-md  p-2 transform transition-all duration-300 ${
                  lcdo
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } ${isDarkMode ? "bg-white" : "bg-zinc-900"}`}
              >
                {" "}
                <img
                  src="./lcdo1.webp"
                  alt="LCDO"
                  className=" rounded-md "
                />{" "}
              </div>
            </div>
            <div
              onClick={() => handlecarby()}
              className="relative group lg:w-2/5 w-full  mt-10 "
            >
              <div
                className={` z-40   rounded-md  p-2  transform transition-all duration-300 ${
                  sante
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } ${isDarkMode ? "bg-white" : "bg-zinc-900"}`}
              >
                {" "}
                <img
                  src="./sante1.webp"
                  alt="Cabinet Kinesithérapie"
                  className=" rounded-md "
                />{" "}
              </div>
            </div>
            <div
              onClick={() => handleheaf()}
              className="relative group lg:w-2/5 w-full   mt-10 "
            >
              <div
                className={` z-40   rounded-md  p-2 transform transition-all duration-300 ${
                  heaf
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } ${isDarkMode ? "bg-white" : "bg-zinc-900"}`}
              >
                {" "}
                <img src="./newh1.png" alt="Heaf" className="rounded-md" />{" "}
              </div>
            </div>
            <div
              onClick={() => handlemutable()}
              className="relative group lg:w-2/5 w-full   mt-10 "
            >
              <div
                className={` z-40   rounded-md  p-2  transform transition-all duration-300 ${
                  mutable
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } ${isDarkMode ? "bg-white" : "bg-zinc-900"}`}
              >
                {" "}
                <img
                  src="./mutable.webp"
                  alt="Cabinet Kinesithérapie"
                  className="rounded-md"
                />{" "}
              </div>
            </div>
          </div>
        </div>

        <div
          className={`lg:w-1/4 w-0 lg:h-2/3 lg:visible invisible h-0 text-zinc-200 font-Satoshi font-thin flex flex-col items-end pr-12 z-50 relative ${
            isDarkMode ? "text-zinc-200" : "text-zinc-800"
          }`}
        >
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity  flex flex-col items-end ${
              lcdo ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5 ">Le Chant des Oiseaux</div>
            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <a
              href="https://lcdo-three.vercel.app/"
              target="_blank"
              className=" mt-5   "
              onMouseEnter={playClickSound}
            >
              <div
                className={`group border hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden ${
                  isDarkMode
                    ? "border-zinc-200 text-white  "
                    : "border-zinc-900 text-zinc-900 "
                }`}
              >
                <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
              </div>
            </a>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity  flex flex-col items-end ${
              sante ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Sport-Santé Méditerranée</div>

            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <a
              href="https://sport-sante-mediterranee.vercel.app/"
              target="_blank"
              className=" mt-5   "
              onMouseEnter={playClickSound}
            >
              <div
                className={`group border hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden ${
                  isDarkMode
                    ? "border-zinc-200 text-white  "
                    : "border-zinc-900 text-zinc-900 "
                }`}
              >
                <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
              </div>
            </a>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity flex flex-col items-end ${
              heaf ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Heaf</div>
            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <a
              href="https://heaf-front-end.vercel.app/"
              target="_blank"
              className=" mt-5   "
              onMouseEnter={playClickSound}
            >
              <div
                className={`group border hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden ${
                  isDarkMode
                    ? "border-zinc-200 text-white  "
                    : "border-zinc-900 text-zinc-900 "
                }`}
              >
                <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
              </div>
            </a>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity  flex flex-col items-end ${
              mutable ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Mutable Instruments</div>
            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <a
              href="https://mutable-instruments-shop.vercel.app/"
              target="_blank"
              className=" mt-5   "
              onMouseEnter={playClickSound}
            >
              <div
                className={`group border hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden ${
                  isDarkMode
                    ? "border-zinc-200 text-white  "
                    : "border-zinc-900 text-zinc-900 "
                }`}
              >
                <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
                <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                  Visitez
                  <FontAwesomeIcon
                    className="ml-3 -rotate-45"
                    icon={faArrowRight}
                  />
                </span>
              </div>
            </a>
          </div>
          <div className="absolute bottom-10 flex items-center justify-center   right-10  ">
            <div
              className={` h-32 w-32 border-2 border-solid  rounded-full flex items-start transition-all  justify-center relative overflow-hidden ${
                isDarkMode ? "border-zinc-500" : "border-zinc-800"
              } `}
            >
              <div className="flex items-start absolute top-1/2 right-1/2 translate-x-1/2 justify-center -translate-y-1/2 ">
                <div className="text-3xl flex items-center justify-center -translate-x-3 -translate-y-6 w-10 h-10 -rotate-45 overflow-hidden">
                  <div
                    className={`absolute rotate-45 transition-all duration-500 ${
                      lcdo ? "-translate-y-0" : "-translate-y-full"
                    }`}
                  >
                    1
                  </div>
                  <div
                    className={`absolute rotate-45 transition-all duration-500 ${
                      sante ? "-translate-y-0" : "translate-y-full"
                    }`}
                  >
                    2
                  </div>
                  <div
                    className={`absolute rotate-45 transition-all duration-500 ${
                      heaf ? "-translate-y-0" : "-translate-y-full"
                    }`}
                  >
                    3
                  </div>
                  <div
                    className={`absolute rotate-45 transition-all duration-500 ${
                      mutable ? "-translate-y-0" : "translate-y-full"
                    }`}
                  >
                    4
                  </div>
                </div>
                <div className="text-3xl translate-x-1 translate-y-5">4</div>
                <div
                  className={`h-1 w-2/3 absolute transition-all  translate-y-5 -rotate-45 ${
                    isDarkMode ? "bg-zinc-500" : "bg-zinc-800"
                  } `}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Portfoliov2;
