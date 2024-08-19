import Language from "./Language";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

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
  return (
    <div className="flex items-center 2xl:pb-64 pb-0 sm:pb-0 flex-col relative z-10 h-auto">
      <div className="text-4xl flex text-zinc-200 mb-32 border-solid border-zinc-500  border-l-2  px-5 py-5  ">
        Stack Technique <div className="ml-3">🛠️</div>
      </div>

      <div
        className={`${
          isVisible
            ? "z-20 grid grid-cols-1 xl:grid-cols-2 gap-20 w-2/3 opacity-100 translate-y-0 transition duration-[2000ms]"
            : styles.invisible
        }`}
      >
        {" "}
        <div className="2xl:px-16 sm:px-7 rounded-lg z-10">
          <p className="text-xl text-zinc-200 z-20">
            J'utilise <b className={styles.react}>JavaScript</b> pour vous
            offrir des sites modernes et performants avec les technologies les
            plus avancées. <br></br> <br></br>Pour le développement front-end,
            j'emploie les frameworks
            <b className={styles.react}> React</b> et{" "}
            <b className={styles.react}>Next.js</b>, avec{" "}
            <b className={styles.react}>Redux</b> pour la gestion des états et
            la librairie <b className={styles.react}>Tailwind CSS </b> pour un
            design soigné et des animations captivantes.
            <br /> <br></br>
            Pour le back-end, je m'appuie sur{" "}
            <b className={styles.react}>Node.js</b>,{" "}
            <b className={styles.react}>Express</b> et{" "}
            <b className={styles.react}>Socket.io</b> afin de gérer les
            serveurs, les requêtes et opérations CRUD sur bases de données de
            manière efficace.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.card}>
            {" "}
            <div className={styles.contentCard}>
              {" "}
              <Language></Language>
            </div>
          </div>
        </div>
      </div>
      <div className=" z-10 w-1/2 h-full bg-purple-950 opacity-5 rounded-full blur-3xl absolute right-20  top-10 transform "></div>

      <div className="z-10 w-1/3 h-1/2 bg-zinc-600 opacity-10 rounded-full blur-3xl absolute right-44 top-72 transform "></div>

      <div className=" z-10w-1/3 h-1/2 bg-zinc-900 opacity-50 rounded-full blur-3xl absolute right-20  top-72 transform "></div>
    </div>
  );
}

export default Stack;
