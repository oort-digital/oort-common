import React from "react";
import "../styles/antOverride.less";
import "../styles/fonts.css";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CloseIcon } from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/icons/close',
  component: CloseIcon,
} as ComponentMeta<typeof CloseIcon>;


const style = {
  height: '10px',
  width: '10px'
}
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseIcon> = (args) => {

  return <div style={style}><CloseIcon {...args} /></div>
}

export const main = Template.bind({});
main.args = {

};
