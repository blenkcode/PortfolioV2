import Right from "./Right";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import Left from "./Left";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Portfoliov2 from "./Portfoliov2";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Background from "./Background";
import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRouter } from "next/router";
import Time from "./Time";
function Home() {
  const handlerouter = () => {
    router.push("/");
  };
  const router = useRouter();

  // Stocke le chemin précédent

  const leftRef = useRef(null);
  const mainRef = useRef(null);
  const circleRef = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const circle4Ref = useRef(null);
  const circle5Ref = useRef(null);
  const circle6Ref = useRef(null);
  const circle7Ref = useRef(null);
  const circle8Ref = useRef(null);
  const rightRef = useRef(null);
  const stackRef = useRef(null);
  const portfolioRef = useRef(null);
  const svgRef = useRef(null);

  const morphRef = useRef(null);

  const handleProject = () => {
    if (mainRef.current) {
      // Obtenir la hauteur de mainRef et la position relative
      const mainRect = mainRef.current.getBoundingClientRect();

      // Calculer la position du scroll à 45% de la hauteur de mainRef
      const scrollPosition =
        mainRect.top + window.scrollY + mainRect.height * 0.5;

      // Scroller jusqu'à cette position avec un comportement smooth
      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    // Vérifiez si le paramètre query "scrollToPortfolio" est présent
    if (router.query.scrollToPortfolio) {
      // Scroller vers portfolioRef
      portfolioRef.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [router.query]);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "3%", // Déclenchement au début
          end: "60%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // Synchronisé avec le scroll
          // Activer les marqueurs pour le débogage
        },
      })
      .fromTo(
        mainRef.current,
        { backgroundColor: "rgba(24, 24, 27, 0.6)" },
        { backgroundColor: "rgba(24, 24, 27, 1)", duration: 1 } // Premier changement
      )
      .to(
        mainRef.current,
        { backgroundColor: "rgba(24, 24, 27, 0.6)", duration: 1 } // Deuxième changement
      );

    // Animation de la section Home
    gsap.fromTo(
      leftRef.current,
      { x: 0, opacity: 1 },
      {
        x: -940,
        opacity: 0,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "3%", // Déclenchement au centre de l'écran
          end: "8%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll
          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      rightRef.current,
      { opacity: 1, x: 0 },
      {
        opacity: 0,

        x: 700,
        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "3%", // Déclenchement au centre de l'écran
          end: "8%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll
        },
      }
    );

    gsap.fromTo(
      stackRef.current,
      { opacity: 0, visibility: "hidden", scale: 0.2 },
      {
        opacity: 1,
        scale: 1,
        visibility: "visible",

        // ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "9%", // Déclenchement au centre de l'écran
          end: "9%", // Fin de l'animation quand le bas atteint le haut
          scrub: 2, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      stackRef.current,
      { y: -140 },
      {
        y: -800,

        scrollTrigger: {
          trigger: mainRef.current,
          start: "40%", // Déclenchement au centre de l'écran
          end: "46%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      portfolioRef.current,
      { y: 900, visibility: "hidden" },
      {
        y: -400,
        visibility: "visible",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "40%", // Déclenchement au centre de l'écran
          end: "46%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.set(circleRef.current, { scale: 0 });
    gsap.fromTo(
      circleRef.current,
      { scale: 0, visibility: "hidden" },
      {
        scale: 1,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "2%", // Déclenchement au centre de l'écran
          end: "10%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 2, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circleRef.current,
      { y: 0 },
      {
        y: 900,

        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "30%", // Déclenchement au centre de l'écran
          end: "45%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle2Ref.current,
      { y: -1000, visibility: "hidden" },
      {
        y: 700,
        visibility: "visibkle",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "5%", // Déclenchement au centre de l'écran
          end: "35%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 1, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle3Ref.current,
      { y: 700, visibility: "hidden" },
      {
        y: -1000,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "4%", // Déclenchement au centre de l'écran
          end: "30%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 2, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle4Ref.current,
      { y: 500, visibility: "hidden" },
      {
        y: -1000,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "10%", // Déclenchement au centre de l'écran
          end: "40%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 2, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle5Ref.current,
      { y: -1000, visibility: "hidden" },
      {
        y: 1000,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "20%", // Déclenchement au centre de l'écran
          end: "37%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle6Ref.current,
      { y: -700, visibility: "hidden" },
      {
        y: 1000,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "10%", // Déclenchement au centre de l'écran
          end: "39%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle7Ref.current,
      { y: 700, visibility: "hidden" },
      {
        y: -1200,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "14%", // Déclenchement au centre de l'écran
          end: "40%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );
    gsap.fromTo(
      circle8Ref.current,
      { y: -1000, visibility: "hidden" },
      {
        y: 700,
        visibility: "visible",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "17%", // Déclenchement au centre de l'écran
          end: "41%", //// Fin de l'animation quand le bas atteint le haut
          scrub: 3, // L'animation est liée au scroll

          // Activer les marqueurs pour déboguer
        },
      }
    );

    gsap.to(".rotate-y", {
      keyframes: [
        {
          x: -400,
          y: -50, // Translation horizontale
          rotateZ: 360, // Rotation initiale
          scale: 1.2, // Échelle initiale

          duration: 30, // Première étape
        },
      ],

      repeat: -1, // Répétition infinie
      yoyo: true, // Animation aller-retour
    });
  }, []);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: "3%", // Déclenchement au début
          end: "60%", // Fin de l'animation quand le bas atteint le haut
          scrub: 3, // Synchronisé avec le scroll
          // Activer les marqueurs pour le débogage
        },
      })
      .fromTo(
        morphRef.current,
        { opacity: 1, filter: "blur(32px)" },
        { opacity: 0, duration: 1 } // Premier changement
      )
      .to(
        morphRef.current,
        {
          opacity: 1,
          duration: 1,
          filter: "blur(64px)",
        } // Deuxième changement
      );
  }, [mainRef, morphRef]);
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: mainRef.current, // Élément déclencheur pour l'animation
          start: "13%", // Animation commence à 10% du défilement
          end: "26%", // Fin de l'animation à 45% du défilement
          scrub: 3, // Synchronisation avec le défilement
          // Marqueurs pour le débogage
        },
      })
      .fromTo(
        svgRef.current.querySelector("circle"),
        { strokeDashoffset: 440, stroke: "#FDFAF8" }, // Commence avec un cercle vide
        { strokeDashoffset: 0, duration: 1, stroke: "#A287F2", ease: "none" } // Se remplit progressivement
      );
  }, []);

  return (
    <main
      ref={mainRef}
      className=" flex flex-col items-center justify-center relative overflow-hidden h-auto w-full  "
    >
      <div
        ref={morphRef}
        className="blur-xl fixed top-0 right-0 w-full h-screen flex flex-row -translate-y-96  "
      >
        <Background></Background>
      </div>

      <div className="fixed md:top-7 top-4 left-0 w-full h-auto bg-transparent items-center z-50">
        <div className="flex ml-4 md:ml-8 md:mr-8 justify-between items-center  ">
          <div className="flex ">
            <div
              onClick={handlerouter}
              className="mr-10 text-zinc-200  w-16 font-Satoshi cursor-pointer font-thin relative group"
            >
              <span className="opacity-0">V</span>
              <span className="opacity-0">/</span>
              <span className="opacity-0">M</span>

              <span className="absolute font-bold -translate-x-4 group-hover:-translate-x-1 transition-all duration-200 2xl:text-base lg:text-sm">
                V
              </span>
              <span className="absolute font-thin text-zinc-300 group-hover:opacity-0 transition-all duration-200 2xl:text-base lg:text-sm">
                /
              </span>
              <span className="absolute font-semibold translate-x-3 2xl:text-base lg:text-sm">
                M
              </span>
            </div>
            <div className="invisible md:visible">
              {" "}
              <Time></Time>
            </div>
          </div>
          <div className="flex font-source mb-5 md:mb-0 justify-end w-44 text-zinc-100 ">
            <div
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
              className="mr-7 ml-12"
            >
              <FontAwesomeIcon
                className="text-2xl 2xl:text-2xl lg:text-xl text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faLinkedin}
              />
            </a>
            <a target="_blank" href="https://github.com/blenkcode">
              <FontAwesomeIcon
                className="text-2xl 2xl:text-2xl lg:text-xl mr-5  text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full relative   ">
        <div
          ref={leftRef}
          className=" fixed lg:top-1/4 2xl:left-52 xl:left-32 lg:left-20  lg:w-1/2 top-24 left-5 z-40     "
        >
          <Left></Left>
        </div>
        <div
          ref={rightRef}
          className="   fixed 2xl:right-52 xl:right-20 lg:right-10  lg:top-1/4 invisible lg:visible "
        >
          <Right></Right>
        </div>
        <div
          ref={circleRef}
          className="w-circlee invisible rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed h-circlee bg-opacity-30 bg-zinc-900 z-30"
        >
          <svg
            ref={svgRef}
            className="absolute -top-16 opacity-60 -left-16 translate-x-1 translate-y-1"
            width="600"
            height="600"
            viewBox="0 0 150 150"
          >
            <circle
              cx="75"
              cy="75"
              r="70"
              stroke="#FDFAF8" // Couleur de la bordure
              strokeWidth="0.5" // Épaisseur de la bordure
              fill="none" // Pas de remplissage interne
              strokeDasharray="440" // Longueur de la circonférence
              strokeDashoffset="440" // Commence avec la bordure vide
            ></circle>
          </svg>
        </div>
        <div
          ref={circle2Ref}
          className="w-36 rounded-full invisible shadow-2xl flex items-center justify-center bottom-32 right-96 fixed h-36 bg-opacity-30 z-10 bg-violet-300"
        >
          {" "}
          <img src="/react.png" className="w-2/3"></img>
        </div>
        <div
          ref={circle3Ref}
          className="w-64 rounded-full invisible shadow-2xl bottom-32 flex justify-center items-center z-10 left-20 fixed h-64 bg-opacity-30 bg-violet-300"
        >
          <img src="/next.png"></img>
        </div>
        <div
          ref={circle4Ref}
          className="w-44 rounded-full invisible shadow-2xl bottom-80 flex justify-center items-center left-96 translate-x-20 fixed h-44 bg-opacity-30 bg-violet-300"
        >
          <img src="/node.png"></img>
        </div>
        <div
          ref={circle5Ref}
          className="w-40 rounded-full invisible shadow-2xl -bottom-0  flex justify-center items-center z-10 right-96 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/ex.png" className="w-2/3"></img>
        </div>

        <div
          ref={circle6Ref}
          className="w-40 rounded-full invisible shadow-2xl bottom-96 flex justify-center items-center z-10 right-20 fixed h-40 bg-opacity-30 bg-violet-300"
        >
          <img src="/mongo.png" className="w-2/3"></img>
        </div>
        <div
          ref={circle7Ref}
          className="w-52 rounded-full invisible shadow-2xl -bottom-20 flex justify-center items-center z-10 left-20 fixed h-52 bg-opacity-30 bg-violet-300"
        >
          <img src="/tail.png" className="w-4/5"></img>
        </div>
        <div
          ref={circle8Ref}
          className="w-44 rounded-full invisible shadow-2xl bottom-32 flex justify-center items-center z-10 right-20 fixed h-44 bg-opacity-30 bg-violet-300"
        >
          <img src="/redux.png" className="w-2/3 "></img>
        </div>
        <div
          ref={stackRef}
          className=" w-full  fixed right-1/2 invisible translate-x-1/2 top-1/2  z-30"
        >
          {" "}
          <Stack></Stack>
        </div>
        <div
          ref={portfolioRef}
          className="w-full fixed shadow-2xl invisible right-1/2 translate-x-1/2 top-96 z-40"
        >
          {" "}
          <Portfoliov2 mainRef={mainRef} />
        </div>

        <div className="lg:mt-0 lg:pt-0 h-fit opacity-0  ">
          <div className=" h-fit max-h-f lg:mt-36 mt-24 flex items-center justify-center ">
            <Stack></Stack>
          </div>

          <Portfolio></Portfolio>
          <Portfolio></Portfolio>
          <Portfolio></Portfolio>
        </div>
      </div>
    </main>
  );
}

export default Home;
