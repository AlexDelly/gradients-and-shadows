import { Dispatch, SetStateAction } from "react";
import { hexToRgbA } from "../../utils/hex-to-rgba";

export const getColor = (
  color: string,
  opacity: string,
  setter: Dispatch<SetStateAction<string>>
) => {
  const computedColor: any = hexToRgbA(color, opacity);
  setter(computedColor);
};
