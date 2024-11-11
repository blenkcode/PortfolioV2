import React from "react";
import { useTheme } from "../ThemeContext";
const PortfolioCounter = ({ lcdo, sante, heaf, mutable, marine }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`  w-[8vw] aspect-square border-1 border-solid font-Satoshi   flex items-start transition-all  justify-center relative overflow-hidden border-neutral-800 `}
    >
      <div className="flex items-start absolute top-1/2 right-1/2 translate-x-1/2 justify-center -translate-y-1/2 ">
        <div className="text-[2vw] flex items-center justify-center -translate-x-[30%] -translate-y-[65%] w-10 h-10 -rotate-45 overflow-hidden">
          <div
            className={`absolute rotate-45 transition-all duration-500 ${
              lcdo ? "-translate-y-0" : "-translate-y-full"
            }`}
          >
            1
          </div>
          <div
            className={`absolute rotate-45 transition-all duration-500 ${
              sante ? "-translate-y-0" : "translate-y-full"
            }`}
          >
            2
          </div>
          <div
            className={`absolute rotate-45 transition-all duration-500 ${
              marine ? "-translate-y-0" : "-translate-y-full"
            }`}
          >
            3
          </div>
          <div
            className={`absolute rotate-45 transition-all duration-500 ${
              heaf ? "translate-y-0" : "translate-y-full"
            }`}
          >
            4
          </div>
          <div
            className={`absolute rotate-45 transition-all duration-500 ${
              mutable ? "-translate-y-0" : "-translate-y-full"
            }`}
          >
            5
          </div>
        </div>
        <div className="text-[2vw] translate-x-[20%] translate-y-[40%]">5</div>
        <div
          className={`h-[0.01vw] w-2/3 absolute transition-all  translate-y-5 -rotate-45 bg-neutral-800 `}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioCounter;
