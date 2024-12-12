import React from "react";

export default function Project({ index, title, setModal }) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
      className="text-neutral-200 flex py-10 border-t-1 border-neutral-200 justify-between w-3/4 px-[1vw] group cursor-pointer"
    >
      <h2 className="text-[2.5vw] font-Satoshi group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-[-3vw]">
        {title}
      </h2>

      <p className="font-thin translate-y-[80%] text-[1.2vw] group-hover:opacity-60 transition-all duration-300 group-hover:translate-x-[3vw]">
        Design & Development
      </p>
    </div>
  );
}
