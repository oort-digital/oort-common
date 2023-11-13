import { TooltipPlacement } from "antd/es/tooltip";
import { useState } from "react";
import {
  emptyRange,
  isRangeEmpty,
  NumOrUndef,
  NumRange,
} from "../../typesAndInterfaces";
import { PopoverFilter } from "../popover";
import styles from "./rangeFilter.module.scss";
import { RangeFilterContent } from "./rangeFilterContent";

export interface IRangeFilterProps {
  title: string;
  popoverTitle: string;
  values: NumRange;
  min?: number;
  max?: number;
  visible?: boolean;
  showTriggerButton?: boolean;
  showClose?: boolean;
  showCancel?: boolean;
  showClear?: boolean;
  onChange: (values: NumRange) => void;
  onVisibleChange?: (isVisible: boolean) => void;
  placement?: TooltipPlacement;
}

export const RangeFilter = ({
  placement,
  title,
  popoverTitle,
  onChange,
  values,
  min,
  max,
  visible: visible,
  showTriggerButton,
  showCancel,
  showClear,
  showClose,
  onVisibleChange,
}: IRangeFilterProps) => {
  const [intrenalValues, setInternalValues] = useState<NumRange>(values);

  const isClear = isRangeEmpty(values);

  const onMinValueChange = (value: NumOrUndef) => {
    setInternalValues([value as NumOrUndef, intrenalValues[1]]);
  };

  const onMaxValueChange = (value: NumOrUndef) => {
    setInternalValues([intrenalValues[0], value as NumOrUndef]);
  };

  const onSubmit = () => {
    onChange(intrenalValues);
  };

  const clear = () => {
    setInternalValues(emptyRange());
    onChange(emptyRange());
  };

  const renderTitleVal = (label: string, value: NumOrUndef) => {
    if (value === undefined) {
      return null;
    }
    return (
      <>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </>
    );
  };

  const subTitle = isClear ? null : (
    <span className={styles.sub_title}>
      {renderTitleVal("From", values[0])}
      {renderTitleVal("To", values[1])}
    </span>
  );

  return (
    <PopoverFilter
      triggerBtnClassName={styles.range_trigger_btn}
      onSubmit={onSubmit}
      title={title}
      subTitle={subTitle}
      popoverTitle={popoverTitle}
      isClear={isClear}
      visible={visible}
      showTriggerButton={showTriggerButton}
      showClose={showClose}
      showCancel={showCancel}
      showClear={showClear}
      onVisibleChange={onVisibleChange}
      placement={placement}
      onClear={clear}
    >
      <RangeFilterContent
        onMaxValueChange={onMaxValueChange}
        onMinValueChange={onMinValueChange}
        values={intrenalValues}
        min={min}
        max={max}
      />
    </PopoverFilter>
  );
};
