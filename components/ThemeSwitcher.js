import { useState } from "react";
import { useTheme } from "../ThemeContext";
const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 border-1  border-solid text-white rounded-full relative lg:mr-10 mr-5  px-1 overflow-hidden scale-90 ${
        isDarkMode
          ? "bg-zinc-700 border-zinc-300 "
          : " border-zinc-700 bg-transparent"
      }`}
    >
      {" "}
      <div
        className={`w-3 h-3 scale-125  rounded-3xl absolute top-2 left-2 -translate-x-1 z-20 transition-all duration-300 ${
          isDarkMode
            ? "opacity-100 bg-zinc-700"
            : "opacity-0 bg-violet-800 translate-x-full"
        }`}
      ></div>
      <div
        className={`w-5 h-5  transition-all duration-300 rounded-full z-10 ${
          isDarkMode ? "bg-zinc-200" : "translate-x-6 bg-violet-800"
        }`}
      ></div>
    </button>
  );
};

export default ThemeSwitcher;
