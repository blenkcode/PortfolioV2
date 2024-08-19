import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";
import { useRouter } from "next/router";

function carby() {
  const router = useRouter();
  const handlerouter = () => {
    router.push("/");
  };
  return (
    <div className="bg-zinc-900 w-full h-auto text-zinc-200 grid grid-cols-1 md:grid-cols-2 relative ">
      <div className="  flex flex-col p-12 2xl:py-36 2xl:px-44 xl:p-20 lg:p-16 md:p-14 sm:p-12 ">
        <img
          onClick={() => handlerouter()}
          class="w-16 shadow-inner top-5 left-5 cursor-pointer absolute"
          src="logo2.png"
          alt="VM Logo"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-7xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span className="text-violet-400">C</span>
            arby
          </h1>
          <div className="font-bold text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Application Mobile eco-responsable.
          </div>
          <div className="text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            {" "}
            Carby est une application React-Native qui vous aide à prendre
            conscience de votre impact carbone ! <br></br>
            <br></br>Qui a dit que l'
            <b className="text-violet-400">éco-responsabilité</b> ne pouvait pas
            être amusante ? L'application propose de nombreuses fonctionnalités
            telles que des{" "}
            <b className="text-violet-400">tâches écologiques quotidiennes</b>{" "}
            basées sur votre profil et des{" "}
            <b className="text-violet-400">mécanismes de jeu</b> comme le
            leveling, le déblocage de succès et des récompenses cosmétiques.
          </div>
        </div>

        <div className="text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> Javascript, React-Native, Expo,
          Next.js Redux, MongoDB, CSS, Figma, Express, Node.js, external API.
        </div>
        <div className="flex items-center  justify-start w-full mb-16">
          <img
            className="w-10 mr-5 2xl:w-12 md:w-10 h-fit grayscale "
            src="react.png"
          ></img>
          <img
            className="w-10 mr-5  first-letter:2xl:w-12 md:w-10 h-fit grayscale "
            src="next.png"
          ></img>
          <img
            className="w-10 mr-5  2xl:w-12 md:w-10 h-fit grayscale "
            src="redux.png"
          ></img>
          <img
            className="w-10 mr-5 2xl:w-12 md:w-10 h-fit grayscale "
            src="mongo.png"
          ></img>
          <img
            className="w-10 mr-5  2xl:w-12 md:w-10 h-fit grayscale "
            src="tailwind.png"
          ></img>
          <img
            className="w-10 mr-5  2xl:w-12 md:w-10 h-fit grayscale "
            src="expr.png"
          ></img>

          <img className="w-12 grayscale" src="node.png"></img>
        </div>
        <div>
          {" "}
          <a
            href="https://github.com/blenkcode/MindScape-Front-end"
            download
            className="border-zinc-300 border-solid border-2 rounded-md px-5 mb-10 py-3 w-fit hover:border-violet-400 hover:text-violet-400"
          >
            Repository
            <FontAwesomeIcon className="ml-3" icon={faGithub} />
          </a>
          <a
            href="https://mind-scape-front-end.vercel.app/"
            download
            className="border-zinc-300 ml-10  border-solid border-2 w-fit rounded-md px-5 py-3 hover:border-violet-400 hover:text-violet-400"
          >
            Demo
            <FontAwesomeIcon className="ml-3" icon={faAtom} />
          </a>
        </div>
      </div>
      <div className="  w-fit h-lvh  py-12 px-20 2xl:py-36 xl:py-20 lg:py-16 md:py-20 sm:py-20 flex flex-col justify-start items-center">
        <div className="grid  gap-14 2xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
          {" "}
          <img className="w-40" src="./c1.png"></img>
          <img className="w-40" src="./c2.png"></img>
          <img className="w-40" src="./c3.png"></img>{" "}
          <img className="w-40" src="./c4.png"></img>
          <img className="w-40" src="./c5.png"></img>
          <img className="w-40" src="./c6.png"></img>
        </div>
      </div>
    </div>
  );
}

export default carby;
