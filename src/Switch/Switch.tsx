import { Dispatch, SetStateAction } from "react";
import * as S from "./Switch.styles";

interface SwitchProps {
  isClicked: boolean;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  title: string;
}

const Switch = ({ isClicked, setIsClicked, title }: SwitchProps) => {
  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Container isClicked={isClicked} onClick={() => handleClick()}>
        <S.Slider isClicked={isClicked} />
      </S.Container>
    </S.Wrapper>
  );
};

export default Switch;
