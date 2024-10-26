import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";

function kine() {
  const data = [
    { url: "/sante1.png", id: 1 },
    { url: "/sante2.png", id: 2 },
    { url: "/sante3.png", id: 1 },
    { url: "/sante4.png", id: 2 },
  ];

  return (
    <div
      className={`overflow-hidden font-Noehmi  w-full min-h-lvh  flex lg:flex-row flex-col relative  items-center ${
        isDarkMode ? "bg-zinc-900 text-white " : "bg-violet-100 text-black "
      }`}
    >
      <div
        className={` absolute ${isDarkMode ? "opacity-50 " : "opacity-50 "}`}
      >
        {" "}
      </div>

      <div className="  flex flex-col lg:justify-center sm:px-20  lg:pt-0 pt-20 px-5 z-40 ">
        <div className="flex flex-col  ">
          <h1 className="font-bold text-2xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              S
            </span>
            port -{" "}
            <span
              className={` ${
                isDarkMode ? "text-violet-400" : "text-violet-900 "
              }`}
            >
              S
            </span>
            anté
          </h1>
          <div className="font-Satoshi font-thintext-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Site Vitrine pour cabinet de Kinésithérapie / Ostéopathie
          </div>
          <div className=" font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Situé à Marseillan dans l'Hérault ce cabinet d'ostéopathie et
            kinésithérapie propose différents service , en analyse de course,
            Bike fiting, et massages.
            <br></br>
          </div>
        </div>

        <div className=" font-Satoshi font-thin text-md 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> React, Next.js, Redux, Tailwind CSS,
          Gsap.
        </div>
        <div className="flex-col font-Satoshi font-thin flex sm:inline-block mt-5 ">
          <a
            href="https://github.com/blenkcode/SPORT-SANTE-MEDITERRANEE"
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
            href="https://sport-sante-mediterranee.vercel.app/"
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

export default kine;
