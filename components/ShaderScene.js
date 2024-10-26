import { useRef, useState } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

class WarpMaterial2 extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3() },
        uHover: { value: 5.0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uRadius: { value: 0.5 }, // Ajusté pour le nouveau conteneur
        uAspect: { value: 1.0 },
        uContainerAspect: { value: 1.0 }, // Nouvel uniform pour le ratio du conteneur
      },
      vertexShader: `
        varying vec2 vUv;

        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float iTime;
        uniform vec3 iResolution;
        uniform float uHover;
        uniform vec2 uMouse;
        uniform float uRadius;
        uniform float uAspect;
        uniform float uContainerAspect;
        varying vec2 vUv;

        void main() {
            // Ajuster les coordonnées UV pour le conteneur rectangulaire
            vec2 uv = vUv;
            uv = (2.0 * uv - 1.0);
            uv.x *= uContainerAspect;

            float slowTime = iTime * 0.5;

            // Ajuster la position de la souris pour le conteneur
            vec2 adjustedMouse = uMouse;
            adjustedMouse = (2.0 * adjustedMouse - 1.0);
            adjustedMouse.x *= uContainerAspect;

            float dist = length(uv - adjustedMouse);
            float influence = smoothstep(uRadius * 5.0, 0.5, dist);

            float amplitude = mix(0.1, 0.8, uHover) * influence;

            vec2 distortedUv = uv;
            for(float i = 1.0; i < 10.0; i++){
                distortedUv.x += amplitude / i * cos(i * 2.5 * uv.y + slowTime);
                distortedUv.y += amplitude / i * cos(i * 1.5 * uv.x + slowTime);
            }

            vec3 color = vec3(0.1)/abs(sin(slowTime-distortedUv.y-distortedUv.x));
            gl_FragColor = vec4(color, 1.0);
        }
      `,
    });
  }
}

extend({ WarpMaterial2 });

function ShaderScene({ containerWidth = "10vw", containerHeight = "110%" }) {
  const materialRef = useRef();
  const { viewport, size } = useThree();
  const timeScale = 0.9;
  const [isHovered, setIsHovered] = useState(false);
  const targetHover = useRef(0);
  const currentHover = useRef(0);
  const mousePosition = useRef([0, 0]);

  // Calculer les dimensions réelles du conteneur
  const width = viewport.width * 1; // 10% du viewport
  const height = viewport.height * 1; // 110% de la hauteur
  const containerAspect = width / height;

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value =
        state.clock.elapsedTime * timeScale;
      materialRef.current.uniforms.iResolution.value.set(width, height, 1);
      materialRef.current.uniforms.uAspect.value = size.width / size.height;
      materialRef.current.uniforms.uContainerAspect.value = containerAspect;

      targetHover.current = isHovered ? 1.0 : 0.0;
      currentHover.current +=
        (targetHover.current - currentHover.current) * 0.1;
      materialRef.current.uniforms.uHover.value = currentHover.current;

      materialRef.current.uniforms.uMouse.value.set(
        mousePosition.current[0],
        mousePosition.current[1]
      );
    }
  });

  const handlePointerMove = (e) => {
    if (e.uv) {
      mousePosition.current = [e.uv.x, e.uv.y];
    }
  };

  return (
    <mesh
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
      onPointerMove={handlePointerMove}
    >
      <planeGeometry args={[width, height]} />
      <warpMaterial2 ref={materialRef} />
    </mesh>
  );
}

export default ShaderScene;
