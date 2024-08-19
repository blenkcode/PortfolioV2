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
    <div className="mr-10 flex flex-col items-center justify-center">
      <div className="relative mt-20 flex flex-col items-center justify-center">
        <img
          className="w-6/12 2xl:w-6/12 lg:w-8/12 md:w-10/12 sm:w-8/12 shadow-2xl-violet-900 shadow-inner-5xl-violet-300 z-10"
          src="frr.png"
          alt="Valentin Mor portrait"
        />
        {isClient && (
          <div className="absolute inset-0 z-0 bg-violet-900 opacity-5 rounded-full blur-3xl animation-move-loop max-w1/2"></div>
        )}
      </div>

      <div className="mt-10 w-2/3 text-white flex flex-col justify-center items-center">
        <div className="ml-10">
          <div className="text-2xl mb-14 text-white">
            Je crée des interfaces interactives pour vos applications{" "}
            <span className={styles.web}>Web</span> &{" "}
            <span className={styles.web}>Mobile</span>.
          </div>
          <div className="text-lg mb-3">
            <FontAwesomeIcon className="mr-3 text-violet-400" icon={faLaptop} />
            Développement Front-End & Back-End
          </div>
          <div className="text-lg mb-3">
            <FontAwesomeIcon
              className="mr-3 ml-1 text-violet-400"
              icon={faDatabase}
            />
            Gestion de base de données
          </div>
          <div className="text-lg mb-3">
            <FontAwesomeIcon
              className="mr-3 ml-1  text-violet-400"
              icon={faScrewdriverWrench}
            />
            Maintenance des services
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
