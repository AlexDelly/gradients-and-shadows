import { PlusRounded } from "../../Icons";
import * as S from "./ColorPicker.styles";

interface ColorPickerProps {
  pickerId?: string;
  value?: string;
  onChange: (color: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete?: (id: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ColorPicker = ({
  onChange,
  onDelete,
  value,
  pickerId,
}: ColorPickerProps) => {
  return (
    <S.Container>
      {onDelete && (
        <S.DeleteIcon
          as={PlusRounded}
          data-pickerid={pickerId}
          onClick={(e: any) => onDelete(e)}
        />
      )}
      <S.Color
        data-pickerid={pickerId}
        type="color"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </S.Container>
  );
};
