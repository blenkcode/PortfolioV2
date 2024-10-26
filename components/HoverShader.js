// hoverShader.js
import * as THREE from "three";
import { extend } from "@react-three/fiber";

class HoverDistortMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      uniforms: {
        iTime: { value: 0.0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uResolution: { value: new THREE.Vector2(1, 1) },
        uHover: { value: 0.0 },
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
        uniform vec2 uMouse;
        uniform vec2 uResolution;
        uniform float uHover;
        
        varying vec2 vUv;

        void main() {
          vec2 uv = vUv;
          vec2 mouse = uMouse * 0.5 + 0.5;
          
          float dist = distance(uv, mouse);
          float strength = uHover * smoothstep(0.5, 0.0, dist);
          
          uv += strength * vec2(
            sin(uv.x * 10.0 + iTime) * 0.1,
            cos(uv.y * 10.0 + iTime) * 0.1
          );
          
          vec3 color = vec3(0.1)/abs(sin(iTime-uv.y-uv.x));
          
          gl_FragColor = vec4(color, strength * 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });
  }
}

extend({ HoverDistortMaterial });

export { HoverDistortMaterial };
