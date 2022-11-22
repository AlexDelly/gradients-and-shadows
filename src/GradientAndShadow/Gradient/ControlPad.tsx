import { Dispatch, SetStateAction } from "react";
import * as C from "../GradientAndShadow.styles";
import { Slider } from "../Slider/Slider";
import { ColorsPad } from "./ColorsPad";
import * as S from "./Gradient.styles";

interface ControlPadProps {
  degree: string;
  setDegree: Dispatch<SetStateAction<string>>;
  setColors: Dispatch<SetStateAction<string>>;
}

export const ControlPad = ({
  degree,
  setDegree,
  setColors,
}: ControlPadProps) => {
  return (
    <C.ControlPad>
      <S.Row>
        <Slider
          title={"Degree"}
          value={degree}
          range={{ min: 0, max: 180 }}
          onChange={setDegree}
          hasButtons
        />
      </S.Row>
      <ColorsPad onChange={setColors} />
    </C.ControlPad>
  );
};
