import React from "react";
import "./BottomInterface.scss";

export const BottomInterface = ({ text = "Props", children = "Children" }) => {
  return (
    <div className="bottom-interface">
      <span className="bottom-interface__head">{text}</span>

      <div className="bottom-interface__bottom">{children}</div>
    </div>
  );
};
