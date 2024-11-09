import React from "react";
import { BottomInterface } from "../../components/BottomInterface/BottomInterface";
import "./Bottom.scss";
import CircleWithHoverEffect from "../../components/ColorCircle/ColorCircle";
import { CONSTANT } from "../../const";
import CustomButton from "../../components/Button/Button";
import { useSearchParams } from "react-router-dom";

export const Bottom = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const color = searchParams.get("color") || "";
  const metal = searchParams.get("metal") || "";
  const material = searchParams.get("material") || "";

  const handleSearchChange = (params, value) => {
    setSearchParams({
      ...Object.fromEntries(searchParams),
      [params]: value,
    });
  };

  return (
    <div className="Bottom">
      <BottomInterface text="body color">
        {CONSTANT.colors.map((el) => (
          <div
            onClick={() => handleSearchChange("color", el.label)}
            key={el.id}
          >
            <CircleWithHoverEffect
              gradient={el.gradient}
              color={el.color}
              label={el.label}
              active={color === el.label}
            />
          </div>
        ))}
      </BottomInterface>

      <BottomInterface text="metal color">
        {CONSTANT.metalColors.map((el) => (
          <div
            key={el.id}
            onClick={() => {
              handleSearchChange("metal", el.label);
            }}
          >
            <CircleWithHoverEffect
              gradient={el.gradient}
              gradientStartColor={el.gradientStartColor}
              gradientEndColor={el.gradientEndColor}
              label={el.label}
              backgroundImg={el.backgroundImg}
              active={metal === el.label}
            />
          </div>
        ))}
      </BottomInterface>

      <BottomInterface text="material">
        {CONSTANT.materials.map((el) => (
          <div
            key={el.id}
            onClick={() => {
              handleSearchChange("material", el.label);
            }}
          >
            <CustomButton
              width={"80px"}
              height={"36px"}
              bgcolor={CONSTANT.whiteColor}
              active={material === el.label}
              textcolor={CONSTANT.grayColor}
            >
              {el.label}
            </CustomButton>
          </div>
        ))}
      </BottomInterface>
    </div>
  );
};
