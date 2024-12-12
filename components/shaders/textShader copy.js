// Dans la partie des shaders, ajoutez l'uniform uTime
const fragmentShader = `
    precision mediump float;
    uniform sampler2D uTexture;    
    uniform vec2 uMouse;
    uniform vec2 uPrevMouse;
    uniform float uAberrationIntensity;
    uniform vec2 uResolution;
    uniform float uTime; // Ajout du temps

    // Fonction de noise modifiée
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);

        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));

        vec2 u = f * f * (3.0 - 2.0 * f);

        return mix(a, b, u.x) +
                (c - a)* u.y * (1.0 - u.x) +
                (d - b) * u.x * u.y;
    }

    void main() {
        vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
        vec2 mouseDirection = uMouse - uPrevMouse;
        vec2 toMouse = uv - uMouse;
        
        float aspectRatio = uResolution.x / uResolution.y;
        vec2 scaledDistance = vec2(toMouse.x * aspectRatio, toMouse.y);
        float distanceToMouse = length(scaledDistance) * 3.9;
        
        // Animation du noise basée sur le temps
        vec2 noiseCoord = uv * 5.0; // Échelle du noise
        float noiseValue = noise(noiseCoord + uTime * 0.5); // Animation du noise
        
        // Combiner le noise avec l'effet de hover
        float distortionAmount = exp(-distanceToMouse * 1.5) * uAberrationIntensity;
        vec2 uvOffset = normalize(toMouse) * distortionAmount * 0.1;
        
        // Ajouter le noise à la distorsion
        uvOffset += vec2(
            noiseValue * cos(uTime) * 0.02,
            noiseValue * sin(uTime) * 0.02
        ) * uAberrationIntensity;
        
        vec2 finalUV = uv + uvOffset;
        vec4 color = texture2D(uTexture, finalUV);
        
        gl_FragColor = color;
    }
`;

// Dans la partie composant React, ajoutez un state pour le temps
const TextDistortion = ({ text, fontSize = "8vw", className = "", onLoad }) => {
  // ... autres states ...
  const [time, setTime] = useState(0);
  const startTimeRef = useRef(Date.now());

  // Dans l'effet d'animation, ajoutez la mise à jour du temps
  useEffect(() => {
    const animate = () => {
      const gl = glRef.current;
      const program = programRef.current;

      if (!gl || !program) return;

      // Mettre à jour le temps
      const currentTime = (Date.now() - startTimeRef.current) / 1000;
      setTime(currentTime);

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // ... autres animations ...

      // Ajouter l'uniform de temps
      gl.uniform1f(gl.getUniformLocation(program, "uTime"), currentTime);

      // ... reste du code d'animation ...

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [
    mousePos,
    targetMousePos,
    prevMousePos,
    aberrationIntensity,
    isTransitioning,
    time,
  ]);

  // ... reste du composant ...
};
