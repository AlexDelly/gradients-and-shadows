import React from "react";
import * as S from "./Slider.styles";

interface ArrowButtonProps {
  type: string;
  color: string;
  click: () => void;
}

export const ArrowButton = ({ type, color, click }: ArrowButtonProps) => {
  return (
    <React.Fragment>
      {type === "left" ? (
        <S.Arrow color={color} onClick={click}>
          {"<"}
        </S.Arrow>
      ) : (
        <S.Arrow color={color} onClick={click}>
          {">"}
        </S.Arrow>
      )}
    </React.Fragment>
  );
};
