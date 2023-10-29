// import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import React from "react";
import { OortConfigProvider } from "../oortConfigProvider";

const meta = {
  title: "src/button",
  component: Button,

  render: (args) => {
    return (
      <OortConfigProvider>
        <Button size="large" {...args}>
          Button
        </Button>
        <Button {...args}>Button</Button>
        <Button size="small" {...args}>
          Button
        </Button>
      </OortConfigProvider>
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
