import React, { useEffect, useState } from "react";

import { useTheme } from "../ThemeContext";
import Svg from "./Svg";
function Stack({ mainRef }) {
  const { isDarkMode } = useTheme();
  return (
    <div className="relative mt-64 z-10 h-auto flex flex-col justify-center items-center   ">
      {/* <div className="2xl:px-16 sm:px-7 h-fit lg:w-1/2 flex items-center justify-center flex-col rounded-lg z-10  lg:mt-0 mt-10 relative ">
        <p
          className={`  xl:text-2xl lg:text-xl font-thin text-2xl z-20 flex items-center justify-center   font-Satoshi ${
            isDarkMode ? "text-white " : "text-zinc-100 "
          } `}
        >
          <div>Conception et développement </div>
          <div>d'écosystèmes web & mobiles</div>
          <div>avancés et intuitifs.</div>
        </p>
      </div> */}
    </div>
  );
}

export default Stack;
