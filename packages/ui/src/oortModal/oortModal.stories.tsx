import React from "react";
import "../styles/antOverride.less";
import "../styles/fonts.css";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterButtons, IFooterBtn, OortModal } from ".";
import { ThemeLoader } from "../internalHelpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/modal',
  component: OortModal,
} as ComponentMeta<typeof OortModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof OortModal> = (args) => {
  return <OortModal {...args} />
}

export const main = Template.bind({});
main.args = {
  visible: true,
  title: 'modal title',
  onCancel: (e: React.MouseEvent<HTMLElement>) => {},
  children: <ThemeLoader />
};

const okBtn: IFooterBtn = {
  text: 'ok'
}

export const footerButtons = Template.bind({});
footerButtons.args = {
  visible: true,
  title: 'modal title',
  onCancel: (e: React.MouseEvent<HTMLElement>) => {},
  children: <ThemeLoader />,
  footer: <FooterButtons okBtn={okBtn} />
};
