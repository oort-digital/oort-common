import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { OortConfigProvider } from "../oortConfigProvider";
import { Pagination } from "./index";

const meta = {
  title: "src/pagination",
  component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <OortConfigProvider>
      <Pagination defaultCurrent={1} total={50} />
    </OortConfigProvider>
  ),
};
