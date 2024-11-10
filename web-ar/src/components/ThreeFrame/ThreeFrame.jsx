import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from "three";
import "./ThreeFrame.scss";
import { useSearchParams } from "react-router-dom";

export const Model = ({ color, metal, material }) => {
  const modelUrl = "backpack/backpack.glb";

  const colors = {
    brown: [0xa0522d, 0x8b5a2b],
    black: [0x333333, 0x555555],
    blue: [0x1a2e40, 0x6a7b8c],
  };

  const metals = {
    silver: {
      color: new THREE.Color(0xc0c0c0),
      metalness: 1,
      roughness: 0.2,
    },
    gold: {
      color: new THREE.Color(0xffd700),
      metalness: 1,
      roughness: 0.1,
    },
    black: {
      color: new THREE.Color(0x1c1c1c),
      metalness: 1,
      roughness: 0.05,
    },
  };

  const materials = {
    Leather: {
      metalness: 0.2,
      roughness: 0.1,
    },
    Fabric: {
      metalness: 0,
      roughness: 1,
    },
    Denim: {
      metalness: 0,
      roughness: 2,
    },
  };

  function textureChanger(handle, typeTexture) {
    switch (handle) {
      case "Leather":
        switch (typeTexture) {
          case "base":
            return "backpack/leather_baseColor.jpg";
          case "normal":
            return "backpack/leather_normal.jpg";
          case "occ":
            return "backpack/leather_occlusionRoughnessMetallic.jpg";
          default:
            return null;
        }
      case "Fabric":
        switch (typeTexture) {
          case "base":
            return "backpack/fabric_baseColor.jpg";
          case "normal":
            return "backpack/fabric_normal.jpg";
          case "occ":
            return "backpack/fabric_occlusionRoughnessMetallic.jpg";
          default:
            return null;
        }
      case "Denim":
        switch (typeTexture) {
          case "base":
            return "backpack/denim_baseColor.jpg";
          case "normal":
            return "backpack/denim_normal.jpg";
          case "occ":
            return "backpack/denim_occlusionRoughnessMetallic.jpg";
          default:
            return null;
        }
      default:
        return null;
    }
  }

  const texture = useLoader(TextureLoader, textureChanger(material, "base"));
  const normalMap = useLoader(
    TextureLoader,
    textureChanger(material, "normal")
  );
  const aoMap = useLoader(TextureLoader, textureChanger(material, "occ"));

  const { scene } = useGLTF(modelUrl);

  const modelRef = useRef(null);

  useEffect(() => {
    if (scene) {
      // Center Model
      const boundingBox = new THREE.Box3().setFromObject(scene);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);

      scene.position.sub(center);

      // Styles of Model
      scene.traverse((child) => {
        if (child.isMesh) {
          // Main
          child.material = new THREE.MeshStandardMaterial({
            ...materials[material],
            color: new THREE.Color(colors[color][0]),
            map: texture,
            normalMap: normalMap,
            aoMap: aoMap,
          });

          // Furniture
          child.parent.children[1].material = new THREE.MeshStandardMaterial({
            ...metals[metal],
            map: texture,
            normalMap: normalMap,
            aoMap: aoMap,
          });

          // Part
          child.parent.children[2].material = new THREE.MeshStandardMaterial({
            map: texture,
            color: new THREE.Color(colors[color][1]),
            normalMap: normalMap,
            aoMap: aoMap,
          });

          const repeatValue = 1;
          const repeatValueX = 1;

          child.material.map.repeat.set(repeatValue, repeatValueX); // Збільшення повторення текстури по осі X

          // Поворот текстури на 90 градусів

          child.material.normalMap.repeat.set(0.5, 1); // Збільшення повторення текстури по осі X

          // Поворот текстури на 90 градусів

          child.material.aoMap.repeat.set(repeatValue, repeatValueX); // Збільшення повторення текстури по осі X

          child.material.map.needsUpdate = true;
          child.material.normalMap.needsUpdate = true;
          child.material.aoMap.needsUpdate = true;
        }
      });
    }
  }, [color, metal, scene, texture, normalMap, aoMap]);

  return <primitive ref={modelRef} object={scene} scale={10} />;
};

export const ThreeFrame = () => {
  const [searchParams] = useSearchParams();

  const color = searchParams.get("color") || "brown";
  const metal = searchParams.get("metal") || "silver";
  const material = searchParams.get("material") || "Leather";

  return (
    <div className="ThreeFrame">
      <Canvas key="three-canvas" style={{ width: "100%", height: "100%" }}>
        <ambientLight intensity={0.4} color={new THREE.Color(0xffffff)} />

        <directionalLight
          position={[1, 7, 1.5]}
          intensity={10}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-near={0.5}
          shadow-camera-far={100}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={1000}
          shadow-camera-bottom={-10}
        />

        {/* right  */}
        <spotLight
          position={[8, 6, 0]}
          angle={0.4}
          penumbra={0.7}
          intensity={1500}
          castShadow
        />

        {/* left  */}
        <spotLight
          position={[-10, 5, -5]}
          angle={0.4}
          penumbra={0.7}
          intensity={1500}
          castShadow
        />

        <hemisphereLight
          skyColor={new THREE.Color(0x87ceeb)}
          groundColor={new THREE.Color(0x2f4f4f)}
          intensity={5}
        />

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={6}
        />

        <Suspense fallback={null}>
          <Model color={color} metal={metal} material={material} />
        </Suspense>
      </Canvas>
    </div>
  );
};
