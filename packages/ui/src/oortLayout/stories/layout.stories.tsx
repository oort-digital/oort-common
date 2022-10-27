import "../../styles/antOverride.less";
import "../../styles/fonts.css";
import {BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import React, { lazy } from "react";
import { useTheme } from "../../effects";
import { Layout } from "..";
import { isActiveFunc, navItems, TestContent, web3 } from "./common";

const DarkTheme = lazy(() => import("../../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../../styles/theme/lightTheme"));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/layout',
  component: Layout,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Layout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Layout> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Router>
      <Layout {...args} />
    </Router>
    
  </>
}


export const WithWeb3 = Template.bind({});
WithWeb3.args = {
  navItems: navItems,
  web3: web3,
  children: TestContent
};

export const WithoutWeb3 = Template.bind({});
WithoutWeb3.args = {
  navItems: navItems,
  children: TestContent
};

export const ActiveCollapse = Template.bind({});
ActiveCollapse.args = {
  navItems: navItems,
  children: TestContent,
  isActiveFunc: isActiveFunc
};


