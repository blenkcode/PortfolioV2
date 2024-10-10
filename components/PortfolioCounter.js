import React from "react";
import { useTheme } from "../ThemeContext";
const PortfolioCounter = ({ lcdo, sante, heaf, mutable, carby }) => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={` h-32 w-32 border-2 border-solid  rounded-full flex items-start transition-all  justify-center relative overflow-hidden ${
        isDarkMode ? "border-zinc-500" : "border-zinc-800"
      } `}
    >
      <div className="flex items-start absolute top-1/2 right-1/2 translate-x-1/2 justify-center -translate-y-1/2 ">
        <div className="text-3xl flex items-center justify-center -translate-x-3 -translate-y-6 w-10 h-10 -rotate-45 overflow-hidden">
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
              carby ? "-translate-y-0" : "-translate-y-full"
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
        <div className="text-3xl translate-x-1 translate-y-5">5</div>
        <div
          className={`h-1 w-2/3 absolute transition-all  translate-y-5 -rotate-45 ${
            isDarkMode ? "bg-zinc-500" : "bg-zinc-800"
          } `}
        ></div>
      </div>
    </div>
  );
};

export default PortfolioCounter;
