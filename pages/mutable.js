import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";
import { useTheme } from "../ThemeContext";
import Backgroundv2 from "../components/Backgroundv2";

function mutable() {
  const data = [
    { url: "/mutable.png", id: 1 },
    { url: "/mutable2.png", id: 2 },
    { url: "/mutable3.png", id: 3 },
    { url: "/mutable4.png", id: 4 },
  ];
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`overflow-hidden font-Noehmi  w-full min-h-lvh  grid grid-cols-1 lg:grid-cols-2  relative  ${
        isDarkMode ? "bg-zinc-900 text-white " : "bg-violet-100 text-black "
      }`}
    >
      <div
        className={` absolute ${isDarkMode ? "opacity-50 " : "opacity-50 "}`}
      >
        {" "}
        <Backgroundv2></Backgroundv2>
      </div>
      <div className="  flex flex-col lg:justify-center sm:px-20  lg:pt-0 pt-20 px-5 z-40 ">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-4xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              M
            </span>
            utable{" "}
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              I
            </span>
            nstruments
          </h1>
          <div className=" font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Site marchand en produits de musique.
          </div>
          <div className="text-md font-Satoshi font-thin 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Pour ce projet j'ai décidé de mettre à l'honneur une de mes passions
            : <b className="text-violet-400">la synthèse modulaire</b> et plus
            particulièrement la compagnie Française Mutable Instruments
            désormais inactive depuis l'année dernière. Page d'acceuil,{" "}
            <b className="text-violet-400">magasin</b> et possibilité de stocker
            des articles en <b className="text-violet-400">favoris</b> ou bien
            directement dans <b className="text-violet-400">son panier</b>.
          </div>
        </div>

        <div className="text-md font-Satoshi font-thin 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind CSS.
        </div>
        <div className="flex-col font-Satoshi font-thin flex sm:inline-block mt-5 ">
          <a
            href="https://github.com/blenkcode/Mutable-Instruments-Shop"
            target="_blank"
            className="z-50"
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex text-lg justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden mb-5">
              <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                Repository
                <FontAwesomeIcon className="ml-3" icon={faGithub} />
              </span>
              <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                Repository
                <FontAwesomeIcon className="ml-3" icon={faGithub} />
              </span>
              <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                Repository
                <FontAwesomeIcon className="ml-3" icon={faGithub} />
              </span>
            </div>
          </a>
          <a
            href="https://mutable-instruments-shop.vercel.app/"
            target="_blank"
            className="z-50 "
          >
            <div className="text-white group border border-zinc-200 hover:border-violet-400 hover:bg-violet-400 hover:bg-opacity-50 border-opacity-50 py-2 px-4 rounded-lg flex text-lg justify-center items-center cursor-pointer transition-all w-fit relative duration-300 overflow-hidden">
              <span className="hover-group: hover:text-sky-600  opacity-0 translate-">
                Visitez
                <FontAwesomeIcon
                  className="ml-3 -rotate-45"
                  icon={faArrowRight}
                />
              </span>
              <span className="transition-all  duration-300 absolute group-hover:-translate-y-10 group-hover:translate-x-20">
                Visitez
                <FontAwesomeIcon
                  className="ml-3 -rotate-45"
                  icon={faArrowRight}
                />
              </span>
              <span className="transition-all   duration-300 absolute translate-y-10  group-hover:-translate-y-0 group-hover:translate-x-0 -translate-x-20">
                Visitez
                <FontAwesomeIcon
                  className="ml-3 -rotate-45"
                  icon={faArrowRight}
                />
              </span>
            </div>
          </a>
        </div>
      </div>
      <div className="  flex flex-col lg:justify-center sm:px-20 xl:pt-0 lg:pt-0 pt-20 px-5 z-40 ">
        <Slider data={data}></Slider>
      </div>
    </div>
  );
}

export default mutable;
