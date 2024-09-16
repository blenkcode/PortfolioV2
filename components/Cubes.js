import React, { useState } from "react";
import dynamic from "next/dynamic";
import Spline from "@splinetool/react-spline";
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

function Cubes({ onLoad }) {
  const [loading, setLoading] = useState(true);

  const handleLoad = (spline) => {
    setLoading(false); // Masquer le loader une fois que la scène est chargée
    if (typeof onLoad === "function") {
      onLoad(spline);
    }
  };

  return (
    <div>
      {/* Loader */}
      <Spline
        onLoad={handleLoad}
        scene="https://prod.spline.design/NLRP-W7ilp5d5eP8/scene.splinecode"
      />
    </div>
  );
}

export default Cubes;
