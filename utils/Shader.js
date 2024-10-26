export const vertex = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const fragment = `
  varying vec2 vUv;
  uniform sampler2D uTexture;    
  uniform vec2 uMouse;
  uniform vec2 uPrevMouse;
  uniform float uAberrationIntensity;

  void main() {
    vec2 gridUV = floor(vUv * vec2(20.0, 20.0)) / vec2(20.0, 20.0);
    vec2 centerOfPixel = gridUV + vec2(1.0/20.0, 1.0/20.0);
    
    vec2 mouseDirection = uMouse - uPrevMouse;
    vec2 pixelToMouseDirection = centerOfPixel - uMouse;
    float pixelDistanceToMouse = length(pixelToMouseDirection);
    float strength = smoothstep(0.3, 0.0, pixelDistanceToMouse);

    vec2 uvOffset = strength * -mouseDirection * 0.2;
    vec2 uv = vUv - uvOffset;

    // Aberration chromatique
    vec4 colorR = texture2D(uTexture, uv + vec2(strength * uAberrationIntensity * 0.01, 0.0));
    vec4 colorG = texture2D(uTexture, uv);
    vec4 colorB = texture2D(uTexture, uv - vec2(strength * uAberrationIntensity * 0.01, 0.0));

    gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, 1.0);
  }
`;
