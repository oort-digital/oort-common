import "../../.storybook/index.scss";
import { Meta, StoryObj } from "@storybook/react";
import { InputNumber } from "./inputNumber";
import React from "react";
import { OortConfigProvider } from "../oortConfigProvider";

const onChange = (value: number | string | null) => {
  alert("changed");
};

const meta = {
  title: "src/input",
  component: InputNumber,

  render: (args) => {
    return (
      <OortConfigProvider>
        <div
          style={{
            background: "#11151A",
            height: "1000px",
            width: "100%",
            paddingTop: "50px",
            paddingLeft: "50px",
          }}
        >
          <InputNumber
            size="large"
            min={1}
            max={10}
            defaultValue={3}
            onChange={onChange}
          />
        </div>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: "primary",
    disabled: true,
  },
};
