import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import { FilterLayout } from "./filterLayout";
import { SearchInput } from "../searchInput";

const meta = {
  title: "src/filters/layout/desktop",
  component: FilterLayout,
} satisfies Meta<typeof FilterLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = [
  <SearchInput onChange={() => {}} />,
  <SearchInput onChange={() => {}} />,
];

export const Primary: Story = {
  args: {
    children,
  },
};
