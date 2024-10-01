import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SliderLcdo from "../components/SliderLcdo";
import { useRouter } from "next/router";
import Background from "../components/Background";
import Time from "../components/Time";

function lcdo() {
  const router = useRouter();
  const handlerouter = () => {
    // Redirige vers "/" avec un state ou query paramètre
    router.push({
      pathname: "/",
      query: { scrollToPortfolio: true }, // Utilisation d'un query paramètre
    });
  };
  return (
    <div className="overflow-hidden font-Noehmi bg-zinc-900 w-full min-h-lvh text-zinc-200 grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-1 relative  ">
      <div className="blur-xl fixed top-0 right-0 w-full h-screen flex flex-row -translate-y-96  ">
        <Background></Background>
      </div>
      <div className="absolute md:top-7 top-4 left-0 w-full h-auto bg-transparent items-center z-50">
        <div className="flex lg:px-7 px-2 w-full justify-between  items-center  ">
          <div className="flex w-fit ">
            <div
              onClick={handlerouter}
              className="sm:mr-20 text-zinc-200  w-fit  font-Satoshi cursor-pointer font-thin relative group"
            >
              <span className="opacity-0">V</span>
              <span className="opacity-0">/</span>
              <span className="opacity-0">M</span>

              <span className="absolute font-bold -translate-x-4 group-hover:-translate-x-1 transition-all duration-200 2xl:text-base lg:text-sm">
                V
              </span>
              <span className="absolute font-thin text-zinc-300 group-hover:opacity-0 transition-all duration-200 2xl:text-base lg:text-sm">
                /
              </span>
              <span className="absolute font-semibold translate-x-3 2xl:text-base lg:text-sm">
                M
              </span>
            </div>
            <div className="invisible md:visible md:relative absolute -translatey-full lg:-translate-y-0">
              {" "}
              <Time></Time>
            </div>
          </div>
          <div className="flex font-source items-center justify-end w-fit text-zinc-100 ">
            <a
              href="https://www.linkedin.com/in/valentin-mor-a03174114/"
              target="_blank"
              className="lg:mr-7 lg:ml-12 mr-2 ml-5"
            >
              <FontAwesomeIcon
                className="text-xl 2xl:text-2xl lg:text-xl text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faLinkedin}
              />
            </a>
            <a target="_blank" href="https://github.com/blenkcode">
              <FontAwesomeIcon
                className="text-xl 2xl:text-2xl lg:text-xl mr-5 ml-3 lg:ml-0  text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="  flex flex-col sm:px-20 sm:pt-32 pt-20 px-5 z-40 ">
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-3xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span className="text-violet-400">C</span>
            hant des Oiseaux
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
      <div className="  flex h-auto sm:px-36 px-2 py-10 sm:pr-36 pr:0 2xl:py-36 xl:py-20 lg:py-16 md:py-14 sm:py-12 flex-col justify-start items-center z-50">
        <SliderLcdo></SliderLcdo>
      </div>
      <div className="z-20 max-w-72 overflow-hidden">
        <div className="animate-rotate-y w-200 h-256 border-solid border-1 border-zinc-400 opacity-10 rounded-full absolute left-1 -translate-x-1/2 top-10 transform"></div>

        <div className=" w-256 h-200 border-solid border-1 border-zinc-600 opacity-20 rounded-full absolute left-1 -translate-x-96 top-10 transform"></div>
        <div className="animate-rotate-y w-96 h-80 border-solid border-1 border-zinc-600 opacity-30 rounded-full absolute left-1 -translate-x-96 top-64 transform"></div>
        <div className="animate-rotate-y w-200 h-192 border-solid border-1 border-zinc-400 opacity-20 rounded-full absolute left-1 -translate-x-3/4 top-80 transform"></div>
        <div className="animate-rotate-y w-192 h-160 bg-zinc-950 opacity-50 rounded-full blur-3xl absolute left-1 -translate-x-1/3 top-72 transform"></div>
        <div className="animate-rotate-y w-256 h-200 bg-violet-900 opacity-5 rounded-full blur-3xl absolute left-1 -translate-x-1/2 top-10 transform"></div>
        <div className="animate-rotate-y w-256 h-200 bg-zinc-600 opacity-5 rounded-full blur-3xl absolute left-10 -translate-x-1/2 top-20 transform"></div>
        <div className="animate-rotate-y w-144 h-128 bg-zinc-600 opacity-20 rounded-full blur-3xl absolute left-1 -translate-x-7 top-72 transform"></div>
      </div>
    </div>
  );
}

export default lcdo;
