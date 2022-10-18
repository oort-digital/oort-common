
import React from "react";
import "../styles/antOverride.less";
import "../styles/fonts.css";

// import '@oort/ui/dist/style.css';
// import '../oortLib.less';
import {BrowserRouter as Router } from 'react-router-dom';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConnectorNames, IConnector, InjectedConnector } from "@oort/web3-connectors";
import { logger } from "@oort/logger";
import { INavItems } from "./navMenu";
import { lazy } from "react";
import { useTheme } from "../effects";
import { TestCarousel } from "./testCarousel";
import { ZERO_ADDR } from "../utils";
import LayoutMobile from "./layoutMobile";
import { navItems, TestContent, web3 } from "./layoutStoriesCommon";

const DarkTheme = lazy(() => import("../styles/theme/darkTheme"));
const LightTheme = lazy(() => import("../styles/theme/lightTheme"));

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/layout/mobile',
  component: LayoutMobile,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LayoutMobile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LayoutMobile> = (args) => {

  const [isDark] = useTheme()

  return <>
    { isDark ? <DarkTheme /> : <LightTheme /> }
    <Router>
      <LayoutMobile {...args} />
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

const isActiveFunc = (href: string) => {
  return href.includes('game-hub.oort.local/nfts');
}

export const ActiveCollapse = Template.bind({});
ActiveCollapse.args = {
  navItems: navItems,
  children: TestContent,
  isActiveFunc: isActiveFunc
};


