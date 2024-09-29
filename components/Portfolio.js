import { useRouter } from "next/router";

function Portfolio() {
  const router = useRouter();
  const handleproject = () => {
    router.push("/lcdo");
  };
  const handleheaf = () => {
    router.push("/heaf");
  };
  const handlemutable = () => {
    router.push("/mutable");
  };
  const handlecarby = () => {
    router.push("/kine");
  };

  return (
    <div className="flex font-Noehmi flex-col items-center justify-center w-10/12 2xl:w-8/12 mx-auto relative h-fit pb-24 sm:pt-12 pt-0 2xl:mt-32 mt-32 lg:mt-24 md:mt-16">
      <div className="lg:text-4xl text-2xl text-white lg:mb-32 mb-12   px-5 lg:py-5 py-2">
        Projets 💡
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10  border-0 sm:p-[2rem] p-0 h-fit rounded-md z-50 ">
        <div>
          <div onClick={() => handleproject()} className="relative group">
            <div className="mb-10 border-solid hover:border-violet-500 hover:border-opacity-40 border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./mocklcdo1.png" alt="LCDO" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Web-Application / Vitrine pour Festival de Musique
              </div>
            </div>
          </div>

          <div onClick={() => handleheaf()} className="relative group">
            <div className="hover:border-violet-500 hover:border-opacity-40  border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./h1.png" alt="Heaf" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Web-Application santé et conseils nutritionels.
              </div>
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => handlemutable()} className="relative group">
            <div className="mb-10 hover:border-violet-500 hover:border-opacity-40 border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./mutable.png" alt="Site marchand" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Site-Marchand de produits pour composition musicale.
              </div>
            </div>
          </div>

          <div onClick={() => handlecarby()} className="relative group">
            <div className="hover:border-violet-500 hover:border-opacity-40  border-solid border-zinc-400 border-4 rounded-md  p-1 bg-zinc-900 transform transition-transform duration-300 group-hover:scale-105">
              {" "}
              <img src="./k1.png" alt="Cabinet Kinesithérapie" />{" "}
              <div className="absolute bottom-0 left-0 right-0 h-2/5 flex justify-center items-center text-white text-sm  z-0 pl-2.5 pr-2.5  bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                Site Vitrine pour cabinet médical
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
