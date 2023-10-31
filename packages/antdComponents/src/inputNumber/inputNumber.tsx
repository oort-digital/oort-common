import styles from "./inputNumber.module.scss";
import { InputNumber as AntInputNumber, InputNumberProps } from "antd";
import { Palette } from "../styles";

const { dark2, dark5, dark9 } = Palette;

export function InputNumber(props: InputNumberProps<string | number>) {
  return <AntInputNumber rootClassName={styles.input} {...props} />;
}

export const InputNumberDesignToken = {
  handleVisible: true,
  controlHeightLG: 52,
  borderRadiusLG: 4,
  handleWidth: 28,
  handleBg: dark2,
  colorBgContainer: dark2,
  handleBorderColor: dark5,
  colorBorder: dark5,
  colorText: dark9,
  fontFamily: "inherit",
};
