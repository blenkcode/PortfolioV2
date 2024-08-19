import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Slider from "../components/Slider";
import { useRouter } from "next/router";

function projets() {
  const router = useRouter();
  const handlerouter = () => {
    router.push("/");
  };
  return (
    <div className="bg-zinc-900 w-full h-auto text-zinc-200 grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-1 relative ">
      <div className="  flex flex-col p-36  ">
        <img
          onClick={() => handlerouter()}
          class="w-16 shadow-inner top-5 left-5  absolute cursor-pointer"
          src="logo2.png"
          alt="VM Logo"
        />
        <div className="flex flex-col justify-center ">
          <h1 className="font-bold text-7xl 2xl:text-7xl xl-text-7xl lg:text-6xl md:text-6xl sm:text-5xl mb-10 xs:p-10">
            <span className="text-violet-400">M</span>
            <span>i</span>
            <span>n</span>
            <span>d</span>
            <span className="text-violet-400">S</span>
            <span>c</span>
            <span>a</span>
            <span>p</span>
            <span>e</span>
          </h1>
          <div className="font-bold text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Web-application de gestion de projets en groupe
          </div>
          <div className="text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
            Conçu pour maximiser la{" "}
            <b className="text-violet-400">collaboration</b> et l'efficacité,
            Mindscape vous permet de créer des{" "}
            <b className="text-violet-400">projets de groupe</b> en toute
            simplicité. Gérez vos <b className="text-violet-400">tâches</b> et
            planifiez vos <b className="text-violet-400">événements</b> avec des{" "}
            <b className="text-violet-400">calendriers partagés</b>. Améliorez
            la communication avec les fonctionnalités de <b>chat de groupe </b>
            et de <b className="text-violet-400">chat privé</b>, permettant des
            échanges instantanés et fluides.
          </div>
        </div>

        <div className="text-xl 2xl:text-xl xl-text-xl lg:text-lg md:text-sm sm:text-sm mb-10">
          <u>Technologies utilisées :</u> React, Next.js, Redux, MongoDB, CSS,
          Express, Socket.IO, Node.js.
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
      <div className="  flex h-lvh px-36 py-36 pr-36 2xl:py-36 xl:py-20 lg:py-16 md:py-14 sm:py-12flex flex-col justify-start items-center">
        <Slider></Slider>
      </div>
    </div>
  );
}

export default projets;
