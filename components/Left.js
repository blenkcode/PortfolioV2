import Language from "./Language";

import styles from "../styles/Home.module.css";
import Header from "./Header";
import Stack from "./Stack";
import Portfolio from "./Portfolio";

import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

function Left() {
  return (
    <div className=" 2xl:pb-48  pt-36 w-full h-auto flex flex-col items-center justify-center 2xl:pl-48 xl:pl-40 lg:pl-36 md:pl-36 sm:pl-32 pl-20 ">
      <div className="text-white  ">
        <div className="fadeIn ease-in z-20 text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md-text-m sm-text-sm text-white font-source font-light  mb-3">
          Hi, my name is
        </div>
        <div className="fadeIn ease-in delay-75 z-20 flex items-end text-6xl 2xl:text-6xl xl-text-6xl lg:text-5xl md:text-5xl sm:text-4xl  font-semi-bold text-purple-200  00">
          Valentin Mor
          <div className=" fadeIn ease-in delay-100 z-20 ml-6 text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md-text-m sm-text-sm font-source font-light text-white">
            {" "}
            I'm a{" "}
          </div>
        </div>
        <div className="fadeIn ease-in delay-500 z-20 bg-transparent mt-3 font-bold text-7xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl ">
          FULL-ST
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
          <span className={styles.r}>r.</span>
        </div>
        <div className="fadeIn ease-in delay-200 z-10 mt-20 text-xl 2xl:w-7/12 lg:w-9/12 sm:w-7/12 ">
          {" "}
          Je suis un développeur React et Node.js basé à <b>Montpellier.</b>
          <br></br>
          <br></br>
          Passionné par la <b>création</b> d'interfaces utilisateurs et
          d'architecture back-end, je réalise vos futures applications web!
        </div>
        <div className="mt-28 fadeIn ease-in delay-400 ">
          {" "}
          <a
            href="/VALENTIN-MOR-CV-2024.pdf"
            download
            className="border-zinc-300 mr-10 w-fit z-20 transition duration-200 ease-in-out border-solid border-1 border-opacity-20 rounded-md px-5 py-3 hover:border-opacity-40 hover:border-violet-400 hover:text-violet-400"
          >
            Télécharger un CV
            <FontAwesomeIcon className="ml-3" icon={faDownload} />
          </a>
          <a
            href="mailto:valentinmor.pro@gmail.com?subject=Demande%20d'information"
            download
            className="border-zinc-300 w-fit  border-solid transition duration-200 ease-in-out border-1 border-opacity-20 rounded-md px-5 py-3 hover:border-opacity-40 hover:border-violet-400 hover:text-violet-400"
          >
            Contactez moi !
            <FontAwesomeIcon className="ml-3" icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Left;
