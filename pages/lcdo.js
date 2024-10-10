import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../ThemeContext";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";

import Backgroundv2 from "../components/Backgroundv2";

function lcdo() {
  const data = [
    { url: "/lcdo1.webp", id: 1 },
    { url: "/mocklcdo2.png", id: 2 },
    { url: "/mocklcdo3.png", id: 3 },
    { url: "/mocklcdo4.png", id: 4 },
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
          <h1 className="font-bold text-3xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10 w-full">
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              L
            </span>
            e{" "}
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              C
            </span>
            hant{" "}
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              D
            </span>
            es{" "}
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              O
            </span>
            iseaux
          </h1>
          <div className="font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Site Vitrine pour le Festival LCDO
          </div>
          <div className="text-md font-Satoshi font-thin 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Projet en cours de construction!
            <br></br> Interface administrateur / Vitrine / Shop / Line-Up.
          </div>
        </div>

        <div className="text-md font-Satoshi font-thin 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> React, Next.js, Redux, MongoDB,
          Tailwind CSS, Node.js, Express.
        </div>

        <div className="flex-col font-Satoshi font-thin flex sm:inline-block mt-5 ">
          <a
            href="https://github.com/blenkcode/LCDO"
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
            href="https://lcdo-three.vercel.app/"
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

export default lcdo;
