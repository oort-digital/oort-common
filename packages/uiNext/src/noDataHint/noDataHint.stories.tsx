import "../styles/antOverride.less";
import "../styles/fonts.css";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeLoader } from "../internalHelpers";
import { NoDataHint } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/noDataHint',
  component: NoDataHint,
} as ComponentMeta<typeof NoDataHint>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NoDataHint> = (args) => {

  return <>
    <ThemeLoader />
    <NoDataHint {...args} />
  </>
}

export const main = Template.bind({});

export const customText = Template.bind({});
customText.args = {
  text: 'Custom text'
};
