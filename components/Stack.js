import Language from "./Language";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Cubes from "./Cubes";
import Cubes2 from "./Cubes2";

function Stack({}) {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.card}`);

    cards.forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        let elRect = el.getBoundingClientRect();
        let x = e.clientX - elRect.x;
        let y = e.clientY - elRect.y;

        let midCardwidth = elRect.width / 2;
        let midcardHeight = elRect.height / 2;
        let angleY = (x - midCardwidth) / 8;
        let angleX = (y - midcardHeight) / 8;

        el.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
      });

      el.addEventListener("mouseleave", () => {
        el.children[0].style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
      });
    });

    // Clean up event listeners on unmount
    return () => {
      cards.forEach((el) => {
        el.removeEventListener("mousemove", null);
        el.removeEventListener("mouseleave", null);
      });
    };
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  console.log(scrollY);

  useEffect(() => {
    if (scrollY > 200) {
      setIsVisible(true);
    }
  }, [scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSplineLoad = () => {
    setIsSplineLoaded(true);
  };

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    // Fonction pour définir si la taille de l'écran est supérieure à lg
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsLargeScreen(true); // Ecran lg et plus
      } else {
        setIsLargeScreen(false); // Ecran en dessous de lg
      }
    };

    // Appel initial pour vérifier la taille de l'écran au premier rendu
    handleResize();

    // Ajouter un listener pour détecter les changements de taille de l'écran
    window.addEventListener("resize", handleResize);

    // Nettoyer l'écouteur d'événements lors du démontage du composant
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center font-hind">
      <div className="sm:text-4xl text-xl flex text-zinc-200 sm:mb-32 mb-10 border-solid border-zinc-500 border-l-2 px-5 py-2 lg:py-5">
        Stack Technique <div className="ml-3">🛠️</div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center px-5 lg:px-0 sm:pl-0 sm:pb-0 pb-0">
        <div
          className={`${
            isVisible
              ? "z-20  grid grid-cols-1 xl:grid-cols-2 gap-20 sm:w-2/3 opacity-100 translate-y-0 transition duration-[2000ms]"
              : styles.invisible
          } flex flex-col sm:flex-row items-center justify-center`}
        >
          <div className="2xl:px-16 sm:px-7 px-6 rounded-lg z-10">
            <p className="lg:text-xl text-md text-zinc-200 z-20">
              J'utilise <b className={styles.react}>TypeScript</b> pour vous
              offrir des sites modernes et performants avec les technologies les
              plus avancées. <br /> <br />
              Pour le développement front-end, j'emploie les frameworks
              <b className={styles.react}> React</b> et{" "}
              <b className={styles.react}>Next.js</b>, avec{" "}
              <b className={styles.react}>Redux</b> pour la gestion des états et
              la librairie <b className={styles.react}>Tailwind CSS</b> pour un
              design soigné et des animations captivantes.
              <br /> <br />
              Pour le back-end, je m'appuie sur{" "}
              <b className={styles.react}>Node.js</b>,{" "}
              <b className={styles.react}>Express</b> et{" "}
              <b className={styles.react}>Socket.io</b> afin de gérer les
              serveurs, les requêtes et opérations CRUD sur bases de données.
            </p>
          </div>
          {/* <div
            className={`${styles.container} flex justify-center items-center`}
          >
            <div className={styles.card}>
              <div className={styles.contentCard}>
                <Language></Language>
              </div>
            </div>
          </div> */}
          {isLargeScreen ? (
            <Cubes />
          ) : (
            <div className="flex justify-center items-center">
              <Cubes2></Cubes2>
            </div>
          )}
        </div>
      </div>

      <div className="z-10 w-1/2 sm:h-full h-1/2 bg-purple-950 opacity-15 rounded-full blur-3xl absolute right-20 top-10 transform"></div>

      <div className="z-10 w-1/3 h-1/2 bg-zinc-600 opacity-10 rounded-full blur-3xl absolute right-44 top-72 transform"></div>

      <div className="z-10 w-1/3 h-1/2 bg-zinc-900 opacity-50 rounded-full blur-3xl absolute right-20 top-72 transform"></div>
    </div>
  );
}

export default Stack;
