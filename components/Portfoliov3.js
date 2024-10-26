import React from "react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import { useTheme } from "../ThemeContext";
import MenuSlider from "./MenuSlider";
import { useRouter } from "next/router";
import ShaderScene from "../components/ShaderScene";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Visitez from "./Visitez";
import ImageDistortion from "./MorphShader";
import PortfolioCounter from "./PortfolioCounter";
import { Canvas } from "@react-three/fiber";
const Portfoliov3 = React.forwardRef(({ mainRef }) => {
  const lcdoRef = useRef(null);
  const [lcdo, setLcdo] = useState(false);
  const [sante, setSante] = useState(true);
  const [mutable, setMutable] = useState(false);
  const [heaf, setHeaf] = useState(false);
  const [carby, setCarby] = useState(false);
  const router = useRouter();
  const { isDarkMode } = useTheme();
  useEffect(() => {
    const screenWidth = window.innerWidth;
    setLcdo(true);
    gsap.registerPlugin(ScrollTrigger);
    if (screenWidth > 1000) {
      gsap.fromTo(
        lcdoRef.current,
        { y: "0%" },
        {
          y: "-50%",
          scrollTrigger: {
            trigger: mainRef.current,
            start: "60%", // Déclenchement au centre de l'écran
            end: "100%", // Fin de l'animation quand le bas atteint le haut
            scrub: 1,

            onUpdate: (self) => {
              const progress = self.progress * 100; // Progrès du scroll en pourcentage
              // console.log(`Progress: ${progress}%`); // Debug
              if (screenWidth > 1000) {
                if (progress < 4) {
                  setSante(true);
                } else {
                  setSante(false);
                }
                if (progress >= 4 && progress < 17) {
                  setHeaf(true);
                } else {
                  setHeaf(false);
                }
                if (progress >= 17 && progress < 26) {
                  setLcdo(true);
                } else {
                  setLcdo(false);
                }
                if (progress >= 26 && progress < 36) {
                  setCarby(true);
                } else {
                  setCarby(false);
                }
                if (progress >= 36 && progress <= 100) {
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
    router.push("/carby");
  };
  const handlekine = () => {
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
        "TypeScript, React, Next.js, NextAuth, ZOD, MongoDB, Tailwind CSS, Express, Node.js.",
      link: "https://heafv2.vercel.app/",
    },
    {
      infos1: "Site marchand en produits de musique.",
      infos2:
        "  La compagnie Française Mutable Instruments est spécialisée dans la production de module de synthèse audio, page d'acceuil, magasin et possibilité de stocker des articles en favoris.",
      techno: "React, Next.js, Redux, Tailwind CSS",
      link: "https://mutable-instruments-shop.vercel.app/",
    },
    {
      infos1: " Application Mobile eco-responsable.",
      infos2:
        "  Carby est une application React-Native qui vous aide à prendre conscience de votre impact carbone !",
      techno:
        "Javascript, React-Native, Expo, Next.js Redux, MongoDB, CSS, Figma, Express, Node.js.",
    },
  ];
  return (
    <div className="w-full h-auto opacity-0 flex flex-col lg:mt-0   relative  font-Satoshi font-thin">
      <div className="relative z-10   text-white dynamic-text2 flex flex-col justify-center items-center w-full ">
        <div className="flex text2 ">
          <span className="font-playfair text2 mr-5">Selected </span>Works
        </div>
      </div>
      <div className="w-full py-32 flex ">
        <div
          onClick={() => handlekine()}
          className="relative group grayscale hover:grayscale-0 transition-all duration-500 w-2/6 group shadow-xl mt-10 "
        >
          {" "}
          <div className="">
            <ImageDistortion
              imageUrl="./sante1.webp"
              className="z-10"
              fadeDuration={100}
              width={624}
              height={322} // Durée du fade en millisecondes
            />
          </div>
        </div>
        <div className="w-2/6 flex flex-col text-white px-10 justify-end">
          {" "}
          <div className="mb-5 text-3xl allTextcolor ">
            SPORT SANTE MEDITERRANEE
          </div>
          <div className="mb-5 ">
            Showcase Website for a Physiotherapy / Osteopathy Clinic
          </div>
          <Visitez link={data[0].link}></Visitez>
        </div>
      </div>
      <div className="w-full flex justify-end py-32 ">
        <div
          onClick={() => handleheaf()}
          className="relative group  w-2/6 grayscale hover:grayscale-0 transition-all duration-500   shadow-xl "
        >
          <div className="">
            <ImageDistortion
              imageUrl="/ValentinMOR.webp"
              className="z-10"
              fadeDuration={100}
              width={775}
              height={987} // Durée du fade en millisecondes
            />
          </div>
        </div>
        <div className="w-2/6 flex flex-col text-white px-10 justify-end">
          {" "}
          <div className="mb-5 text-3xl allTextcolor ">HEAF</div>
          <div className="mb-5 ">
            Health Web Application for Nutritional Guidance and Support
          </div>
          <Visitez link={data[0].link}></Visitez>
        </div>
      </div>
      <div className="w-full flex justify-between  py-32 ">
        <div
          onClick={() => handleproject()}
          className="relative group  w-2/6 grayscale hover:grayscale-0 transition-all duration-500   shadow-xl "
        >
          {" "}
          <div className="">
            <ImageDistortion
              imageUrl="/lcdo1.webp"
              className="z-10"
              fadeDuration={100}
              width={624}
              height={322} // Durée du fade en millisecondes
            />
          </div>
        </div>
        <div className="w-2/6 flex flex-col text-white px-10 justify-end">
          {" "}
          <div className="mb-5 text-3xl allTextcolor ">
            LE CHANT DES OISEAUX
          </div>
          <div className="mb-5 ">Web Application for the LCDO Festival</div>
          <Visitez link={data[0].link}></Visitez>
        </div>
        <div className="w-2/6"></div>
      </div>
      <div className="w-full flex justify-between   py-32  ">
        {" "}
        <div className="w-2/6"></div>
        <div
          onClick={() => handlecarby()}
          className="relative group  w-2/6  grayscale hover:grayscale-0 transition-all duration-500  shadow-xl "
        >
          {" "}
          <div className="">
            <ImageDistortion
              imageUrl="/carbyframe.png"
              className="z-10"
              fadeDuration={100}
              width={624}
              height={322} // Durée du fade en millisecondes
            />
          </div>
        </div>
        <div className="w-2/6 flex flex-col text-white px-10 justify-end">
          {" "}
          <div className="mb-5 text-3xl allTextcolor ">CARBY</div>
          <div className="mb-5 ">Eco-friendly Mobile Application</div>
          <Visitez link={data[0].link}></Visitez>
        </div>
      </div>
      <div className="w-full flex justify-between  py-32   ">
        <div
          onClick={() => handlemutable()}
          className="relative group  w-2/6 grayscale hover:grayscale-0 transition-all duration-500  shadow-xl "
        >
          {" "}
          <div className="">
            <ImageDistortion
              imageUrl="./mutable.webp"
              className="z-10"
              fadeDuration={100}
              width={624}
              height={322} // Durée du fade en millisecondes
            />
          </div>
        </div>

        <div className="w-2/6 flex flex-col text-white px-10 justify-end">
          {" "}
          <div className="mb-5 text-3xl allTextcolor ">MUTABLE INSTRUMENTS</div>
          <div className="mb-5 ">E-commerce Website for Music Products</div>
          <Visitez link={data[0].link}></Visitez>
        </div>
        <div className="w-2/6"></div>
      </div>
    </div>
  );
});

export default Portfoliov3;
