import { Copy } from "../../Icons";
import * as S from "./CssOutlet.styles";

interface CssOutletProps {
  cssCode: string;
}

export const CssOutlet = ({ cssCode }: CssOutletProps) => {
  return (
    <S.CssContainer>
      <S.CssCode>{cssCode}</S.CssCode>

      <S.CopyIcon
        as={Copy}
        onClick={() => {
          navigator.clipboard.writeText(cssCode);
        }}
      />
    </S.CssContainer>
  );
};
