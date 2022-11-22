import styled from "styled-components";
import { colors, Unselectable } from "../../utils";
import { OutletCss } from "../GradientAndShadow.styles";

interface ShadowPropsI {
  boxShadow: string;
  // color: string;
}

export const OutletPad = styled.div`
  ${OutletCss}
  background-color: ${colors.white};
  padding: 0px 20px;
  box-shadow: 0px 0px 5px 0px rgba(34, 60, 80, 0.17);
  & span {
    cursor: pointer;
  }

  ${Unselectable}
`;

export const MrShadow = styled.div.attrs<ShadowPropsI>({
  shadow: ({ boxShadow }: ShadowPropsI) => {
    //eslint-disable-next-line @typescript-eslint/no-unused-expressions
    boxShadow;
  },
})`
  color: ${colors.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-weight: 300;
  width: 180px;
  height: 110px;
`;
