import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./HiroMarker.scss";

export const HiroMarker = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMarker = () => {
    setIsOpen(!isOpen);
    document.body.style.overflowY = !isOpen ? "hidden" : "auto";
  };

  return ReactDOM.createPortal(
    <div
      className={`HiroMarker ${isOpen ? "HiroMarker--open" : ""}`}
      onClick={() => handleOpenMarker()}
    >
      <h2 className="HiroMarker__title">Hiro Marker</h2>

      <div
        className={`HiroMarker__marker ${
          isOpen ? "HiroMarker__marker--open" : ""
        }`}
      >
        <img
          className="HiroMarker__marker__img"
          src="icon/hiro.png"
          alt="hiro"
        />
      </div>
    </div>,
    document.getElementById("portal")
  );
};
