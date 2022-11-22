import styled from "styled-components";

interface ValuePropsI {
  hasButtons: boolean;
  color?: string;
}

interface ColorPropsI {
  color: string;
}

export const Title = styled.span<ColorPropsI>`
  font-size: 0.8em;
  font-weight: 200;
  color: ${(props) => props.color};
`;

export const SliderInput = styled.input<ColorPropsI>`
  -webkit-appearance: none !important;
  width: 100%;
  height: 1px;
  background: ${(props) => props.color};
  margin-left: 10px;
  margin-right: 10px;
`;

export const Container = styled.div<ColorPropsI & { hasButtons: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ hasButtons }) => (hasButtons ? 0 : 12)}px;
  width: 100%;
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    cursor: pointer;
    background: ${(props) => props.color};
    padding: 5px;
    border-radius: 4px;
    height: 10px;
    width: 1px;
  }
`;

export const Value = styled.div<ValuePropsI>`
  position: relative;
  left: 50%;
  font-size: 0.8em;
  font-weight: 100;
  color: ${(props) => props.color};
`;

export const Arrow = styled.span<ColorPropsI>`
  cursor: pointer;
  font-size: 1.6em;
  font-weight: 200;
  color: ${(props) => props.color};
  transform: scale(0.5, 1);
`;
