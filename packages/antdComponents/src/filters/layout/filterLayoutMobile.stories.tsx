import React from "react";

import { Meta, StoryObj } from "@storybook/react";
import { FilterLayoutMobile } from "./filterLayoutMobile";
import { SearchInputMobile } from "../searchInput";
import { OortConfigProvider } from "../../oortConfigProvider";

const meta = {
  title: "src/filters/layout/mobile",
  component: FilterLayoutMobile,

  render: (args) => {
    return (
      <OortConfigProvider>
        <FilterLayoutMobile {...args} />
      </OortConfigProvider>
    );
  },
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
