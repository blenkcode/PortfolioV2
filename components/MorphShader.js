import React, { useEffect, useRef, useState } from "react";

const fragmentShader = `
    precision mediump float;
    
    uniform sampler2D uTexture;    
    uniform vec2 uMouse;
    uniform vec2 uPrevMouse;
    uniform float uAberrationIntensity;
    uniform vec2 uResolution;
    
    void main() {
        vec2 uv = vec2(
          gl_FragCoord.x / uResolution.x,
          1.0 - (gl_FragCoord.y / uResolution.y)
        );
        
        // Définir la taille de base de la grille
        float gridSize = 8.0;
        
        // Calculer la distance au point de la souris
        vec2 mouseDirection = uMouse - uPrevMouse;
        vec2 toMouse = uv - uMouse;
        float distanceToMouse = length(toMouse);
        float strength = smoothstep(0.9, 0.0, distanceToMouse);
        
        // Calculer les coordonnées de la grille
        vec2 gridUV = uv * gridSize;
        vec2 gridIndex = floor(gridUV);
        
        // Calculer le centre du carré de la grille
        vec2 centerOfPixel = (gridIndex + vec2(0.5, 0.5)) / gridSize;
        
        // Calculer l'offset pour la distortion
        vec2 pixelToMouseDirection = centerOfPixel - uMouse;
        float pixelDistanceToMouse = length(pixelToMouseDirection);
        float distortionStrength = smoothstep(0.4, 0.0, pixelDistanceToMouse);
        vec2 uvOffset = distortionStrength * -mouseDirection * 0.8;
        
        // Appliquer la distortion et l'aberration chromatique
        vec2 uv2 = uv - uvOffset;
        
        vec4 colorR = texture2D(uTexture, uv2 + vec2(distortionStrength * uAberrationIntensity * 0.55, 0.0));
        vec4 colorG = texture2D(uTexture, uv2);
        vec4 colorB = texture2D(uTexture, uv2 - vec2(distortionStrength * uAberrationIntensity * 0.55, 0.0));
        
        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
    }
`;

const vertexShader = `
    attribute vec2 aPosition;
    
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

const ImageDistortion = ({
  imageUrl,
  width = 800,
  height = 600,
  easeFactor = 0.02,
}) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(null);
  const programRef = useRef(null);
  const glRef = useRef(null);

  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [targetMousePos, setTargetMousePos] = useState({ x: 0.5, y: 0.5 });
  const [prevMousePos, setPrevMousePos] = useState({ x: 0.5, y: 0.5 });
  const [aberrationIntensity, setAberrationIntensity] = useState(0.0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl", { preserveDrawingBuffer: true });
    glRef.current = gl;

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // Activer la transparence
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Créer et compiler les shaders
    const vShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vShader, vertexShader);
    gl.compileShader(vShader);

    const fShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fShader, fragmentShader);
    gl.compileShader(fShader);

    // Créer et lier le programme
    const program = gl.createProgram();
    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    // Configurer les vertices
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    // Charger la texture
    const texture = gl.createTexture();
    const image = new Image();
    image.src = imageUrl;
    image.crossOrigin = "anonymous";

    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    };

    // Définir les uniforms initiaux
    const uResolution = gl.getUniformLocation(program, "uResolution");
    gl.uniform2f(uResolution, width, height);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imageUrl, width, height]);

  useEffect(() => {
    const animate = () => {
      const gl = glRef.current;
      const program = programRef.current;

      if (!gl || !program) return;

      // Clear with transparency
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      // Mettre à jour la position de la souris avec lerp
      const newMousePos = {
        x: lerp(mousePos.x, targetMousePos.x, easeFactor),
        y: lerp(mousePos.y, targetMousePos.y, easeFactor),
      };
      setMousePos(newMousePos);

      // Mettre à jour l'intensité de l'aberration
      setAberrationIntensity(Math.max(0.0, aberrationIntensity - 0.05));

      // Mettre à jour les uniforms
      const uMouse = gl.getUniformLocation(program, "uMouse");
      gl.uniform2f(uMouse, newMousePos.x, newMousePos.y);

      const uPrevMouse = gl.getUniformLocation(program, "uPrevMouse");
      gl.uniform2f(uPrevMouse, prevMousePos.x, prevMousePos.y);

      const uAberrationIntensity = gl.getUniformLocation(
        program,
        "uAberrationIntensity"
      );
      gl.uniform1f(uAberrationIntensity, aberrationIntensity);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePos, targetMousePos, prevMousePos, aberrationIntensity, easeFactor]);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    setPrevMousePos(targetMousePos);
    setTargetMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
    setAberrationIntensity(1.0);
  };

  const handleMouseEnter = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    const newPos = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };

    setMousePos(newPos);
    setTargetMousePos(newPos);
  };

  const handleMouseLeave = () => {
    setTargetMousePos(prevMousePos);
  };

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full flex items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default ImageDistortion;
