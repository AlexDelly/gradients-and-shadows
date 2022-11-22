import styled from "styled-components";
import { colors } from "../utils";

interface SwitchI {
  isClicked: boolean;
}

export const Container = styled.div<SwitchI>`
  display: flex;
  align-items: center;
  width: 35px;
  height: 17px;
  box-shadow: 0px 0px 2px 0px rgba(34, 60, 80, 0.17) inset;
  border: 0.1px solid ${colors.lightGrey};
  border-radius: 8px;
  background-color: ${(props) =>
    props.isClicked ? colors.lightGrey : colors.white};
`;

export const Slider = styled.div<SwitchI>`
  position: relative;
  background-color: ${colors.white};
  width: 18px;
  height: 18px;
  box-shadow: 0px 0px 5px 0px rgba(34, 60, 80, 0.17);
  border: 0.1px solid ${colors.lightGrey};
  border-radius: 50%;
  transition-property: left;
  transition-duration: 0.1s;
  cursor: pointer;
  left: ${(props) => (props.isClicked ? 18 : -2)}px;
`;

export const Title = styled.span`
  font-size: 0.8em;
  font-weight: 200;
  color: ${colors.grey};
  margin-bottom: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 15px;
  margin-top: -18px;
`;
