import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtom } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SliderKine from "../components/SliderKine";
import { useRouter } from "next/router";
import Background from "../components/Background";
function lcdo() {
  const router = useRouter();
  const handlerouter = () => {
    router.push("/");
  };
  return (
    <div className="overflow-hidden font-Noehmi bg-zinc-900 w-full min-h-lvh text-zinc-200 grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-1 relative  ">
      <div className="blur-xl fixed top-0 right-0 w-full h-screen flex flex-row -translate-y-96  ">
        <Background></Background>
      </div>
      <div className="  flex flex-col sm:p-36 p-10 sm:pt-32 pt-32 z-40 ">
        <img
          onClick={() => handlerouter()}
          class="lg:w-16 w-12 shadow-inner top-5 left-5 cursor-pointer absolute"
          src="logo2.png"
          alt="VM Logo"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-2xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span className="text-violet-400">S</span>
            port - Santé
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

        <div className="flex-col flex sm:inline-block mt-10 sm:mt-20">
          {" "}
          <a
            href="https://github.com/blenkcode/SPORT-SANTE-MEDITERRANEE"
            download
            className="border-zinc-300 border-solid border-2 rounded-md px-5 mb-10 py-3 w-fit hover:border-violet-400 hover:text-violet-400"
          >
            Repository
            <FontAwesomeIcon className="ml-3" icon={faGithub} />
          </a>
          <a
            href="https://sport-sante-mediterranee.vercel.app/"
            download
            className="border-zinc-300 lg:ml-10 ml-0  border-solid border-2 w-fit rounded-md px-5 py-3 hover:border-violet-400 hover:text-violet-400"
          >
            Demo
            <FontAwesomeIcon className="ml-3" icon={faAtom} />
          </a>
        </div>
      </div>
      <div className=" z-50 flex h-auto sm:px-36 px-2 py-10 sm:pr-36 pr:0 2xl:py-36 xl:py-20 lg:py-16 md:py-14 sm:py-12 flex-col justify-start items-center">
        <SliderKine></SliderKine>
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
