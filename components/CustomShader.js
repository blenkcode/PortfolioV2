import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float iTime;
  uniform vec2 iResolution;

  float stime, ctime;
  float pixel_size = 0.0;

  void ry(inout vec3 p, float a){  
    float c,s; vec3 q=p;  
    c = cos(a); s = sin(a);  
    p.x = c * q.x + s * q.z;  
    p.z = -s * q.x + c * q.z; 
  }  

  vec3 mb(vec3 p) {
    p.xyz = p.xzy;
    vec3 z = p;
    vec3 dz=vec3(0.0);
    float power = 8.0;
    float r, theta, phi;
    float dr = 1.0;
    
    float t0 = 1.0;
    for(int i = 0; i < 7; ++i) {
      r = length(z);
      if(r > 2.0) continue;
      theta = atan(z.y / z.x);
      phi = asin(z.z / r);
      
      dr = pow(r, power - 1.0) * dr * power + 1.0;
    
      r = pow(r, power);
      theta = theta * power;
      phi = phi * power;
      
      z = r * vec3(cos(theta)*cos(phi), sin(theta)*cos(phi), sin(phi)) + p;
      
      t0 = min(t0, r);
    }
    return vec3(0.5 * log(r) * r / dr, t0, 0.0);
  }

  vec3 f(vec3 p){ 
    ry(p, iTime*0.2);
    return mb(p); 
  } 

  float softshadow(vec3 ro, vec3 rd, float k ){ 
    float akuma=1.0, h=0.0; 
    float t = 0.01;
    for(int i=0; i < 50; ++i){ 
      h=f(ro+rd*t).x; 
      if(h<0.001) return 0.02; 
      akuma=min(akuma, k*h/t); 
      t+=clamp(h,0.01,2.0); 
    } 
    return akuma; 
  } 

  vec3 nor( in vec3 pos )
  {
    vec3 eps = vec3(0.001,0.0,0.0);
    return normalize( vec3(
      f(pos+eps.xyy).x - f(pos-eps.xyy).x,
      f(pos+eps.yxy).x - f(pos-eps.yxy).x,
      f(pos+eps.yyx).x - f(pos-eps.yyx).x ) );
  }

  vec3 intersect( in vec3 ro, in vec3 rd )
  {
    float t = 1.0;
    float res_t = 0.0;
    float res_d = 1000.0;
    vec3 c, res_c;
    float max_error = 1000.0;
    float d = 1.0;
    float pd = 100.0;
    float os = 0.0;
    float step = 0.0;
    float error = 1000.0;
    
    for( int i=0; i<48; i++ )
    {
      if( error < pixel_size*0.5 || t > 20.0 ) {
        break;
      } else {
        c = f(ro + rd*t);
        d = c.x;

        if(d > os) {
          os = 0.4 * d*d/pd;
          step = d + os;
          pd = d;
        } else {
          step = -os; 
          os = 0.0; 
          pd = 100.0; 
          d = 1.0;
        }

        error = d / t;

        if(error < max_error) {
          max_error = error;
          res_t = t;
          res_c = c;
        }
      
        t += step;
      }
    }
    if( t>20.0 ) res_t=-1.0;
    return vec3(res_t, res_c.y, res_c.z);
  }

  void mainImage( out vec4 fragColor, in vec2 fragCoord ) { 
    // Correct handling of resolution
    vec2 uv = fragCoord / iResolution.xy;
    uv = uv * 2.0 - 1.0; // Map to range [-1, 1]
    uv.x *= iResolution.x / iResolution.y; // Preserve aspect ratio

    pixel_size = 1.0 / (iResolution.x * 3.0);
    
    stime = 0.7 + 0.3 * sin(iTime * 0.4); 
    ctime = 0.7 + 0.3 * cos(iTime * 0.4); 

    vec3 ta = vec3(0.0, 0.0, 0.0); 
    vec3 ro = vec3(0.0, 3.0 * stime * ctime, 3.0 * (1.0 - stime * ctime));

    vec3 cf = normalize(ta - ro); 
    vec3 cs = normalize(cross(cf, vec3(0.0, 1.0, 0.0))); 
    vec3 cu = normalize(cross(cs, cf)); 
    vec3 rd = normalize(uv.x * cs + uv.y * cu + 3.0 * cf); 

    vec3 bg = exp(uv.y - 2.0) * vec3(0.4, 1.6, 1.0);
    float halo = clamp(dot(normalize(vec3(-ro.x, -ro.y, -ro.z)), rd), 0.0, 1.0); 
    vec3 col = bg + vec3(1.0, 0.8, 0.4) * pow(halo, 17.0); 

    vec3 res = intersect(ro, rd);
    if(res.x > 0.0){
      vec3 p = ro + res.x * rd;
      vec3 n = nor(p); 
      float shadow = softshadow(p, normalize(vec3(0.1, 0.8, 0.6)), 10.0);

      float dif = max(0.0, dot(n, normalize(vec3(0.1, 0.8, 0.6)))); 
      float sky = 0.6 + 0.4 * max(0.0, dot(n, vec3(0.0, 1.0, 0.0))); 
      float bac = max(0.3 + 0.7 * dot(vec3(-0.1, -1.0, -0.6), n), 0.0); 
      float spe = max(0.0, pow(clamp(dot(normalize(vec3(0.1, 0.8, 0.6)), reflect(rd, n)), 0.0, 1.0), 10.0));

      vec3 lin = 4.5 * vec3(1.64, 1.27, 0.99) * dif * shadow; 
      lin += 0.8 * bac * vec3(1.64, 1.27, 0.99); 
      lin += 0.6 * sky * vec3(0.6, 1.5, 1.0) * shadow; 
      lin += 3.0 * spe * shadow; 

      res.y = pow(clamp(res.y, 0.0, 1.0), 0.55);
      vec3 tc0 = 0.5 + 0.5 * sin(3.0 + 4.2 * res.y + vec3(0.0, 0.5, 1.0));
      col = lin * vec3(0.9, 0.8, 0.6) *  0.2 * tc0;
      col = mix(col, bg, 1.0 - exp(-0.001 * res.x * res.x)); 
    } 

    col = pow(clamp(col, 0.0, 1.0), vec3(0.45)); 
    col = col * 0.6 + 0.4 * col * col * (3.0 - 2.0 * col);  
    col = mix(col, vec3(dot(col, vec3(0.33))), -0.5);  
    col *= 0.5 + 0.5 * pow(16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y), 0.7);  

    fragColor = vec4(col.xyz, 1.0); 
  }

  void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
  }
`;

export default function CustomShaderMaterial() {
  const meshRef = useRef();
  const { size, mouse } = useThree(); // Récupérer la taille du canvas et la position de la souris
  const start = Date.now();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.iTime.value =
        (Date.now() - start) * 0.001;

      // Mettre à jour iResolution avec la taille actuelle du canvas
      meshRef.current.material.uniforms.iResolution.value.set(
        size.width,
        size.height
      );

      // Mettre à jour iMouse avec la position actuelle de la souris
      meshRef.current.material.uniforms.iMouse.value.set(
        (mouse.x * size.width) / 2,
        (mouse.y * size.height) / 2
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        uniforms={{
          iTime: { value: 0 },
          iResolution: { value: new THREE.Vector2(size.width, size.height) },
          iMouse: { value: new THREE.Vector2(0, 0) }, // Uniforme pour la position de la souris
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}
