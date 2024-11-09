import React from "react";
import "./QrCode.scss";
import { useStore } from "../../store/store";

export const QrCode = () => {
  const { toggleQrCode } = useStore();

  return (
    <div className="QrCode">
      <div className="QrCode__box">
        <p className="QrCode__title">
          Scan the QR code with your phone. Within 1-3 seconds the AR function
          opens on your phone.
        </p>

        <img
          onClick={() => {
            toggleQrCode();
          }}
          className="QrCode__close"
          src="/icon/iwwa_delete.svg"
          alt=""
        />

        <div className="QrCode__qr">
          <div className="QrCode__qr__border">
            <img
              className="QrCode__qr__border__img"
              src="/icon/QR.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
