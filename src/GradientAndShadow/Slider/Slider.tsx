import { colors, Row } from "../../utils";
import { ArrowButton } from "./ArrowButton";
import * as S from "./Slider.styles";

interface SliderProps {
  value: string;
  onChange: (arg: string) => void;
  initialValue?: string;
  measure?: string;
  range?: { min: number; max: number };
  hasButtons?: boolean;
  title: string;
  color?: string;
  step?: string;
}

export const Slider = ({
  value,
  onChange,
  initialValue = "50",
  measure = "",
  range = { min: 0, max: 100 },
  hasButtons = false,
  title,
  color = colors.white,
  step = "1",
}: SliderProps) => {
  const decrement = () => {
    if (+value !== range.min) {
      let res = (Number(value) - Number(step)).toString();
      if (step !== "1") {
        res = Number(res).toFixed(2);
      }
      onChange(res);
    }
  };

  const increment = () => {
    if (+value !== range.max) {
      let res = (Number(value) + Number(step)).toString();
      if (step !== "1") {
        res = Number(res).toFixed(2);
      }
      onChange(res);
    }
  };

  return (
    <S.Container hasButtons={hasButtons} color={color}>
      <Row>
        <S.Title color={color}>{title}</S.Title>
      </Row>
      <Row>
        {hasButtons && (
          <ArrowButton color={color} click={decrement} type={"left"} />
        )}
        <S.SliderInput
          color={color}
          type="range"
          min={range.min}
          max={range.max}
          step={step}
          value={value || initialValue}
          onChange={(e) => onChange(e.target.value)}
        />
        {hasButtons && (
          <ArrowButton color={color} click={increment} type={"right"} />
        )}
      </Row>
      <Row>
        <S.Value hasButtons color={color}>
          {value || initialValue}
          {measure}
        </S.Value>
      </Row>
    </S.Container>
  );
};
