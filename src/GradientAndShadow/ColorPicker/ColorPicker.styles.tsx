import styled from "styled-components";
import { colors } from "../../utils";

export const Container = styled.div`
  display: flex;
  position: relative;
  :hover {
    & svg {
      opacity: 1;
    }
  }
`;

export const Color = styled.input`
  position: relative;
  height: 28px;
  width: 29px;
  margin-right: 14px;
  top: 3px;
  cursor: pointer;
`;

export const DeleteIcon = styled.svg`
  width: 15px;
  height: 15px;
  opacity: 0;
  position: absolute;
  z-index: 9999;
  top: -13px;
  left: 24px;
  display: flex;
  fill: ${colors.black};
  transform: rotate(45deg);
  cursor: pointer;
  overflow: hidden;
  transition: opacity 0.3s ease-in-out;
`;
