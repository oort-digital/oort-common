import { Radio as AntRadio, RadioProps } from "antd";
import { Palette } from "../styles";

const { dark4, dark5 } = Palette;

export const RadioGroup = AntRadio.Group;
export function Radio(props: RadioProps) {
  return <AntRadio {...props} />;
}

export const RadioDesignToken = {
  colorBgContainer: dark4,
  colorWhite: dark4,
  colorBorder: dark5,
};
