import { useRef, useEffect } from "react";
import { useFrame, useThree, extend } from "@react-three/fiber";
import * as THREE from "three";

class WarpScrollMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector3() },
        scrollValue: { value: 0 },
        texture1: { value: null },
        texture2: { value: null },
        texture3: { value: null },
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
        uniform float scrollValue;
        uniform sampler2D texture1;
        uniform sampler2D texture2;
        uniform sampler2D texture3;
        varying vec2 vUv;

        // Fonction de bruit
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

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
          return 130.0 * dot(m, g);
        }

        void main() {
            // Coordonnées UV déformées par le scroll et le temps
            vec2 uv = vUv;
            float time = iTime * 0.2;
            
            // Effet de warping basé sur le scroll
            float scrollEffect = scrollValue * 0.1;
            float noise1 = snoise(uv * 2.0 + vec2(time * 0.5)) * scrollEffect;
            float noise2 = snoise(uv * 3.0 - vec2(time * 0.3)) * (1.0 - scrollEffect);
            
            // Application de la déformation
            vec2 warpedUV = uv + vec2(
                noise1 * 0.1 + noise2 * 0.05,
                noise2 * 0.1 - noise1 * 0.05
            );
            
            // Échantillonnage des textures avec les UV déformées
            vec4 tex1 = texture2D(texture1, warpedUV);
            vec4 tex2 = texture2D(texture2, warpedUV + vec2(scrollEffect * 0.1));
            vec4 tex3 = texture2D(texture3, warpedUV - vec2(scrollEffect * 0.1));
            
            // Mélange des textures basé sur le scroll
            float blend1 = abs(sin(scrollValue * 0.5 + time));
            float blend2 = abs(cos(scrollValue * 0.5 + time));
            float blend3 = abs(sin(scrollValue * 0.5 + time + 2.0));
            
            // Normalisation des facteurs de mélange
            float totalBlend = blend1 + blend2 + blend3;
            blend1 /= totalBlend;
            blend2 /= totalBlend;
            blend3 /= totalBlend;
            
            // Couleur finale
            vec4 finalColor = tex1 * blend1 + tex2 * blend2 + tex3 * blend3;
            
            // Ajout d'un léger effet de vignette
            float vignette = length(vUv - 0.5) * 2.0;
            vignette = 1.0 - vignette * vignette * 0.1;
            
            gl_FragColor = finalColor * vignette;
        }
      `,
    });
  }
}

extend({ WarpScrollMaterial });

function ScrollWarpBackground() {
  const materialRef = useRef();
  const { viewport } = useThree();
  const scrollRef = useRef(0);

  // Chargement des textures
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const loadTexture = (url) => {
      return new Promise((resolve) => {
        textureLoader.load(url, resolve);
      });
    };

    // Chargez vos textures ici
    Promise.all([
      loadTexture("/texture1.jpg"),
      loadTexture("/texture2.jpg"),
      loadTexture("/texture3.jpg"),
    ]).then(([tex1, tex2, tex3]) => {
      if (materialRef.current) {
        materialRef.current.uniforms.texture1.value = tex1;
        materialRef.current.uniforms.texture2.value = tex2;
        materialRef.current.uniforms.texture3.value = tex3;
      }
    });
  }, []);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      scrollRef.current = scrollTop / docHeight;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.iTime.value = state.clock.elapsedTime;
      materialRef.current.uniforms.iResolution.value.set(
        viewport.width,
        viewport.height,
        1
      );
      materialRef.current.uniforms.scrollValue.value = scrollRef.current;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <warpScrollMaterial ref={materialRef} />
    </mesh>
  );
}

export default ScrollWarpBackground;
