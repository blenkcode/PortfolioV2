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
        uMousePos: { value: new THREE.Vector2(0, 0) },
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
      uniform vec2 uMousePos;
      varying vec2 vUv;

      // Fonction de permutation
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      // Simplex noise 2D
      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187,
                          0.366025403784439,
                         -0.577350269189626,
                          0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy));
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                        + i.x + vec3(0.0, i1.x, 1.0));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                               dot(x12.zw,x12.zw)), 0.0);
        m = m*m;
        m = m*m;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 500.0 * dot(m, g);
      }

      void main() {
          vec2 uv = (2.0 * vUv - 1.0) * vec2(iResolution.x/iResolution.y, 1.0);
          float slowTime = iTime * 0.1;
          
          // Utilisation du bruit pour créer un effet liquide
          float noise1 = snoise(uv * 1.5 + vec2(slowTime * 0.5));
          float noise2 = snoise(uv * 2.0 - vec2(slowTime * 0.3));
          float noise3 = snoise(uv * 4.0 + vec2(slowTime * 0.7));
          
          // Combinaison des différentes couches de bruit
          float finalNoise = noise1 * 8.9 + noise2 * 10.4 + noise3 * 2.3;
          
          // Calcul de la distance entre le pointeur et chaque pixel
          float distance = length(uv - uMousePos) * 10.0;
          
          // Appliquer un effet de distorsion en fonction de la distance
          float distortionAmount = mix(0.0, 0.5, clamp(1.0 - distance, 0.0, 1.0));
          uv.x += distortionAmount * finalNoise;
          uv.y += distortionAmount * finalNoise;
          
          vec3 color1 = vec3(0.398, 0.398, 0.398);
          vec3 color2 = vec3(0.167, 0.167, 0.167);
          vec3 color3 = vec3(0.798, 0.798, 0.798);
          
          // Utilisation du bruit pour le mélange des couleurs
          float colorMix = (finalNoise + 1.0) * 0.1;
          
          vec3 color;
          if(colorMix < 0.5) {
              color = mix(color1, color2, colorMix * 2.0);
          } else {
              color = mix(color2, color3, (colorMix - 0.5) * 2.0);
          }
          
          gl_FragColor = vec4(color, 1.0);
      }
      `,
    });
  }
}

extend({ WarpMaterial });

function BackgroundShader() {
  const materialRef = useRef();
  const { viewport } = useThree();
  const timeScale = 0.5;
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
      materialRef.current.uniforms.uMousePos.value.set(mousePos.x, mousePos.y);

      targetHover.current = isHovered ? 1.0 : 0.0;
      currentHover.current +=
        (targetHover.current - currentHover.current) * 0.005;
      materialRef.current.uniforms.uHover.value = currentHover.current;
    }
  });

  const handleMouseMove = (e) => {
    setMousePos({
      x: (e.clientX / viewport.width) * 2 - 1,
      y: -(e.clientY / viewport.height) * 2 + 1,
    });
  };

  return (
    <mesh
      onPointerEnter={(e) => {
        setIsHovered(true);
        handleMouseMove(e);
      }}
      onPointerLeave={() => {
        setIsHovered(false);
      }}
      onPointerMove={handleMouseMove}
    >
      <planeGeometry args={[2, 2]} />
      <warpMaterial ref={materialRef} />
    </mesh>
  );
}

export default BackgroundShader;
