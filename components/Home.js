import Language from "./Language";
import Right from "./right";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import Left from "./Left";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const handlerouter = () => {
    router.push("/");
  };
  return (
    <main className="bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden  ">
      <div className="absolute top-5 left-0 w-full h-auto bg-transparent items-center z-50">
        <div className="flex mx-5 justify-between items-center  ">
          <img
            onClick={() => handlerouter()}
            class="w-16 shadow-inner cursor-pointer"
            src="logo2.png"
            alt="VM Logo"
          />
          <div className="flex font-source justify-end w-44 ">
            <a href="https://www.linkedin.com/in/valentin-mor-a03174114/">
              <FontAwesomeIcon
                className="text-2xl mr-5  text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faLinkedin}
              />
            </a>
            <a href="https://github.com/blenkcode">
              <FontAwesomeIcon
                className="text-2xl mr-5  text-zinc-200 transition duration-200 ease-in-out hover:text-violet-400"
                icon={faGithub}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-rows-3">
        <div className="w-full z-40 min-h-screen grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <Left></Left>
          </div>
          <div className="md:col-span-2 pb-10 pt-9 w-full h-fit flex flex-col items-center justify-center">
            <Right></Right>
          </div>
        </div>
        <div className="bg-zinc-900 min-h-screen flex items-center justify-center">
          <Stack></Stack>
        </div>
        <div className="flex justify-center items-center bg-zinc-900 min-h-screen">
          <Portfolio></Portfolio>
        </div>
      </div>
      <div className="z-20 max-w-72 overflow-hidden">
        <div className="animate-rotate-y w-200 h-256 border-solid border-1 border-zinc-400 opacity-10 rounded-full absolute left-1 -translate-x-1/2 top-10 transform"></div>

        <div className="animate-rotate-y w-256 h-200 border-solid border-1 border-zinc-600 opacity-20 rounded-full absolute left-1 -translate-x-96 top-10 transform"></div>
        <div className="animate-rotate-y w-96 h-80 border-solid border-1 border-zinc-600 opacity-20 rounded-full absolute left-1 -translate-x-96 top-64 transform"></div>
        <div className="animate-rotate-y w-200 h-192 border-solid border-1 border-zinc-400 opacity-20 rounded-full absolute left-1 -translate-x-3/4 top-80 transform"></div>
        <div className="animate-rotate-y w-192 h-160 bg-zinc-950 opacity-10 rounded-full blur-3xl absolute left-1 -translate-x-1/3 top-72 transform"></div>
        <div className="animate-rotate-y w-256 h-200 bg-violet-900 opacity-5 rounded-full blur-3xl absolute left-1 -translate-x-1/2 top-10 transform"></div>
        <div className="animate-rotate-y w-144 h-128 bg-zinc-600 opacity-10 rounded-full blur-3xl absolute left-1 -translate-x-7 top-72 transform"></div>
      </div>
    </main>
  );
}

export default Home;
