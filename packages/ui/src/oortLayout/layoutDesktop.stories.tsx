import "../styles/antOverride.less";
import "../styles/fonts.css";

// import '@oort/ui/dist/style.css';
// import '../oortLib.less';
import {BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import LayoutDesktop from './layoutDesktop';
import { lazy } from "react";
import { useTheme } from "../effects";
import { isActiveFunc, navItems, TestContent, web3 } from "./layoutStoriesCommon";

const DarkTheme = lazy(() => import("../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../styles/theme/lightTheme"));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/layout/desktop',
  component: LayoutDesktop,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LayoutDesktop>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LayoutDesktop> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Router>
      <LayoutDesktop {...args} />
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
