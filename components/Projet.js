import React from "react";
import { useRouter } from "next/router";
const Projet = ({ href, img }) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push(href);
  };
  return (
    <div className="flex items-center justify-center relative ">
      <img
        onClick={handleRoute}
        className="w-full grayscale cursor-pointer hover:grayscale-0 transition-all duration-500 "
        src={img}
      ></img>
      <div className="absolute bottom-5 left-5 backdropp">Hello</div>
    </div>
  );
};

export default Projet;
