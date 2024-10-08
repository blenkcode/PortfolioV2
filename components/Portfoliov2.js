import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { useTheme } from "../ThemeContext";
import MenuSlider from "./MenuSlider";
import { useRouter } from "next/router";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Visitez from "./Visitez";
import PortfolioCounter from "./PortfolioCounter";
const Portfoliov2 = React.forwardRef(({ mainRef }) => {
  const lcdoRef = useRef(null);
  const [lcdo, setLcdo] = useState(false);
  const [sante, setSante] = useState(false);
  const [mutable, setMutable] = useState(false);
  const [heaf, setHeaf] = useState(false);
  const router = useRouter();
  const { isDarkMode } = useTheme();
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
            start: "45%", // Déclenchement au centre de l'écran
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
  const data = [
    {
      infos1: "Site Vitrine / Web Application pour le Festival LCDO",
      infos2: " Interface administrateur / Vitrine / Shop / Line-Up.",
      techno: "React, Next.js, Redux, MongoDB, Tailwind CSS, Node.js, Express.",
      link: "https://lcdo-three.vercel.app/",
    },
    {
      infos1:
        "Situé à Marseillan dans l'Hérault ce cabinet d'ostéopathie et kinésithérapie propose différents services, analyse de course, bike fiting, et massages.",
      infos2: " ",
      techno: "React, Next.js, Redux, Tailwind CSS, Gsap.",
      link: "https://sport-sante-mediterranee.vercel.app/",
    },
    {
      infos1:
        " Web-application de santé, accompagnement et conseil nutritionels.",
      infos2: "Perdre du poids, prendre du muscle, se maintenir en forme.",
      techno:
        "Javascript, React, Chart.js Next.js Redux, MongoDB, Tailwind CSS, Spline, Express, Node.js.",
      link: "https://heaf-front-end.vercel.app/",
    },
    {
      infos1: "Site marchand en produits de musique.",
      infos2:
        "  La compagnie Française Mutable Instruments est spécialisée dans la production de module de synthèse audio, page d'acceuil, magasin et possibilité de stocker des articles en favoris.",
      techno: "React, Next.js, Redux, Tailwind CSS",
      link: "https://mutable-instruments-shop.vercel.app/",
    },
  ];
  return (
    <div className="w-full lg:fixed h-full  lg:mt-0  mt-3 ">
      <audio ref={clickSoundRef} src="/click1.wav"></audio>
      <audio ref={bassShotRef} src="/bassshot.wav"></audio>
      <audio ref={bassShot2Ref} src="/bassshot2.wav"></audio>
      <div className="flex w-full h-full items-end justify-between lg:pl-0 pl-10 ">
        <div className="lg:w-1/4 lg:h-2/3 w-0 h-0 lg:visible invisible  ">
          <div
            className={`lg:visible invisible  h-full  flex items-center justify-start  flex-col text-base   text-zinc font-Satoshi font-thin   ${
              isDarkMode ? "text-zinc-200" : "text-zinc-800"
            }`}
          >
            <div
              className={` fixed left-10 top-1/2 -translate-y-14 ${
                lcdo ? "opacity-100 lg:visible" : "opacity-0 invisible"
              }`}
            >
              <MenuSlider
                infos1={data[0].infos1}
                infos2={data[0].infos2}
                techno={data[0].techno}
              ></MenuSlider>
            </div>
            <div
              className={` fixed left-10 top-1/2 -translate-y-14 ${
                sante ? "opacity-100 lg:visible" : "opacity-0 invisible"
              }`}
            >
              <MenuSlider
                infos1={data[1].infos1}
                infos2={data[1].infos2}
                techno={data[1].techno}
              ></MenuSlider>
            </div>
            <div
              className={` fixed left-10 top-1/2 -translate-y-14 ${
                heaf ? "opacity-100 lg:visible" : "opacity-0 invisible"
              }`}
            >
              <MenuSlider
                infos1={data[2].infos1}
                infos2={data[2].infos2}
                techno={data[2].techno}
              ></MenuSlider>
            </div>
            <div
              className={` fixed left-10 top-1/2 -translate-y-14 ${
                mutable ? "opacity-100 lg:visible" : "opacity-0 invisible"
              }`}
            >
              <MenuSlider
                infos1={data[3].infos1}
                infos2={data[3].infos2}
                techno={data[3].techno}
              ></MenuSlider>
            </div>
          </div>
        </div>
        <div className="w-fit lg:h-2/3 ">
          <div
            ref={lcdoRef}
            className="flex items-center flex-col justify-center  "
          >
            <div
              onClick={() => handleproject()}
              className="relative group w-full  lg:w-1/2 shadow-xl"
            >
              <div
                className={` z-40   rounded-md   transform transition-all duration-300 ${
                  lcdo
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } `}
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
              className="relative group  lg:w-1/2  w-full shadow-xl mt-10 "
            >
              <div
                className={` z-40   rounded-md   transform transition-all duration-300 ${
                  sante
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } `}
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
              className="relative group  lg:w-1/2  w-full shadow-xl  mt-10 "
            >
              <div
                className={` z-40   rounded-md   transform transition-all duration-300 ${
                  heaf
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } `}
              >
                {" "}
                <img src="./newh1.png" alt="Heaf" className="rounded-md" />{" "}
              </div>
            </div>
            <div
              onClick={() => handlemutable()}
              className="relative group  lg:w-1/2  w-full  shadow-xl mt-10 "
            >
              <div
                className={` z-40   rounded-md    transform transition-all duration-300 ${
                  mutable
                    ? "opacity-100  scale-105 "
                    : "lg:opacity-15 lg:scale-100  opacity-100  scale-105 "
                } `}
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
            <Visitez link={data[0].link}></Visitez>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity  flex flex-col items-end ${
              sante ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Sport-Santé Méditerranée</div>

            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <Visitez link={data[1].link}></Visitez>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity flex flex-col items-end ${
              heaf ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Heaf</div>
            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <Visitez link={data[2].link}></Visitez>
          </div>
          <div
            className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity  flex flex-col items-end ${
              mutable ? "opacity-100 visible z-60" : "opacity-0 invisible z-10"
            }`}
          >
            <div className="mb-5">Mutable Instruments</div>
            <div className=" text-sm font-satoshi ">/ PORTFOLIO 2024</div>
            <Visitez link={data[3].link}></Visitez>
          </div>
          <div className="absolute bottom-10 flex items-center justify-center   right-10  ">
            <PortfolioCounter
              lcdo={lcdo}
              sante={sante}
              heaf={heaf}
              mutable={mutable}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Portfoliov2;
