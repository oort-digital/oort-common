import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "antd";

const meta = {
  title: "ui-kit/checkbox",
  component: Checkbox,
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const UnChecked: Story = {
  args: {
    checked: false,
  },
};
