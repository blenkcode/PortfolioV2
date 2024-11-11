import React from "react";
import Image from "next/image";
const ProjectSlicesSante = ({
  img1,
  img2,
  img3,
  lcdo,
  marine,
  sante,
  heaf,
  mutable,
}) => {
  return (
    <div className="flex flex-col space-y-5">
      <div
        className={`h-40 w-full overflow-hidden relative transition-all duration-700 ease-in-out ${
          sante ? "translate-y-0 opacity-100" : "translate-y-52 opacity-0"
        } `}
      >
        <img
          src={img1}
          alt="Large image"
          className="absolute -translate-x-0 h-[100%] min-w-[100%] object-cover"
        />
      </div>
      <div
        className={`h-40 w-full overflow-hidden relative transition-all duration-700 ease-in-out ${
          sante
            ? "translate-y-0 opacity-100 delay-75 "
            : "translate-y-52 opacity-0"
        } `}
      >
        <img
          src={img2}
          alt="Large image"
          className="absolute  h-[300%] min-w-[100%] object-cover"
        />
      </div>
      <div
        className={`h-40  w-full overflow-hidden relative transition-all duration-700 ease-in-out ${
          sante
            ? "translate-y-0 opacity-100 delay-100"
            : "translate-y-52 opacity-0 delay-0"
        } `}
      >
        <img
          src={img3}
          alt="Large image"
          className="absolute -translate-x-0 h-[100%] min-w-[100%] object-cover"
        />
      </div>
    </div>
  );
};

export default ProjectSlicesSante;
