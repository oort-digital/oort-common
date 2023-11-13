import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { OortConfigProvider } from "../oortConfigProvider";

const meta = {
  title: "src/checkbox",
  component: Checkbox,

  render: (args) => {
    return (
      <OortConfigProvider>
        <Checkbox {...args} />
      </OortConfigProvider>
    );
  },
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
