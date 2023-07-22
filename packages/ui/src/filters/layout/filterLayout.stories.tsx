import React from "react";
import "../../../.storybook/stories.less";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { FilterLayout } from "./filterLayout";
import { SearchInputMobile } from "../searchInput";
import { ThemeLoader } from "../../internalHelpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "oort/filters/layout/desktop",
  component: FilterLayout,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof FilterLayout>;

export default meta;

const Template: ComponentStory<typeof FilterLayout> = (args) => {
  return (
    <>
      <ThemeLoader />
      <FilterLayout {...args}>
        <SearchInputMobile title="Search 1" onChange={() => {}} />
        <SearchInputMobile title="Search 2" onChange={() => {}} />
      </FilterLayout>
    </>
  );
};

export const Main = Template.bind({});
Main.args = {};
