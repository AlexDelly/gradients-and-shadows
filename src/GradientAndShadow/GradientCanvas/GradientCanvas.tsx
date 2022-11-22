import * as S from "./GradientCanvas.styles";

interface GradientCanvasProps {
  children: React.ReactNode;
}

export const GradientCanvas = ({ children }: GradientCanvasProps) => {
  return <S.Canvas>{children}</S.Canvas>;
};
