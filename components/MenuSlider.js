import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../ThemeContext";
import {
  faCircleInfo,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
const MenuSlider = ({ infos1, infos2, techno }) => {
  const { isDarkMode } = useTheme();
  const [infos, setInfos] = useState(false); // Etat pour le menu Informations
  const [technos, setTechnos] = useState(false); // Etat pour le menu Technologies

  // Gestion de l'affichage du menu Informations
  const handleInfos = () => {
    setInfos(!infos);
  };

  // Gestion de l'affichage du menu Technologies
  const handleTechnos = () => {
    setTechnos(!technos);
  };

  return (
    <div
      className={`w-full h-full z-50  relative 2xl:text-base lg:text-sm ${
        isDarkMode ? "text-white  " : "text-zinc-900 "
      }`}
    >
      {/* Menu Informations */}
      <div
        onClick={handleInfos}
        className={`w-full h-10 overflow-hidden group relative transition-all duration-500 flex items-center border-t-1  border-zinc-500 cursor-pointer ${
          infos ? "bg-zinc-400 bg-opacity-20 " : ""
        }`}
      >
        <span
          className={`z-20 group-hover:translate-x-3 transition-all duration-500 ${
            infos ? "translate-x-3 " : "-translate-x-6 "
          } `}
        >
          <FontAwesomeIcon icon={faCircleInfo} className="mr-2 text-xs" />{" "}
          Informations
        </span>
        <div className="bg-violet-400 bg-opacity-20 h-96 w-96 rounded-full group-hover:rounded-none rotate-12 group-hover:rotate-0 duration-300 absolute top-0 translate-y-full group-hover:-translate-y-20 transition-all"></div>
      </div>

      {/* Contenu du menu Informations avec animation de hauteur */}
      <div
        className={`transition-all duration-700  overflow-hidden  border-zinc-500 border-opacity-50 ${
          infos ? "max-h-96" : "max-h-0"
        } ${infos ? "border-t-1 " : "border-t-0"}`}
      >
        <div className="w-52 h-fit py-5 z-10 relative">
          <div className="mb-2">{infos1}</div>
          <div className="mb-2">{infos2}</div>
        </div>
      </div>
      <div
        onClick={handleTechnos}
        className={`w-full h-10 overflow-hidden group relative transition-all duration-500 flex items-center border-t-1  border-zinc-500  cursor-pointer ${
          technos ? "bg-zinc-400 bg-opacity-20 " : ""
        }`}
      >
        <span
          className={` z-20 flex items-center -translate-x-5 group-hover:translate-x-3 transition-all duration-500 ${
            technos ? "translate-x-3 " : "-translate-x-5 "
          }`}
        >
          <FontAwesomeIcon
            icon={faScrewdriverWrench}
            className="mr-2 text-xs"
          />{" "}
          Technologies
        </span>
        <div className="bg-violet-400 bg-opacity-20 h-96 w-96 rounded-full group-hover:rounded-none rotate-12 group-hover:rotate-0 duration-300 absolute top-0 translate-y-full group-hover:-translate-y-20 transition-all"></div>
      </div>

      {/* Contenu du menu Informations avec animation de hauteur */}
      <div
        className={`transition-all duration-700 border-b-1  border-zinc-500 overflow-hidden ${
          technos ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="w-52 h-fit py-5 z-10 relative">
          <div className="">{techno}</div>
        </div>
      </div>

      {/* Menu Technologies */}
    </div>
  );
};

export default MenuSlider;
