import React, { useEffect, useRef, useState } from "react";

const fragmentShader = `
    precision mediump float;
    uniform sampler2D uTexture;    
    uniform vec2 uMouse;
    uniform vec2 uPrevMouse;
    uniform float uAberrationIntensity;
    uniform vec2 uResolution;
    
    void main() {
        vec2 uv = vec2(gl_FragCoord.x / uResolution.x, gl_FragCoord.y / uResolution.y);
        vec2 mouseDirection = uMouse - uPrevMouse;
        vec2 toMouse = uv - uMouse;
        
        // Normaliser la distance en fonction de la résolution
        float aspectRatio = uResolution.x / uResolution.y;
        vec2 scaledDistance = vec2(toMouse.x * aspectRatio, toMouse.y);
        float distanceToMouse = length(scaledDistance) * 3.9; // Rayon constant
        
        float waveFrequency = 5.0;
        float waveAmplitude = 0.1;
        float rippleSpeed = 6.0;
        
        float ripple = sin(distanceToMouse * waveFrequency - length(mouseDirection) * rippleSpeed) 
                    * exp(-distanceToMouse * 1.5)
                    * waveAmplitude 
                    * uAberrationIntensity;
        
        vec2 uvOffset = normalize(toMouse) * ripple;
        vec2 uv2 = uv + uvOffset;
        
        float aberrationStrength = ripple * 2.0;
        vec4 colorR = texture2D(uTexture, uv2 + vec2(aberrationStrength, 0.0));
        vec4 colorG = texture2D(uTexture, uv2);
        vec4 colorB = texture2D(uTexture, uv2 - vec2(aberrationStrength, 0.0));
        
        gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, colorG.a);
    }
`;

const vertexShader = `
    attribute vec2 aPosition;
    void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
    }
`;

const TextDistortion = ({
  text,
  fontSize = "48px",
  className = "",
  onLoad,
}) => {
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

    // Convertir vw en pixels
    const vw = window.innerWidth / 100;
    const fontSizeInPx = parseFloat(fontSize) * vw;

    const ctx = textCanvas.getContext("2d", { alpha: true });
    ctx.font = `bold ${fontSizeInPx}px Projekt`;

    // Séparer et mesurer les lignes
    const lines = text.split("\n");
    const lineHeight = fontSizeInPx * 1.2;
    const maxWidth = Math.max(
      ...lines.map((line) => ctx.measureText(line).width)
    );
    const totalHeight = lineHeight * lines.length;

    const padding = fontSizeInPx * 0.1;
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

    ctx.fillStyle = "#262626";
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

      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const easeFactorPosition = isTransitioning ? 0.5 : 0.05;
      const newMousePos = {
        x: lerp(mousePos.x, targetMousePos.x, easeFactorPosition),
        y: lerp(mousePos.y, targetMousePos.y, easeFactorPosition),
      };
      setMousePos(newMousePos);

      const newAberrationIntensity = lerp(
        aberrationIntensity,
        targetAberrationRef.current,
        0.03 // Modifié de 0.1 à 0.03 pour un fade out plus lent
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
  ]); // Ajoutez isTransitioning aux dépendances

  const handleMouseLeave = () => {
    setIsHovered(false);
    const currentPos = mousePos; // Utilisez la position actuelle
    setTargetMousePos(currentPos);
    setPrevMousePos(currentPos);
  };

  const handleMouseEnter = (e) => {
    setIsHovered(true);
    setIsTransitioning(true);

    // Réinitialiser la position au point d'entrée
    const newPos = calculateMousePosition(e);
    setMousePos(newPos);
    setTargetMousePos(newPos);
    setPrevMousePos(newPos);

    // Désactiver la transition après un court délai
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
