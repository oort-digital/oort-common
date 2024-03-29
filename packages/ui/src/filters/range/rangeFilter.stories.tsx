import "../../../.storybook/stories.less";
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { RangeFilter } from ".";

import { Button } from "antd";
import { IRangeFilterProps } from "./rangeFilter";
import { emptyRange, NumRange } from "../../typesAndInterfaces";
import { RangeValue } from "../popover/popoverFilter";

const meta = {
  title: "oort/filters/range",
  component: RangeFilter,
} satisfies Meta<typeof RangeFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    title: "Range filter",
    popoverTitle: "Enter values",
    values: [1, 10],
    min: 1,
    max: 10,
  },

  render(args: IRangeFilterProps) {
    const [values, setValues] = useState<[RangeValue, RangeValue]>([1, 10]);

    const props = {
      values,
      onChange: setValues,
    };

    const mergedProps = { ...args, ...props };

    return (
      <>
        <div>
          {values[0]}-{values[1]}
        </div>
        <div>
          <RangeFilter {...mergedProps} />
        </div>
      </>
    );
  },
};

export const NoTriggerButton: Story = {
  args: {
    title: "Range filter",
    popoverTitle: "Enter values",
    // min: 1,
    // max: 10,
    showClose: true,
    showCancel: false,
    showClear: true,
  },

  render(args: IRangeFilterProps) {
    const [values, setValues] = useState<NumRange>(emptyRange());

    const [visible, onVisibleChange] = useState(false);

    const onChange = (newVals: NumRange) => {
      setValues(newVals);
    };

    const props = {
      values,
      onChange,
      showTriggerButton: false,
      visible,
      onVisibleChange,
    };

    const mergedProps = { ...args, ...props };

    return (
      <>
        <div>
          {values[0]}-{values[1]}
        </div>
        <div>
          <Button onClick={() => onVisibleChange(true)}>Open</Button>
          <RangeFilter {...mergedProps} />
        </div>
      </>
    );
  },
};
