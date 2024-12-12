import React, { useState } from "react";
import Project from "./Project";
import Modal from "./Modal";
const Port = () => {
  const projects = [
    {
      title: "Le Chant Des Oiseaux Festival",
      src: "/lcd.png",
    },
    {
      title: "Sport Santé Méditérrannée ",
      src: "/sante1.webp",
    },
    { title: "Marine Benabou Mastering", src: "/mb.png" },
    { title: "Heaf", src: "/heaf3.png" },
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <div className=" flex flex-col items-center py-20 ">
      <h2 className="text-neutral-200 text-[2vw] w-2/3 mb-[5vw]">
        selected projects <span className="text-[1.5vw]">(4)</span>
      </h2>
      <div className="w-full flex items-center flex-col justify-center relative">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              index={index}
              title={project.title}
              setModal={setModal}
            />
          );
        })}
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default Port;
