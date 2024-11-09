import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { CONSTANT } from "../../const";

const StyledButton = styled(Button)(
  ({ theme, bgcolor, textcolor, width, height, border, active }) => ({
    backgroundColor: active ? "#fff" : bgcolor || `${CONSTANT.blueColor}`,
    color: active ? `${CONSTANT.blueColor}` : textcolor || "#fff",
    padding: "11px 14px",
    textTransform: "none",
    fontSize: "12px",
    display: "flex",
    alignItems: "center",
    borderRadius: "25px",
    width: `${width}` || CONSTANT.widthButton,
    height: height || "40px",
    gap: "8px",
    border: active ? `1px solid ${CONSTANT.blueColor}` : border || "none",
    "&:hover": {
      backgroundColor: active ? `${CONSTANT.blueColor}66` : bgcolor,
      borderColor: active ? `${CONSTANT.blueColor}` : border || "none",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.875rem",
      padding: "8px 16px",
    },
  })
);

export default function CustomButton({
  icon,
  children,
  bgcolor,
  textcolor,
  width,
  height,
  border,
  active = false,
}) {
  return (
    <StyledButton
      bgcolor={bgcolor}
      textcolor={textcolor}
      variant="contained"
      width={width}
      height={height}
      border={border}
      active={active} // Передача active для установки стилей
    >
      {icon && <img src={icon} alt="icon" style={{ width: 20, height: 20 }} />}
      {children}
    </StyledButton>
  );
}
