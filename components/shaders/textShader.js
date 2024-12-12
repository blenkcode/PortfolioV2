"use client";
import React, { useEffect, useRef, useState } from "react";

const fragmentShader = `
    precision mediump float;
    uniform sampler2D uTexture;    
    uniform vec2 uMouse;
    uniform vec2 uPrevMouse;
    uniform float uAberrationIntensity;
    uniform vec2 uResolution;
    uniform float uTime;

    // Fonction de hash pour générer du bruit pseudo-aléatoire
    vec2 hash( vec2 p ) {
        p = vec2(dot(p,vec2(127.1,311.7)), dot(p,vec2(269.5,183.3)));
        return -1.0 + 2.0*fract(sin(p)*43758.5453123);
    }

    // Fonction de bruit de Perlin
    float noise( in vec2 p ) {
        const float K1 = 0.366025404;
        const float K2 = 0.211324865;
        
        vec2 i = floor(p + (p.x+p.y)*K1);
        vec2 a = p - i + (i.x+i.y)*K2;
        vec2 o = (a.x>a.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
        vec2 b = a - o + K2;
        vec2 c = a - 1.0 + 2.0*K2;
        
        vec3 h = max(0.5-vec3(dot(a,a), dot(b,b), dot(c,c)), 0.0);
        
        vec3 n = h*h*h*h*vec3(dot(a,hash(i+0.0)), dot(b,hash(i+o)), dot(c,hash(i+1.0)));
        
        return dot(n, vec3(70.0));
    }

    // Fonction de bruit FBM (Fractional Brownian Motion)
    float fbm(vec2 p) {
        float value = 0.0;
        float amplitude = 0.5;
        float frequency = 1.0;
        
        for (int i = 0; i < 5; i++) {
            value += amplitude * noise(p * frequency + uTime * 0.2);
            amplitude *= 2.5;
            frequency *= 2.0;
        }
        
        return value;
    }

    void main() {
        vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
        vec2 mouseDirection = uMouse - uPrevMouse;
        vec2 toMouse = uv - uMouse;
        
        float aspectRatio = uResolution.x / uResolution.y;
        vec2 scaledDistance = vec2(toMouse.x * aspectRatio, toMouse.y);
        float distanceToMouse = length(scaledDistance) * 3.9;
        
        // Générer le noise
        vec2 noiseCoord = uv * 10.0;
        float noiseValue = fbm(noiseCoord + uTime * 0.3);
        
        // Combiner le noise avec l'effet de hover
        float distortionAmount = exp(-distanceToMouse * 1.5) * uAberrationIntensity;
        vec2 distortion = vec2(
            noiseValue * cos(uTime + uv.x * 10.0),
            noiseValue * sin(uTime + uv.y * 10.0)
        ) * distortionAmount * 0.02;
        
        vec2 finalUV = uv + distortion;
        
        vec4 color = texture2D(uTexture, finalUV);
        
        gl_FragColor = color;
    }
`;
const vertexShader = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const TextDistortion = ({ text, fontSize = "1vw", className = "", onLoad }) => {
  const canvasRef = useRef(null);
  const textCanvasRef = useRef(null);
  const requestRef = useRef(null);
  const programRef = useRef(null);
  const glRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [targetMousePos, setTargetMousePos] = useState({ x: 0.5, y: 0.5 });
  const [prevMousePos, setPrevMousePos] = useState({ x: 0.5, y: 0.5 });
  const [aberrationIntensity, setAberrationIntensity] = useState(0.0);
  const [isHovered, setIsHovered] = useState(false);
  const targetAberrationRef = useRef(0.0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitionTimeout = useRef(null);
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
    const lineHeight = fontSizeInPx * 1;
    const maxWidth = Math.max(
      ...lines.map((line) => ctx.measureText(line).width)
    );
    const totalHeight = lineHeight * lines.length;

    const padding = fontSizeInPx * 0.1;
    const finalWidth = maxWidth + padding * 35;
    const finalHeight = totalHeight + padding * 10;

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

      const easeFactorPosition = isTransitioning ? 0.5 : 0.1;
      const newMousePos = {
        x: lerp(mousePos.x, targetMousePos.x, easeFactorPosition),
        y: lerp(mousePos.y, targetMousePos.y, easeFactorPosition),
      };
      setMousePos(newMousePos);

      const newAberrationIntensity = lerp(
        aberrationIntensity,
        targetAberrationRef.current,
        0.03
      );
      setAberrationIntensity(newAberrationIntensity);

      gl.uniform2f(
        gl.getUniformLocation(program, "uMouse"),
        newMousePos.x,
        newMousePos.y
      );
      gl.uniform2f(
        gl.getUniformLocation(program, "uPrevMouse"),
        prevMousePos.x,
        prevMousePos.y
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
  }, [
    mousePos,
    targetMousePos,
    prevMousePos,
    aberrationIntensity,
    isTransitioning,
    time,
  ]);

  const handleMouseLeave = () => {
    setIsHovered(false);
    const currentPos = mousePos;
    setTargetMousePos(currentPos);
    setPrevMousePos(currentPos);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setIsTransitioning(true);

    const newPos = calculateMousePosition(e);
    setMousePos(newPos);
    setTargetMousePos(newPos);
    setPrevMousePos(newPos);

    if (transitionTimeout.current) {
      clearTimeout(transitionTimeout.current);
    }
    transitionTimeout.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 50);
  };

  const calculateMousePosition = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0.5, y: 0.5 };

    const rect = canvas.getBoundingClientRect();
    return {
      x: (e.clientX - rect.left) / rect.width,
      y: 1.0 - (e.clientY - rect.top) / rect.height,
    };
  };

  const handleMouseMove = (e) => {
    if (isTransitioning) return;

    const newPos = calculateMousePosition(e);
    setPrevMousePos(targetMousePos);
    setTargetMousePos(newPos);
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
