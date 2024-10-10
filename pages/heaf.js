import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";
import Backgroundv2 from "../components/Backgroundv2";
import { useTheme } from "../ThemeContext";
function heaf() {
  const data = [
    { url: "/newh1.png", id: 1 },
    { url: "/newh2.png", id: 2 },
    { url: "/h3.png", id: 3 },
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
          <h1 className="font-bold text-3xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              H
            </span>
            eaf
          </h1>
          <div className="font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Web-application de santé, accompagnement et conseil nutritionels.
          </div>
          <div className=" font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Heaf est là pour vous apporter des connaissances et des{" "}
            <b className="text-violet-400">plans nutritionnels</b> guidés avec
            différents programmes, basés sur{" "}
            <b className="text-violet-400">vos objectifs</b> : perdre du poids,
            gagner du muscle, se préparer pour une course.
            <br></br>
            <br></br>
            Suivez vos <b className="text-violet-400">macros</b> et{" "}
            <b className="text-violet-400">calories</b> nécessaires avec nos
            algorithmes de santé.
          </div>
        </div>

        <div className=" font-Satoshi font-thintext-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> Javascript, React, Chart.js Next.js
          Redux, MongoDB, Tailwind CSS, Spline, Express, Node.js.
        </div>
        <div className="flex-col font-Satoshi font-thin flex sm:inline-block mt-5 ">
          <a
            href="https://github.com/blenkcode/heaf-front-end"
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
            href="https://heaf-front-end.vercel.app/"
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

export default heaf;
