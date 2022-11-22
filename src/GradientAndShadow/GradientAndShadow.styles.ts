import styled, { css } from "styled-components";
import { colors, Unselectable } from "../utils";
import { ColorPicker } from "./ColorPicker/ColorPicker";

export const Title = styled.div`
  font-size: 26px;
  font-weight: 300;
  color: ${colors.white};
  margin: 20px;
  ${Unselectable}
  margin-top: 50px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  gap: 25px;
`;

export const ControlPad = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 320px;
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  max-width: 700px;
`;

export const SmallRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`;

export const OutletCss = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 30px;
  align-items: center;
  min-width: 280px;
  min-height: 300px;
  margin-bottom: 20px;
`;

export const Color = styled(ColorPicker)`
  height: 21px;
  padding-right: 10px;
`;
