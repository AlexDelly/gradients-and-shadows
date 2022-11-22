import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { PlusRounded } from "../../Icons";
import { ColorPicker } from "../ColorPicker/ColorPicker";
import * as S from "./Gradient.styles";

interface ColorsI {
  id: string;
  value: string;
}

interface ColorsPadProps {
  onChange: (arg: string) => void;
}

export const ColorsPad = ({ onChange }: ColorsPadProps) => {
  const [colors, setColors] = useState<ColorsI[]>([
    { id: "test_1", value: "#f1ff8a" },
    { id: "test_2", value: "#ff00bb" },
  ]);

  const getColorString = (colors: ColorsI[]): string => {
    let result = "";
    for (let color of colors) {
      result += `, ${color.value}`;
    }
    return result.slice(1);
  };

  useEffect(() => {
    const newString = getColorString(colors);
    onChange(newString);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [colors]);

  const canAdd = colors.length >= 5;
  const canDelete = colors.length <= 2;

  const addNewColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    const pickerId = e.target.dataset.pickerid;
    const newState = colors.map((color) =>
      color.id === pickerId ? { ...color, value: newColor } : color
    );

    setColors(newState);
  };

  const addPicker = () => {
    const current = [...colors];
    current.push({
      id: uuid(),
      value: "#ffffff",
    });
    setColors(current);
  };

  const deletePicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pickerId = e.target.dataset.pickerid;
    const newState = colors.filter((color) => color.id !== pickerId);

    setColors(newState);
  };

  const onDelete = canDelete ? undefined : deletePicker;

  return (
    <>
      <S.Row></S.Row>
      <S.Row>
        {colors.map(({ id, value }) => {
          return (
            <ColorPicker
              pickerId={id}
              onChange={addNewColor}
              onDelete={onDelete}
              value={value}
              key={`control_pad_gradient_${id}`}
            />
          );
        })}
        {!canAdd && <S.AddIcon as={PlusRounded} onClick={addPicker} />}
      </S.Row>
    </>
  );
};
