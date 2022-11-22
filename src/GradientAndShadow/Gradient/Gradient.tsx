import { useState } from "react";
import { CssOutlet } from "../CssOutlet/CssOutlet";
import * as C from "../GradientAndShadow.styles";
import { ControlPad } from "./ControlPad";
import * as S from "./Gradient.styles";

export const Gradient = () => {
  const [colors, setColors] = useState("");
  const [degree, setDegree] = useState("90");

  const CssCode = `
  -webkit-box-shadow: linear-gradient (${degree}deg,${colors});
  -moz-box-shadow: linear-gradient (${degree}deg,${colors});
  box-shadow: linear-gradient (${degree}deg,${colors});
    `;

  return (
    <C.SmallContainer>
      <C.SmallRow>
        <ControlPad
          degree={degree}
          setDegree={setDegree}
          setColors={setColors}
        />
        <S.OutletPad>
          <S.Gradient
            style={{
              background: `linear-gradient(${degree}deg, ${colors})`,
            }}
          ></S.Gradient>
        </S.OutletPad>
      </C.SmallRow>
      <C.SmallRow>
        <CssOutlet cssCode={CssCode} />
      </C.SmallRow>
    </C.SmallContainer>
  );
};
