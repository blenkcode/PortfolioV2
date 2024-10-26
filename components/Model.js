import React, { useRef, useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Vector2 } from "three";
import { vertex, fragment } from "../utils/Shader"; // Changement du chemin

export function Model() {
  // Export nommé au lieu de default
  const texture = useTexture("/ValentinMOR.webp");
  const { viewport } = useThree();
  const mouse = useRef(new Vector2());
  const prevMouse = useRef(new Vector2());

  const uniforms = useRef({
    uTexture: { value: texture },
    uMouse: { value: new Vector2(0, 0) },
    uPrevMouse: { value: new Vector2(0, 0) },
    uAberrationIntensity: { value: 1.0 },
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      prevMouse.current.copy(mouse.current);
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    uniforms.current.uMouse.value.copy(mouse.current);
    uniforms.current.uPrevMouse.value.copy(prevMouse.current);
  });

  return (
    <mesh>
      <planeGeometry args={[viewport.width, viewport.height, 55, 55]} />
      <shaderMaterial
        fragmentShader={fragment}
        vertexShader={vertex}
        uniforms={uniforms.current}
        transparent={true}
      />
    </mesh>
  );
}
