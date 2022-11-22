import { colors } from "../../utils";

export const SliderProps = {
  hasButtons: true,
  measure: "px",
  color: colors.white,
};

export const OpacitySliderProps = {
  hasButtons: true,
  color: colors.grey,
  title: "Opacity",
  range: { min: 0, max: 1 },
  step: "0.01",
};
