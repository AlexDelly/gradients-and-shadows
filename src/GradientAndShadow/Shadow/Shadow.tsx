import { useEffect, useState } from "react";
import Switch from "../../Switch/Switch";
import { Row } from "../../utils";
import { CssOutlet } from "../CssOutlet/CssOutlet";
import * as C from "../GradientAndShadow.styles";
import { Slider } from "../Slider/Slider";
import { OpacitySliderProps } from "./config";
import { ControlPad } from "./ControlPad";
import * as S from "./Shadow.styles";
import { getColor } from "./utils";

export const Shadow = () => {
  const [offsetX, setOffsetX] = useState("4");
  const [offsetY, setOffsetY] = useState("6");
  const [blurRadius, setBlurRadius] = useState("10");
  const [spreadRad, setSpreadRad] = useState("0");
  const [opacity, setOpacity] = useState("0.3");
  const [color, setColor] = useState("#000");
  const [rgba, setRgba] = useState("rgba(0, 0, 0, 0.3)");
  const [isInset, setIsInset] = useState(false);

  const onSetDefaults = () => {
    setOffsetX("4");
    setOffsetY("6");
    setBlurRadius("10");
    setSpreadRad("0");
    setColor("#000");
    setOpacity("0.3");
  };

  useEffect(() => {
    getColor(color, opacity, setRgba);
  }, [color, opacity]);

  const cssCode = `
  -webkit-box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRad}px ${rgba}${
    isInset ? " inset" : ""
  };
  -moz-box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRad}px ${rgba}${
    isInset ? " inset" : ""
  };
  box-shadow: ${offsetX}px ${offsetY}px ${blurRadius}px ${spreadRad}px ${rgba}${
    isInset ? " inset" : ""
  };
    `;

  return (
    <C.SmallContainer>
      <C.SmallRow>
        <ControlPad
          elements={[
            {
              title: "Offset X",
              value: offsetX,
              onChange: setOffsetX,
              range: { min: -100, max: 100 },
            },
            {
              title: "Offset Y",
              value: offsetY,
              onChange: setOffsetY,
              range: { min: -100, max: 100 },
            },
            {
              title: "Blur radius",
              value: blurRadius,
              onChange: setBlurRadius,
              range: { min: 0, max: 100 },
            },
            {
              title: "Spread radius",
              value: spreadRad,
              onChange: setSpreadRad,
              range: { min: 0, max: 100 },
            },
          ]}
        />
        <S.OutletPad>
          <S.MrShadow
            style={{
              boxShadow: `${+offsetX}px ${+offsetY}px ${+blurRadius}px ${+spreadRad}px ${rgba}${
                isInset ? " inset" : ""
              }`,
            }}
          >
            <span onClick={onSetDefaults}>reset</span>
          </S.MrShadow>
          <Row>
            <C.Color onChange={(e) => setColor(e.target.value)} />
            <Switch
              title="Inset"
              isClicked={isInset}
              setIsClicked={setIsInset}
            />
            <Slider
              {...OpacitySliderProps}
              value={opacity}
              onChange={setOpacity}
            />
          </Row>
        </S.OutletPad>
      </C.SmallRow>
      <C.SmallRow>
        <CssOutlet cssCode={cssCode} />
      </C.SmallRow>
    </C.SmallContainer>
  );
};
