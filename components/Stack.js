import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useTheme } from "../ThemeContext";
function Stack({}) {
  const { isDarkMode } = useTheme();
  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center   ">
      <div className="flex   flex-col sm:flex-row items-center justify-center  lg:px-0 sm:pl-0 sm:pb-0 pb-0 w-full overflow-visible relative  ">
        <div
          className="    z-50 flex  opacity-100 translate-y-0 transition 
             
           flex-col lg:flex-row items-center justify-center"
        >
          <div className="2xl:px-16 sm:px-7  lg:w-110   rounded-lg z-10  lg:mt-0 mt-10 relative ">
            <p
              className={`  xl:text-base lg:text-sm font-thin text-md z-20  font-Satoshi ${
                isDarkMode ? "text-zinc-200 " : "text-zinc-900 "
              } `}
            >
              J'utilise{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                TypeScript
              </b>{" "}
              pour vous offrir des sites modernes, performants et aisément
              maintenables <br /> <br />
              Pour le développement front-end, j'emploie les frameworks
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                {" "}
                React
              </b>{" "}
              et sa surcouche{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Next.js
              </b>
              . Une gestion des états globaux avec{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Redux
              </b>{" "}
              et pour un design soigné et des animations captivantes les
              librairies{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Tailwind CSS
              </b>{" "}
              &{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Gsap
              </b>
              <br /> <br />
              Pour la gestion de vos serveurs et data-bases je m'appuie sur{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Node.js
              </b>
              ,{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                Express
              </b>{" "}
              et{" "}
              <b
                className={` font-bold ${
                  isDarkMode ? "text-violet-400" : "text-violet-900"
                }`}
              >
                MongoDB
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
