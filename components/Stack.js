import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faLaptop,
  faUsersLine,
  faDatabase,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";
import Svg from "./Svg";
function Stack({ mainRef }) {
  const { isDarkMode } = useTheme();
  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center   ">
      <div className="2xl:px-16 sm:px-7 h-fit lg:w-1/2 flex items-center justify-center flex-col rounded-lg z-10  lg:mt-0 mt-10 relative ">
        <div
          className={`  xl:text-2xl lg:text-xl font-thin text-xl z-20 flex flex-col items-center font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-100 "
          } `}
        >
          <span className="lg:text-3xl text-xl">
            Conception et développement{" "}
          </span>
          <span className="mt-3"> d'écosystèmes web ou mobiles </span>
          <span className="mt-3">intéractifs et intuitif</span>
        </div>
        <div className="mt-10 relative bg-red-50 w-full h-full flex items-center justify-center -translate-x-12">
          {" "}
          <Svg mainRef={mainRef}></Svg>
        </div>
        <div
          className={`w-full mt-36 xl:text-2xl lg:text-xl font-thin text-2xl z-20 flex md:flex-row flex-col  items-center justify-between font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-100 "
          } `}
        >
          <span className="text-xl flex items-start justify-center pt-5 w-48 h-48 border-1 border-zinc-200 rounded-xl border-opacity-50 group relative overflow-hidden">
            {" "}
            <span className="z-50">User-Friendly UI</span>
            <FontAwesomeIcon
              className="absolute text-4xl group-hover:-translate-x-32 transition-all duration-700   right-22 top-20 z-50 "
              icon={faUsersLine}
            />
            <FontAwesomeIcon
              className="absolute transition-all duration-700  translate-x-32 group-hover:translate-x-0 text-4xl right-22 top-20 z-50"
              icon={faSmile}
            />
            <div className="w-14 h-14 bg-violet-400 bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-300 group-hover:bg-opacity-10 grou^-hover:-translate-y-20"></div>
          </span>
          <span className="text-xl flex items-start justify-center pt-5 w-48 h-48 border-1 border-zinc-200 rounded-xl border-opacity-50 relative group overflow-hidden md:mt-0 mt-5">
            {" "}
            Responsive Design
            <FontAwesomeIcon
              className="absolute text-4xl group-hover:-translate-x-16 transition-all duration-700   right-12 top-24 group-hover:-rotate-12 rotate-12 z-50"
              icon={faMobile}
            />
            <FontAwesomeIcon
              className="absolute transition-all duration-700 group-hover:translate-x-16 group-hover:rotate-12 text-4xl left-10 top-20 -rotate-12 z-50"
              icon={faLaptop}
            />
            <div className="w-2/3 h-2/3 bg-violet-400 bg-opacity-40 rounded-full absolute -bottom-32 z-10 group-hover:w-96 group-hover:h-96 transition-all duration-500 group-hover:bg-opacity-0"></div>
            <div className="w-14 h-14 bg-violet-400 bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-200 group-hover:bg-opacity-0 grou^-hover:-translate-y-20 "></div>
          </span>
          <span className="text-xl flex items-start justify-center pt-5 w-48  h-48 border-1 border-zinc-200 rounded-xl border-opacity-50 relative group overflow-hidden md:mt-0 mt-5">
            {" "}
            Base de Données
            <FontAwesomeIcon
              className="absolute group-hover:rotate-180 transition-all duration-700 text-4xl right-22 top-20 z-50"
              icon={faDatabase}
            />
            <div className="w-14 h-14 bg-violet-400 bg-opacity-30 rounded-full absolute top-20 blur-xl z-10 group-hover:w-96 group-hover:h-96 transition-all duration-200 group-hover:bg-opacity-0 grou^-hover:-translate-y-20 "></div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Stack;
