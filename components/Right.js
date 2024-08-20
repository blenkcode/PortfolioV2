import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faDatabase,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

function Right() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="sm:mr-10 mr-0 flex flex-col items-center justify-center">
      <div className="relative mt-20 flex flex-col items-center justify-center">
        <img
          className="w-10/12 2xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-6/12 shadow-2xl-violet-900 shadow-inner-5xl-violet-300 z-10"
          src="frr.png"
          alt="Valentin Mor portrait"
        />
        {isClient && (
          <div className="absolute inset-0 z-0 bg-violet-900 opacity-10 rounded-full blur-3xl animation-move-loop max-w1/2"></div>
        )}
      </div>

      <div className="mt-10 2xl:w-2/3 w-full lg:w-full text-white flex flex-col justify-center items-center">
        <div className="ml-10">
          <div className="text-2xl 2xl:text-2xl lg:text-xl md:text-lg mb-14 text-white">
            Je crée des interfaces interactives pour vos applications{" "}
            <span className={styles.web}>Web</span> &{" "}
            <span className={styles.web}>Mobile</span>.
          </div>
          <div className=" 2xl:text-lg lg:text-base sm:text-lg text-sm mb-3">
            <FontAwesomeIcon
              style={{ fontSize: "1rem" }}
              className="mr-3 text-violet-400"
              icon={faLaptop}
            />
            Développement Front-End & Back-End
          </div>
          <div className="text-lg mb-3 sm:text-lg ">
            <FontAwesomeIcon
              className="mr-3 ml-1 text-violet-400"
              icon={faDatabase}
              style={{ fontSize: "1rem" }}
            />
            Gestion de base de données
          </div>
          <div className="text-lg mb-3">
            <FontAwesomeIcon
              className="mr-3 ml-1  text-violet-400"
              icon={faScrewdriverWrench}
              style={{ fontSize: "1rem" }}
            />
            Maintenance des services
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
