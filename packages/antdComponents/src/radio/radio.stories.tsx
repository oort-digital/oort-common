import { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./radio";
import { OortConfigProvider } from "../oortConfigProvider";
import React from "react";

const meta = {
  title: "src/radio",
  component: Radio,

  render: (args) => {
    return (
      <OortConfigProvider>
        <RadioGroup value={2}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {},
};
