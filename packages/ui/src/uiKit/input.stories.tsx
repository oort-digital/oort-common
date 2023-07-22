import "../../.storybook/stories.less";

import { Meta, StoryObj } from "@storybook/react";

import { Input } from "antd";
import React from "react";

const meta = {
  title: "ui-kit/input",
  component: Input,

  render: (args) => {
    return (
      <>
        <Input {...args} value="some text" />
      </>
    );
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
