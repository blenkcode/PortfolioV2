import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

function Stack({}) {
  return (
    <div className="relative z-10 h-auto flex flex-col justify-center items-center   ">
      <div className="flex   flex-col sm:flex-row items-center justify-center  lg:px-0 sm:pl-0 sm:pb-0 pb-0 w-full overflow-visible relative  ">
        <div
          className="    z-50 flex  opacity-100 translate-y-0 transition 
             
           flex-col lg:flex-row items-center justify-center"
        >
          <div className="2xl:px-16 sm:px-7  lg:w-1/3  lg:translate-x-7 rounded-lg z-10  lg:mt-0 mt-10 relative ">
            <p className="2xl:text-lg  xl:text-base lg:text-sm font-thin text-md text-zinc-200 z-20  font-Satoshi  ">
              J'utilise <b className="text-violet-400 font-bold">TypeScript</b>{" "}
              pour vous offrir des sites modernes, performants et aisément
              maintenables <br /> <br />
              Pour le développement front-end, j'emploie les frameworks
              <b className="text-violet-400 font-bold"> React</b> et sa
              surcouche <b className="text-violet-400 font-bold">Next.js</b>.
              Une gestion des états globaux avec{" "}
              <b className="text-violet-400 font-bold">Redux</b> et pour un
              design soigné et des animations captivantes les librairies{" "}
              <b className="text-violet-400 font-bold">Tailwind CSS</b> &{" "}
              <b className="text-violet-400 font-bold">Gsap</b>
              <br /> <br />
              Pour la gestion de vos serveurs et data-bases je m'appuie sur{" "}
              <b className="text-violet-400 font-bold">Node.js</b>,{" "}
              <b className="text-violet-400 font-bold">Express</b> et{" "}
              <b className="text-violet-400 font-bold">MongoDB</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stack;
