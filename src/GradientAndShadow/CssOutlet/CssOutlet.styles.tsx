import styled from "styled-components";
import { colors } from "../../utils";

export const CopyIcon = styled.svg`
  fill: ${colors.white};
  -moz-transform: scaleX(-1);
  -o-transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  filter: FlipH;
  -ms-filter: "FlipH";
  width: 20px;
  cursor: pointer;
  :hover {
    fill: ${colors.grey};
  }
  transition: fill 0.3s;
`;

export const CssContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const CssCode = styled.pre`
  font-size: 0.5em;
  font-weight: 200;
  margin: 0;
  padding: 0;
  margin-right: 24px;
  max-width: 320px;
  white-space: wrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${colors.white};
`;
