// useThree.js
import { useRef } from "react";
import * as THREE from "three";

export const useThree = () => {
  // Références pour garder les instances Three.js entre les rendus
  const rendererRef = useRef(null); // Gère le rendu de la scène
  const sceneRef = useRef(null); // Contient tous les objets 3D
  const cameraRef = useRef(null); // Définit le point de vue
  const materialRef = useRef(null); // Contient le matériau avec le shader

  // Fonction d'initialisation de Three.js
  const initThree = (
    container,
    { width, height, vertexShader, fragmentShader, texturePath }
  ) => {
    // 1. Création de la scène - c'est le conteneur principal pour tous les objets 3D
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Configuration de la caméra
    // On utilise une caméra orthographique car on travaille en 2D
    const camera = new THREE.OrthographicCamera(
      width / -2, // leftPlane
      width / 2, // rightPlane
      height / 2, // topPlane
      height / -2, // bottomPlane
      0.1, // nearPlane
      1000 // farPlane
    );
    camera.position.z = 1;
    cameraRef.current = camera;

    // 3. Configuration du renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true, // Permet la transparence
      antialias: true, // Lisse les bords
    });
    renderer.setSize(width, height);
    // Gestion des écrans haute résolution
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Chargement de la texture et création du matériau
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(texturePath, (texture) => {
      // Configuration de la texture
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;

      // Création du matériau avec le shader
      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture: { value: texture }, // L'image
          uMousePosition: { value: new THREE.Vector2(0, 0) }, // Position souris
          uResolution: { value: new THREE.Vector2(width, height) }, // Taille
        },
        vertexShader, // Shader pour la géométrie
        fragmentShader, // Shader pour les pixels
        transparent: true, // Permet la transparence
      });
      materialRef.current = material;

      // 5. Création du mesh (la géométrie + le matériau)
      const geometry = new THREE.PlaneGeometry(width, height);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // Premier rendu
      renderer.render(scene, camera);
    });

    return {
      renderer: rendererRef.current,
      scene: sceneRef.current,
      camera: cameraRef.current,
      material: materialRef.current,
    };
  };

  // Fonction pour mettre à jour la position de la souris dans le shader
  const updateMousePosition = (position) => {
    if (
      materialRef.current &&
      rendererRef.current &&
      sceneRef.current &&
      cameraRef.current
    ) {
      // Met à jour l'uniform uMousePosition dans le shader
      materialRef.current.uniforms.uMousePosition.value = position;
      // Re-render la scène avec la nouvelle position
      rendererRef.current.render(sceneRef.current, cameraRef.current);
    }
  };

  // Fonction de nettoyage pour éviter les fuites de mémoire
  const cleanup = () => {
    if (rendererRef.current) {
      rendererRef.current.dispose();
    }
  };

  // Retourne les fonctions nécessaires au composant
  return {
    initThree,
    updateMousePosition,
    cleanup,
  };
};
