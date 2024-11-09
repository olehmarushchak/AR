import React from "react";
import "./Loader.scss"; // Импортируем стили

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-spinner"></div>
      <p className="loader-text">Загрузка...</p>
    </div>
  );
};

export default Loader;
