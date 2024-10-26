import React from "react";
import { useRouter } from "next/router";
const Projet = ({ href, img }) => {
  const router = useRouter();

  const handleRoute = () => {
    router.push(href);
  };
  return (
    <div className="flex items-center justify-center ">
      <img
        className="w-96  transition-all duration-500 hover:-translate-y-1"
        src={img}
      ></img>
    </div>
  );
};

export default Projet;
