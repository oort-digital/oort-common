import { Input as AntInput, InputProps } from "antd";
import { Palette } from "../styles";

const { dark2, dark5, dark9, dark6 } = Palette;

export function Input(props: InputProps) {
  return <AntInput {...props} />;
}

export const InputDesignToken = {
  colorTextPlaceholder: dark6,
  controlHeightLG: 52,
  borderRadiusLG: 4,
  colorBgContainer: dark2,
  colorBorder: dark5,
  colorText: dark9,
  fontFamily: "inherit",
};
