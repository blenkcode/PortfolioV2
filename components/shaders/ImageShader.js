import React, { useEffect, useRef } from "react";

const fragmentShader = `
  precision mediump float;
  
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform vec2 uGridSize;
  
  varying vec2 vUv;
  
  void main() {
    // Calculer la position dans la grille
    vec2 grid = floor(vUv * uGridSize) / uGridSize;
    vec2 gridUv = fract(vUv * uGridSize);
    
    // Calculer la distance depuis le centre
    vec2 center = vec2(0.5, 0.5);
    float dist = distance(grid, center);
    
    // Effet de séparation qui augmente vers l'extérieur
    float separation = dist * 0.1 * (1.0 + sin(uTime * 0.5) * 0.2);
    vec2 offset = (grid - center) * separation;
    
    // Appliquer l'offset à la position UV
    vec2 finalUv = (grid + gridUv) + offset;
    
    // Vérifier si nous sommes dans les limites de la texture
    if (finalUv.x < 0.0 || finalUv.x > 1.0 || finalUv.y < 0.0 || finalUv.y > 1.0) {
      discard; // Rendre transparent
    } else {
      gl_FragColor = texture2D(uTexture, finalUv);
    }
  }
`;

const vertexShader = `
  attribute vec2 position;
  varying vec2 vUv;
  
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const WebGLGridEffect = ({ src, width, height, gridSize = 10 }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL non supporté");
      return;
    }

    // Créer et compiler les shaders
    const vertShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertShader, vertexShader);
    gl.compileShader(vertShader);

    const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragShader, fragmentShader);
    gl.compileShader(fragShader);

    // Créer et lier le programme
    const program = gl.createProgram();
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Créer le buffer pour le quad
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    // Configurer les attributs
    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Configurer la texture
    const texture = gl.createTexture();
    const image = new Image();
    image.src = src;
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

    // Obtenir les locations des uniforms
    const timeLocation = gl.getUniformLocation(program, "uTime");
    const resolutionLocation = gl.getUniformLocation(program, "uResolution");
    const gridSizeLocation = gl.getUniformLocation(program, "uGridSize");

    // Fonction d'animation
    const animate = () => {
      gl.uniform1f(timeLocation, (Date.now() - startTimeRef.current) / 1000);
      gl.uniform2f(resolutionLocation, width, height);
      gl.uniform2f(gridSizeLocation, gridSize, gridSize);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [src, width, height, gridSize]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      style={{ width: width, height: height }}
    />
  );
};

export default WebGLGridEffect;
