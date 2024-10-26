import { useRef, useState } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

class WarpMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3() },
        uHover: { value: 0.5 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
      uniform float iTime;
      uniform vec3 iResolution;
      uniform float uHover;
      varying vec2 vUv;
  
      void main() {
          vec2 uv = (2.0 * vUv - 1.0) * vec2(iResolution.x/iResolution.y, 1.0);
          
          float slowTime = iTime * 0.3;
          
          float amplitude = mix(0.5, 1.9, uHover);
          
          for(float i = 1.0; i < 10.0; i++){
              uv.x += amplitude / i * cos(i * 2.5 * uv.y + slowTime);
              uv.y += amplitude / i * cos(i * 1.5 * uv.x + slowTime);
          }
          
          vec3 color1 = vec3(0.198, 0.198, 0.198);  // Votre première 
          vec3 color2 = vec3(0.067, 0.204, 0.345);        // Noir
          vec3 color3 = vec3(0.898, 0.898, 0.898);  // Par exemple indigo-700, à ajuster selon vos besoins
          
          // Crée un facteur d'animation qui oscille entre 0 et 1
          float t = abs(sin(slowTime-uv.y-uv.x));
          
          // Utilise le facteur t pour mélanger les trois couleurs
          vec3 color;
          if(t < 0.5) {
              // Mélange entre color1 et color2 pour la première moitié du cycle
              color = mix(color1, color2, t * 2.0);
          } else {
              // Mélange entre color2 et color3 pour la seconde moitié du cycle
              color = mix(color2, color3, (t - 0.5) * 2.0);
          }
          
          gl_FragColor = vec4(color, 1.0);
      }
      `,
    });
  }
}

extend({ WarpMaterial });

function ShaderSceneCopy() {
  const materialRef = useRef();
  const { viewport } = useThree();
  const timeScale = 0.5;
  const [isHovered, setIsHovered] = useState(false);
  const targetHover = useRef(0);
  const currentHover = useRef(0);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value =
        state.clock.elapsedTime * timeScale;
      materialRef.current.uniforms.iResolution.value.set(
        viewport.width,
        viewport.height,
        1
      );

      // Animation plus fluide du hover avec un facteur d'interpolation plus doux
      targetHover.current = isHovered ? 1.0 : 0.0;
      currentHover.current +=
        (targetHover.current - currentHover.current) * 0.005; // Réduit de 0.1 à 0.05
      materialRef.current.uniforms.uHover.value = currentHover.current;
    }
  });

  return (
    <mesh
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <planeGeometry args={[2, 2]} />
      <warpMaterial ref={materialRef} />
    </mesh>
  );
}

export default ShaderSceneCopy;
