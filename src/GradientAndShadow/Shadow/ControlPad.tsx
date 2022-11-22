import { Dispatch, SetStateAction } from "react";
import * as C from "../GradientAndShadow.styles";
import { Slider } from "../Slider/Slider";
import { SliderProps } from "./config";

interface ElementI {
  title: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  range: { min: number; max: number };
}

interface ControlPadProps {
  elements: ElementI[];
}

export const ControlPad = ({ elements }: ControlPadProps) => {
  return (
    <C.ControlPad>
      {elements.map(({ title, value, onChange, range }) => {
        return (
          <Slider
            {...SliderProps}
            title={title}
            value={value}
            onChange={onChange}
            range={range}
            key={`control_pad_shadow_${title}`}
          />
        );
      })}
    </C.ControlPad>
  );
};
