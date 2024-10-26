import React from "react";
import dynamic from "next/dynamic";
import { Canvas } from "@react-three/fiber";

// Chargement dynamique pour éviter les erreurs côté serveur
const CustomShaderMaterial = dynamic(
  () => import("../components/CustomShader"),
  {
    ssr: false,
  }
);

const Shade = () => {
  return (
    <div
      className="w-full h-full"
      style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
    >
      <Canvas style={{ width: "100%", height: "100%" }}>
        <CustomShaderMaterial />
      </Canvas>
    </div>
  );
};

export default Shade;
