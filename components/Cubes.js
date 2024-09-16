import Spline from "@splinetool/react-spline";
import React from "react";

function Cubes({ onLoad }) {
  const handleLoad = (spline) => {
    // Vérifie si onLoad est une fonction avant de l'appeler
    if (typeof onLoad === "function") {
      onLoad();
    }
  };

  return (
    <div className="">
      <Spline
        onLoad={handleLoad}
        scene="https://prod.spline.design/NLRP-W7ilp5d5eP8/scene.splinecode"
        width={608}
        height={509}
      />
    </div>
  );
}

export default Cubes;
