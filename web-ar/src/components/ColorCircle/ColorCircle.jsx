// CircleWithHoverEffect.js
import React from "react";
import { styled } from "@mui/material/styles";
import "./ColorCircle.scss";
import { CONSTANT } from "../../const";

const CircleWrapper = styled("div")(({ active }) => ({
  width: `${CONSTANT.sizeCircleBig}`,
  height: `${CONSTANT.sizeCircleBig}`,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxSizing: "border-box",
  border: `2px solid ${active ? CONSTANT.blueColor : "transparent"}`,
  transition: "border-color 0.3s ease",
  "&:hover": {
    borderColor: `${CONSTANT.blueColor}`,
  },
}));

const InnerCircle = styled("div")(
  ({
    color,
    gradient,
    gradientStartColor,
    gradientEndColor,
    backgroundImg,
  }) => ({
    width: `${CONSTANT.sizeCircle}`,
    height: `${CONSTANT.sizeCircle}`,
    borderRadius: "50%",
    backgroundColor: backgroundImg ? "transparent" : color || "#000",
    backgroundImage: backgroundImg
      ? `url(${backgroundImg})`
      : gradient
      ? `linear-gradient(45deg, ${gradientStartColor || "#FF5733"}, ${
          gradientEndColor || "#33A1FF"
        })`
      : "none",
    backgroundSize: backgroundImg ? "cover" : gradient ? "200% 200%" : "none",
    backgroundPosition: "center",
    transition: "all 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.6)",
      backgroundPosition: gradient ? "right center" : "center",
    },
  })
);

const LabelWrapper = styled("div")({
  textAlign: "center",
  textTransform: "uppercase",
  marginTop: "8px",
  fontSize: "0.875rem",
  color: `${CONSTANT.grayColor}`,
});

export default function CircleWithHoverEffect({
  children,
  color,
  label,
  gradient = false,
  gradientStartColor,
  gradientEndColor,
  backgroundImg,
  active = false,
}) {
  return (
    <div className="ColorCircle">
      <CircleWrapper active={active} className="ColorCircle__wrapper">
        <InnerCircle
          color={color}
          gradient={gradient}
          gradientStartColor={gradientStartColor}
          gradientEndColor={gradientEndColor}
          backgroundImg={backgroundImg}
        />
      </CircleWrapper>
      {label && <LabelWrapper>{label}</LabelWrapper>}
    </div>
  );
}
