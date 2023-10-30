import "../../../.storybook/stories.less";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SearchInput } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "src/filters/searchInput",
  component: SearchInput,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => {
  const style = {
    maxWidth: "250px",
  };

  const mergedArgs = {
    ...args,
    ...{ style },
  };

  return <SearchInput {...mergedArgs} />;
};

export const Empty = Template.bind({});
Empty.args = {
  placeholder: "enter text",
  onChange: (txt) => {},
};

export const WithText = Template.bind({});
WithText.args = {
  value: "123 qwerty AAAA",
  placeholder: "enter text",
  onChange: (txt) => {},
};
