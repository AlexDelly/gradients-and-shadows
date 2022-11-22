import styled from "styled-components";
import { colors, Unselectable } from "../../utils";
import { OutletCss } from "../GradientAndShadow.styles";

interface GradientPropsI {
  colors: string;
  degree: string;
}

export const OutletPad = styled.div`
  ${OutletCss}
  background-color: ${colors.white};
  width: 320px;
  & span {
    cursor: pointer;
  }

  ${Unselectable}
`;

export const Gradient = styled.div.attrs<GradientPropsI>({
  colors: ({ colors }: GradientPropsI) => {
    //eslint-disable-next-line @typescript-eslint/no-unused-expressions
    colors;
  },
  degree: ({ degree }: GradientPropsI) => {
    //eslint-disable-next-line @typescript-eslint/no-unused-expressions
    degree;
  },
})`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const AddIcon = styled.svg`
  position: relative;
  width: 25px;
  height: 25px;
  top: 4px;
  fill: ${colors.white};
  cursor: pointer;

  :hover {
    fill: ${colors.midGrey};
  }

  transition: fill 0.3s ease-in-out;
`;
