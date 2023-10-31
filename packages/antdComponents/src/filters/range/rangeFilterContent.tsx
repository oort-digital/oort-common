import { ReactNode } from "react";
import { Space } from "antd";
import styles from "./rangeFilterContent.module.scss";
import { NumOrUndef, NumRange } from "../../typesAndInterfaces";
import { InputNumber } from "../../inputNumber";

interface IProps {
  values: NumRange;
  min?: number;
  max?: number;
  rangeIcon?: ReactNode;
  onMinValueChange: (value: NumOrUndef) => void;
  onMaxValueChange: (value: NumOrUndef) => void;
}

export const RangeFilterContent = ({
  onMinValueChange,
  onMaxValueChange,
  values,
  min,
  max,
}: IProps) => (
  <Space rootClassName={styles.range_filter_content}>
    <span className={styles.label}>From</span>
    <InputNumber
      className={styles.from_input}
      size="large"
      min={min}
      max={values[1] || max}
      value={values[0]}
      onChange={(value) => {
        if (value) {
          onMinValueChange(value as NumOrUndef);
        }
      }}
    />

    <span className={styles.label}>To</span>
    <InputNumber
      className={styles.to_input}
      size="large"
      min={values[0] || min}
      max={max}
      value={values[1]}
      onChange={(value) => {
        if (value) {
          onMaxValueChange(value as NumOrUndef);
        }
      }}
    />
  </Space>
);
