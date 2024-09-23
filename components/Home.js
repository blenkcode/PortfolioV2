import Right from "./Right";
import Stack from "./Stack";
import Portfolio from "./Portfolio";
import Left from "./Left";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Home() {
  const router = useRouter();
  const hiRef = useRef(null);
  const handlerouter = () => {
    router.push("/");
  };
  useEffect(() => {
    gsap.fromTo(
      hiRef.current,
      { opacity: 0, visibility: "hidden" },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        delay: 1,
        ease: "power3.out",
        visibility: "visible",
      }
    );
  }, []);
  return (
    <main className="bg-zinc-900 flex flex-col items-center justify-center relative overflow-hidden h-auto w-full ">
      <img
        ref={hiRef}
        src="/buble4.png"
        className="z-10 invisible absolute bottom-0 right-0 h-auto w-full  transition-opacity  lg:opacity-70 opacity-0"
      />
      <div className="absolute md:top-5 top-4 left-0 w-full h-auto bg-transparent items-center z-50">
        <div className="flex ml-4 md:ml-5 md:mr-5 justify-between items-center  ">
          <img
            onClick={() => handlerouter()}
            class="2xl:w-16 xl:w-14 w-12 shadow-inner cursor-pointer"
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
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full z-40 h-auto min-h-lvh md:flex lg:flex-row flex-col justify-center 2xl:pl-44 2xl:pr-20 xl:pl-40 xl:pr-20 lg:pl-24 lg:pr-20 md:pr-0 md:pt-24 lg:pt-0 md:px-24 md:mt-0 mt-24 pl-6">
          <div className="w-full    ">
            <Left></Left>
          </div>
          <div className="  xl:w-6/12 lg:w-5/12 h-fit mt-14 lg:mt-0   ">
            <Right></Right>
          </div>
        </div>
        <div className="lg:mt-0 lg:pt-0 h-fit  ">
          <div className=" h-fit max-h-f lg:mt-36 mt-24 flex items-center justify-center ">
            <Stack></Stack>
          </div>

          <Portfolio></Portfolio>
        </div>
      </div>
      <div className="z-20 max-w-72 overflow-hidden">
        <div className=" animate-rotate-y w-200 h-256 border-solid border-1 border-zinc-400 opacity-30 rounded-full absolute left-1 -translate-x-1/2 top-10 transform"></div>

        <div className=" animate-rotate-y w-256 h-200 border-solid border-1 border-zinc-600 opacity-40 rounded-full absolute left-1 -translate-x-96 top-10 transform"></div>
        <div className="animate-rotate-y w-96 h-80 border-solid border-1 border-zinc-600 opacity-40 rounded-full absolute left-1 -translate-x-96 top-64 transform"></div>
        <div className="animate-rotate-y w-144 h-128 border-solid border-1 border-zinc-400 opacity-40 rounded-full absolute left-1 -translate-x-3/4 top-80 transform"></div>
        <div className="animate-rotate-y w-192 h-160 bg-zinc-950 opacity-40 rounded-full blur-3xl absolute left-1 -translate-x-1/3 top-72 transform"></div>
        <div className=" w-256 h-200 bg-violet-900 opacity-10 rounded-full blur-3xl absolute left-1 -translate-x-1/2 top-10 transform"></div>
        <div className=" w-256 h-200 bg-zinc-600 opacity-5 rounded-full blur-3xl absolute left-10 -translate-x-1/2 top-20 transform"></div>
        <div className=" w-144 h-128 bg-zinc-600 opacity-15 rounded-full blur-3xl absolute left-1 -translate-x-7 top-72 transform"></div>
      </div>
    </main>
  );
}

export default Home;
