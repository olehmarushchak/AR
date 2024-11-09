import React from "react";
import CustomButton from "../../components/Button/Button";
import "./Top.scss";
import { useStore } from "../../store/store";

export const Top = () => {
  const { qrCode, toggleQrCode } = useStore();

  return (
    <div className="top">
      <div
        onClick={() => {
          toggleQrCode();
        }}
      >
        <CustomButton
          onClick={() => {
            toggleQrCode();
            console.log(qrCode);
          }}
          icon={"/icon/icon-head-button.svg"}
          textcolor="#fff"
        >
          See In Real Life
        </CustomButton>
      </div>
    </div>
  );
};

export default Top;
