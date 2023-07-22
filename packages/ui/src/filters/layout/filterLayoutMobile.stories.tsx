import React from "react";
import "../../../.storybook/stories.less";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterLayoutMobile } from "./filterLayoutMobile";
import { SearchInputMobile } from "../searchInput";
import { ThemeLoader } from "../../internalHelpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "oort/filters/layout/mobile",
  component: FilterLayoutMobile,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FilterLayoutMobile>;

export default meta;

const Template: ComponentStory<typeof FilterLayoutMobile> = (args) => {
  return (
    <>
      <ThemeLoader />
      <FilterLayoutMobile {...args}>
        <SearchInputMobile title="Search 1" onChange={() => {}} />
        <SearchInputMobile title="Search 2" onChange={() => {}} />
      </FilterLayoutMobile>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {
  activeFiltersCounter: 1,
  // sortBy?: ReactNode
  // children: ChildType[] | ChildType
  onApply: () => {},
  onClearAll: () => {},
  // onCancel?: () => {}
};
