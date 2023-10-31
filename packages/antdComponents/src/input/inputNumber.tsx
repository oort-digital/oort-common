import styles from "./inputNumber.module.scss";
import { InputNumber as AntInputNumber, InputNumberProps } from "antd";

// ant-input-number-handler-up-inner
export function InputNumber(props: InputNumberProps<string | number>) {
  return (
    <AntInputNumber
      rootClassName={styles.input}
      classes={{
        wrapper: "wr123",
        group: "gr123",
        affixWrapper: "aw123",
      }}
      {...props}
    />
  );
}

export const InputNumberDesignToken = {
  handleVisible: true,
  controlHeightLG: 52,
  borderRadiusLG: 4,
  handleWidth: 28,
  handleBg: "#1A1F26",
  colorBgContainer: "#1A1F26",
  handleBorderColor: "#384048",
  colorBorder: "#384048",
  colorText: "#A9B1BA",
};
