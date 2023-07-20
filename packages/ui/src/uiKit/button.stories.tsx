import { Meta, StoryObj } from "@storybook/react";

import { Button } from "antd";
import React from "react";

const meta = {
  title: "ui-kit/button",
  component: Button,

  render: (args) => {
    return (
      <>
        <Button size="large" {...args}>
          Button
        </Button>
        <Button {...args}>Button</Button>
        <Button size="small" {...args}>
          Button
        </Button>
      </>
    );
  },
} satisfies Meta<typeof Button>;

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

export const Default: Story = {
  args: {
    type: "default",
  },
};

export const DefaultDisabled: Story = {
  args: {
    type: "default",
    disabled: true,
  },
};
