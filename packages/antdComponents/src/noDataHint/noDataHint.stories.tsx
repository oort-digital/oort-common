// import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { NoDataHint } from ".";

const meta = {
  title: "src/noDataHint",
  component: NoDataHint,
} satisfies Meta<typeof NoDataHint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: "Custom text",
  },
};
