import { Gradient } from "./Gradient/Gradient";
import * as S from "./GradientAndShadow.styles";
import { GradientCanvas } from "./GradientCanvas/GradientCanvas";
import { Shadow } from "./Shadow/Shadow";

export const GradientAndShadows = () => {
  return (
    <GradientCanvas>
      <S.Container>
        <S.Title>CSS GRADIENT AND&nbsp;SHADOW</S.Title>
        <Shadow />
        <Gradient />
      </S.Container>
    </GradientCanvas>
  );
};
