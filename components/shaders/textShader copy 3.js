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
        float cellSize = 15.0;
        
        // Obtenir le centre de la cellule courante
        vec2 cell = getGridCell(uv, cellSize);
        vec2 cellCenter = cell + 0.5 / cellSize;
        
        // Direction et distance par rapport à la souris
        vec2 toMouse = cellCenter - uMouse;
        float distanceToMouse = length(toMouse);
        
        // Paramètres de l'effet
        float radius = 0.3;
        float maxDisplacement = 0.2;
        
        // Calculer le déplacement
        vec2 displacement = vec2(0.0);
        
        if(distanceToMouse < radius) {
            float force = (1.0 - smoothstep(0.0, radius, distanceToMouse));
            displacement = normalize(toMouse) * force * maxDisplacement * uAberrationIntensity;
            
            // Ajouter une rotation autour de la souris
            vec2 perpendicular = vec2(-toMouse.y, toMouse.x);
            displacement += normalize(perpendicular) * force * maxDisplacement * 0.5;
        }

        // Ajouter un mouvement flottant subtil
        displacement += vec2(
            sin(uTime + cell.x * 6.28) * 0.001,
            cos(uTime + cell.y * 6.28) * 0.001
        ) * uAberrationIntensity;

        // Appliquer le déplacement
        vec2 distortedUV = uv + displacement;
        
        // Échantillonner la texture
        vec4 color = texture2D(uTexture, distortedUV);
        
        // Ajouter une légère bordure de grille (optionnel)
        vec2 gridUV = fract(uv * cellSize);
        float border = step(0.95, max(gridUV.x, gridUV.y));
        color.rgb *= (1.0 - border * 0.1 * uAberrationIntensity);
        
        gl_FragColor = color;
    }
`;

const vertexShader = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const TextDistortion = ({ text, fontSize = "8vw", className = "", onLoad }) => {
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

  const loadFont = async () => {
    const font = new FontFace("Projekt", "url(/fonts/Satoshi-Variable.woff2)", {
      weight: "bold",
    });
    await font.load();
    document.fonts.add(font);
    return font;
  };

  const createTextTexture = async () => {
    await loadFont();
    const textCanvas = document.createElement("canvas");
    const devicePixelRatio =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    const vw = window.innerWidth / 100;
    const fontSizeInPx = parseFloat(fontSize) * vw;

    const ctx = textCanvas.getContext("2d", { alpha: true });
    ctx.font = `bold ${fontSizeInPx}px Projekt`;

    const lines = text.split("\n");
    const lineHeight = fontSizeInPx * 1.2;
    const maxWidth = Math.max(
      ...lines.map((line) => ctx.measureText(line).width)
    );
    const totalHeight = lineHeight * lines.length;

    const padding = fontSizeInPx * 0.9;
    const finalWidth = maxWidth + padding * 2;
    const finalHeight = totalHeight + padding * 2;

    setDimensions({ width: finalWidth, height: finalHeight });

    textCanvas.width = finalWidth * devicePixelRatio;
    textCanvas.height = finalHeight * devicePixelRatio;

    ctx.scale(devicePixelRatio, devicePixelRatio);
    ctx.clearRect(0, 0, finalWidth, finalHeight);

    ctx.textRendering = "optimizeLegibility";
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    ctx.fillStyle = "#E5E5E5";
    ctx.font = `bold ${fontSizeInPx}px Projekt`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    const startY = (finalHeight - totalHeight) / 2 + lineHeight / 2;
    lines.forEach((line, index) => {
      ctx.fillText(line, finalWidth / 2, startY + index * lineHeight);
    });

    return { canvas: textCanvas, width: finalWidth, height: finalHeight };
  };

  useEffect(() => {
    const setupWebGL = async () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const devicePixelRatio =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      const textureData = await createTextTexture();
      if (!textureData) return;

      canvas.width = textureData.width * devicePixelRatio;
      canvas.height = textureData.height * devicePixelRatio;
      canvas.style.width = `${textureData.width}px`;
      canvas.style.height = `${textureData.height}px`;

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
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);

        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          textureData.canvas
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
  }, [text, fontSize, onLoad]);

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

export default TextDistortion;
