"use client";
import React, { useEffect, useRef, useState } from "react";

const fragmentShader = `
    precision mediump float;
    uniform sampler2D uTexture;    
    uniform vec2 uMouse;
    uniform float uAberrationIntensity;
    uniform vec2 uResolution;
    uniform float uTime;

    vec2 getGridCell(vec2 uv, float cellSize) {
        return floor(uv * cellSize) / cellSize;
    }

    void main() {
        vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
        
        // Taille des cellules
        float cellSize = 25.0;
        
        // Obtenir la position de la cellule courante
        vec2 cell = getGridCell(uv, cellSize);
        vec2 cellCenter = cell + 0.5 / cellSize;
        
        // Distance à la souris
        vec2 toMouse = cellCenter - uMouse;
        float distanceToMouse = length(toMouse);
        
        // Paramètres de l'effet
        float radius = 0.4; // Rayon d'influence
        float gap = 0.15; // Taille maximale de l'espace entre les cellules
        
        // Calculer le déplacement
        vec2 displacement = vec2(0.0);
        float spaceEffect = 0.0;
        
        if(distanceToMouse < radius) {
            // Force de répulsion qui diminue avec la distance
            float force = (1.0 - smoothstep(0.0, radius, distanceToMouse));
            
            // Déplacement basé sur la direction depuis la souris
            displacement = normalize(toMouse) * force * gap * uAberrationIntensity;
            
            // Effet d'espacement
            spaceEffect = force * uAberrationIntensity;
        }

        // Position UV de base dans la cellule
        vec2 innerUV = fract(uv * cellSize);
        
        // Créer un espace entre les cellules basé sur la distance à la souris
        float cellMargin = 0.1 * spaceEffect; // Marge de base multipliée par l'effet
        vec2 margin = vec2(cellMargin);
        
        // Si nous sommes dans la marge, rendre le pixel transparent
        if(innerUV.x < margin.x || innerUV.x > 1.0 - margin.x ||
           innerUV.y < margin.y || innerUV.y > 1.0 - margin.y) {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
            return;
        }

        // Remap les UVs pour la partie visible de la cellule
        vec2 remappedUV = (innerUV - margin) / (1.0 - 2.0 * margin);
        vec2 finalUV = (cell + remappedUV / cellSize) + displacement;
        
        // Échantillonner la texture
        vec4 color = texture2D(uTexture, finalUV);
        
        // Animation subtile de flottement
        float wobble = sin(uTime * 2.0 + cellCenter.x * 10.0 + cellCenter.y * 10.0) * 0.001 * uAberrationIntensity;
        displacement += vec2(wobble);
        
        // Ajouter une ombre légère sur les bords
        float edge = smoothstep(0.0, 0.1, min(
            min(innerUV.x - margin.x, 1.0 - margin.x - innerUV.x),
            min(innerUV.y - margin.y, 1.0 - margin.y - innerUV.y)
        ));
        
        color.rgb *= edge;
        
        gl_FragColor = color;
    }
`;

const vertexShader = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const ImageDistortion = ({ imageSrc, className = "", onLoad }) => {
  const canvasRef = useRef(null);
  const requestRef = useRef(null);
  const programRef = useRef(null);
  const glRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [aberrationIntensity, setAberrationIntensity] = useState(0.0);
  const [isHovered, setIsHovered] = useState(false);
  const targetAberrationRef = useRef(0.0);
  const startTimeRef = useRef(Date.now());
  const [time, setTime] = useState(0);

  const loadImage = (src) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
      img.crossOrigin = "anonymous"; // Important pour WebGL
    });
  };

  const createImageTexture = async () => {
    const img = await loadImage(imageSrc);

    // Définir les dimensions basées sur l'image
    setDimensions({ width: img.width, height: img.height });

    return { image: img, width: img.width, height: img.height };
  };

  useEffect(() => {
    const setupWebGL = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const imageData = await createImageTexture();
      if (!imageData) return;

      const devicePixelRatio = window.devicePixelRatio || 1;
      canvas.width = imageData.width * devicePixelRatio;
      canvas.height = imageData.height * devicePixelRatio;
      canvas.style.width = `${imageData.width}px`;
      canvas.style.height = `${imageData.height}px`;

      const gl = canvas.getContext("webgl", {
        alpha: true,
        premultipliedAlpha: false,
        preserveDrawingBuffer: true,
      });

      if (!gl) {
        console.error("WebGL not supported");
        return;
      }
      glRef.current = gl;

      try {
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

        const vShader = gl.createShader(gl.VERTEX_SHADER);
        const fShader = gl.createShader(gl.FRAGMENT_SHADER);
        if (!vShader || !fShader) return;

        gl.shaderSource(vShader, vertexShader);
        gl.shaderSource(fShader, fragmentShader);
        gl.compileShader(vShader);
        gl.compileShader(fShader);

        const program = gl.createProgram();
        if (!program) return;

        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        gl.linkProgram(program);
        gl.useProgram(program);
        programRef.current = program;

        const vertices = new Float32Array([
          -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
        ]);

        const buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

        const aPosition = gl.getAttribLocation(program, "aPosition");
        gl.enableVertexAttribArray(aPosition);
        gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

        const texture = gl.createTexture();
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        // Charger l'image dans la texture
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          imageData.image
        );

        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

        const uResolution = gl.getUniformLocation(program, "uResolution");
        gl.uniform2f(uResolution, canvas.width, canvas.height);

        onLoad?.();
      } catch (error) {
        console.error("WebGL initialization error:", error);
      }
    };

    setupWebGL();
  }, [imageSrc, onLoad]);

  useEffect(() => {
    targetAberrationRef.current = isHovered ? 1.0 : 0.0;
  }, [isHovered]);

  useEffect(() => {
    const animate = () => {
      const gl = glRef.current;
      const program = programRef.current;

      if (!gl || !program) return;

      const currentTime = (Date.now() - startTimeRef.current) / 1000;
      setTime(currentTime);

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const newAberrationIntensity = lerp(
        aberrationIntensity,
        targetAberrationRef.current,
        0.1
      );
      setAberrationIntensity(newAberrationIntensity);

      gl.uniform2f(
        gl.getUniformLocation(program, "uMouse"),
        mousePos.x,
        mousePos.y
      );
      gl.uniform1f(
        gl.getUniformLocation(program, "uAberrationIntensity"),
        newAberrationIntensity
      );
      gl.uniform1f(gl.getUniformLocation(program, "uTime"), currentTime);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [mousePos, aberrationIntensity, time]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: 1.0 - (e.clientY - rect.top) / rect.height,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: dimensions.width ? `${dimensions.width}px` : "auto",
        height: dimensions.height ? `${dimensions.height}px` : "auto",
        background: "transparent",
      }}
      className={`${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

const lerp = (start, end, t) => {
  return start * (1 - t) + end * t;
};

export default ImageDistortion;
