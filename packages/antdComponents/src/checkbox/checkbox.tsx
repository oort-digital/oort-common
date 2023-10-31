import { Checkbox as AntCheckbox, CheckboxProps } from "antd";
import { Palette } from "../styles";

const { dark1, dark5 } = Palette;

export function Checkbox(props: CheckboxProps) {
  return <AntCheckbox {...props} />;
}

export const CheckboxDesignToken = {
  colorBgContainer: dark1,
  colorBorder: dark5,
  colorWhite: dark1,
};
