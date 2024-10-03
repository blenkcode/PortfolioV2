import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap/dist/gsap";
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
        { y: "20%" },
        {
          y: "-95%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "55%", // Déclenchement au centre de l'écran
            end: "100%", // Fin de l'animation quand le bas atteint le haut
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress * 100; // Progrès du scroll en pourcentage
              console.log(`Progress: ${progress}%`); // Debug
              if (screenWidth > 1000) {
                if (progress < 12) {
                  setLcdo(true);
                } else {
                  setLcdo(false);
                }
                if (progress >= 12 && progress < 23) {
                  setSante(true);
                } else {
                  setSante(false);
                }
                if (progress >= 23 && progress < 42) {
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
  }, [heaf, sante]);
  useEffect(() => {
    playShot2();
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
      bassShot2Ref.current.volume = 0.2;

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
    <div className="w-full lg:fixed h-fit mt-10 lg:mt-0 z-40">
      <audio ref={clickSoundRef} src="/click1.wav"></audio>
      <audio ref={bassShotRef} src="/bassshot.wav"></audio>
      <audio ref={bassShot2Ref} src="/bassshot2.wav"></audio>
      <div className="absolute right-20 text-zinc-200 text-xl flex items-end justify-center flex-col text-zinc font-Satoshi font-thin z-50 lg:visible invisible ">
        <span
          className={`mb-1 2xl:text-lg invisible lg:visible xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity duration-300 flex flex-col items-end ${
            lcdo ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-5">Le Chant des Oiseaux</div>
          <div
            className=" text-sm font-satoshi 
          "
          >
            / PORTFOLIO 2024
          </div>
          <a
            href="https://lcdo-three.vercel.app/"
            target="_blank"
            className="z-50 mt-5"
            onMouseEnter={playClickSound}
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-smjustify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden">
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
        </span>

        <span
          className={`mb-1 2xl:text-lg xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity duration-300 flex flex-col items-end ${
            sante ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-5">Sport-Santé Méditerranée</div>
          <div
            className=" text-sm font-satoshi 
          "
          >
            / PORTFOLIO 2024
          </div>
          <a
            className="z-50 mt-5"
            href="https://sport-sante-mediterranee.vercel.app/"
            target="_blank"
            onMouseEnter={playClickSound}
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-smjustify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden">
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
              <span className="transition-all  duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                Visitez
                <FontAwesomeIcon
                  className="ml-3 -rotate-45"
                  icon={faArrowRight}
                />
              </span>
            </div>
          </a>
        </span>
        <span
          className={`mb-1 2xl:text-lg xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity duration-300 flex flex-col items-end ${
            heaf ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-5">Heaf</div>
          <div
            className=" text-sm font-satoshi 
          "
          >
            / PORTFOLIO 2024
          </div>
          <a
            href="https://heaf-front-end.vercel.app/"
            target="_blank"
            className="z-50 mt-5"
            onMouseEnter={playClickSound}
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden">
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
              <span className="transition-all  duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                Visitez
                <FontAwesomeIcon
                  className="ml-3 -rotate-45"
                  icon={faArrowRight}
                />
              </span>
            </div>
          </a>
        </span>
        <span
          className={`mb-1 2xl:text-lg xl:text-md lg:text-sm fixed top-1/2 -translate-y-1/2 transition-opacity duration-300 flex flex-col items-end ${
            mutable ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-5">Mutable Instruments</div>
          <div
            className=" text-sm font-satoshi 
          "
          >
            / PORTFOLIO 2024
          </div>
          <a
            href="https://mutable-instruments-shop.vercel.app/"
            target="_blank"
            className="z-50 mt-5"
            onMouseEnter={playClickSound}
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex 2xl:text-lg xl:text-md lg:text-sm justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden">
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
        </span>
      </div>
      <div className="fixed lg:visible invisible left-20 text-zinc-200  flex items-start justify-center flex-col text-base  shadow-2xl text-zinc font-Satoshi font-thin   ">
        <span
          className={`mb-1 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl ${
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
          className={`mb-1 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
            sante ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-2">
            Situé à Marseillan dans l'Hérault ce cabinet d'ostéopathie et
            kinésithérapie propose différents services, analyse de course, bike
            fiting, et massages.
          </div>
          <div>
            <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind CSS,
            Gsap.
          </div>
        </span>
        <span
          className={`mb-1 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
            heaf ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-2">
            Web-application de santé, accompagnement et conseil nutritionels.
          </div>
          <div className="mb-2">
            Perdre du poids, prendre du muscle, se maintenir en forme.
          </div>
          <div>
            <u>Technologies utilisées :</u> Javascript, React, Chart.js Next.js
            Redux, MongoDB, Tailwind CSS, Spline, Express, Node.js.
          </div>
        </span>
        <span
          className={`mb-1 fixed xl:w-80 lg:w-64 top-1/2 -translate-y-1/2 xl:text-sm lg:text-xs 2xl:text-base xl:left-8 2xl:left-16 lg:left-5  transition-opacity duration-300 shadow-2xl p-10  rounded-xl  ${
            mutable ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="mb-2">Site marchand en produits de musique.</div>
          <div className="mb-2">
            La compagnie Française Mutable Instruments est spécialisée dans la
            production de module de synthèse audio.
            <br></br> Page d'acceuil, magasin et possibilité de stocker des
            articles en favoris.
          </div>
          <div className="mt-2">
            <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind CSS.
          </div>
        </span>
      </div>
      <div
        ref={lcdoRef}
        className="flex items-center flex-col justify-center  "
      >
        <div
          onClick={() => handleproject()}
          className="relative group w-4/5  lg:w-2/5 "
        >
          <div
            className={`border-solid  border-opacity-50 border-4 rounded-md  p-1 bg-zinc-900 transform transition-all duration-300 ${
              lcdo
                ? "opacity-100 border-violet-500 scale-105 "
                : "lg:opacity-15 lg:scale-100 lg:border-zinc-400  opacity-100 border-violet-500 scale-105 "
            } `}
          >
            {" "}
            <img
              src="./lcdo1.webp"
              className="lcdogroup group"
              alt="LCDO"
            />{" "}
          </div>
        </div>
        <div
          onClick={() => handlecarby()}
          className="relative group lg:w-2/5 w-4/5 mt-10 "
        >
          <div
            className={`border-solid border-opacity-50 border-4 rounded-md  p-1 bg-zinc-900 transform transition-all duration-300 ${
              sante
                ? "opacity-100 border-violet-500 border-opacity-40 scale-105"
                : "lg:opacity-15 lg:scale-100 lg:border-zinc-400  opacity-100 border-violet-500 scale-105 "
            }`}
          >
            {" "}
            <img src="./sante1.webp" alt="Cabinet Kinesithérapie" />{" "}
          </div>
        </div>
        <div
          onClick={() => handleheaf()}
          className="relative group lg:w-2/5 w-4/5  mt-10 "
        >
          <div
            className={`border-solid border-opacity-50 border-4 rounded-md  p-1 bg-zinc-900 transform transition-all duration-300  ${
              heaf
                ? " opacity-100 border-violet-500 border-opacity-40 scale-105"
                : "lg:opacity-15 lg:scale-100 lg:border-zinc-400  opacity-100 border-violet-500 scale-105 "
            } `}
          >
            {" "}
            <img src="./newh1.png" alt="Cabinet Kinesithérapie" />{" "}
          </div>
        </div>
        <div
          onClick={() => handlemutable()}
          className="relative group lg:w-2/5 w-4/5  mt-10 "
        >
          <div
            className={`border-solid border-opacity-50 border-4 rounded-md  p-1 bg-zinc-900 transform transition-all duration-300  ${
              mutable
                ? " opacity-100 border-violet-500 border-opacity-40 scale-105"
                : "lg:opacity-15 lg:scale-100 lg:border-zinc-400  opacity-100 border-violet-500 scale-105 "
            } `}
          >
            {" "}
            <img src="./mutable.webp" alt="Cabinet Kinesithérapie" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Portfoliov2;
