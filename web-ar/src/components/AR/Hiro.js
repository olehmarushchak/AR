import React from "react";

export const Hiro = () => {
  return (
    <>
      {/* A-Frame сцена з AR.js */}
      <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
        {/* Маркер, на якому відображатиметься 3D об'єкт */}
        <a-marker
          preset="pattern"
          url="https://raw.githubusercontent.com/lbelfield/augmented-reality/master/src/components/trainTicket/train-ticket.patt"
        >
          {/* 3D об'єкт, який з'являється на маркері */}
          
          <a-entity
            geometry="primitive: box; height: 1; depth: 1; rotation: 90 0 0;"
            material="color: blue"
          />

          {/* <a-entity
            position="0 0 0"
            scale="1 1 1"
            gltf-model="backpack/backpack.glb"
          ></a-entity> */}
        </a-marker>

        {/* Камера для AR сцени */}
        <a-camera />
      </a-scene>
    </>
  );
};

export default Hiro;
