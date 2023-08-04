import React from "react";
import "../../../.storybook/stories.less";

import { Meta, StoryObj } from "@storybook/react";
import { FilterLayoutMobile } from "./filterLayoutMobile";
import { SearchInputMobile } from "../searchInput";

const meta = {
  title: "oort/filters/layout/mobile",
  component: FilterLayoutMobile,
} satisfies Meta<typeof FilterLayoutMobile>;

export default meta;

type Story = StoryObj<typeof meta>;

const children = [
  <SearchInputMobile title="Search 2" onChange={() => {}} placeholder="" />,
  <SearchInputMobile title="Search 1" onChange={() => {}} placeholder="" />,
];

export const Primary: Story = {
  args: {
    activeFiltersCounter: 1,
    // sortBy?: ReactNode
    children,
    onApply: () => {},
    onClearAll: () => {},
    // onCancel?: () => {}
  },
};
