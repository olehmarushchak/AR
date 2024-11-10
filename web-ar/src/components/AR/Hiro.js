import React from "react";

export const Hiro = () => {
  return (
    <a-scene embedded arjs="sourceType: webcam">
      <a-marker preset="hiro">
        <a-entity
          gltf-model="./coffeeMug.glb"
          scale="5 5 5"
          position="0 0 0"
        ></a-entity>
      </a-marker>

      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default Hiro;
