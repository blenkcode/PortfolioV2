import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEnvelope,
  faAtom,
} from "@fortawesome/free-solid-svg-icons";
function Portfolio() {
  const router = useRouter();
  const handleproject = () => {
    router.push("/projets");
  };
  const handleheaf = () => {
    router.push("/heaf");
  };
  const handlemutable = () => {
    router.push("/mutable");
  };
  const handlecarby = () => {
    router.push("/carby");
  };

  return (
    <div className="flex flex-col items-center justify-center w-10/12 2xl:w-8/12 mx-auto relative h-fit pb-24 sm:pt-12 pt-0 2xl:mt-0 mt-60 lg:mt-24">
      <div className="text-4xl text-zinc-100 mb-32 border-zinc-500  border-l-2  px-5 py-5 ">
        Projets 💡
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-solid sm:border-2 sm:border-zinc-200 border-0 sm:p-[2rem] p-0 h-fit rounded-md z-50 ">
        <div>
          <div onClick={() => handleproject()} className="relative group">
            <div className="mb-10 border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./ms11.png" alt="ms11" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Web-Application de gestion de projets en groupe.
              </div>
            </div>
          </div>

          <div onClick={() => handleheaf()} className="relative group">
            <div className=" border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./h1.png" alt="ms11" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Web-Application santé et conseils nutritionels.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => handlemutable()} className="relative group">
            <div className="mb-10 border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./mutable.png" alt="ms11" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Site-Marchand de produits pour composition musicale.
              </div>
            </div>
          </div>

          <div onClick={() => handlecarby()} className="relative group">
            <div className=" border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./carbscreens.png" alt="ms11" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm  z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Application Mobile eco-responsable.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
