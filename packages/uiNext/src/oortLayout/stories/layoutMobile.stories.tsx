
import React from "react";
import "../../styles/antOverride.less";
import "../../styles/fonts.css";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useTheme } from "../../effects";
import LayoutMobile from "../layoutMobile";
import {navItems, TestContent, testNavItems} from "./common";
import { Web3StoreStub } from "./web3StoreStub";
import dynamic from "next/dynamic"

const DarkTheme = dynamic(() => import("../../styles/theme/darkTheme"));
const LightTheme = dynamic(() => import("../../styles/theme/lightTheme"));

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
    <LayoutMobile {...args} />
  </>
}

export const WithWeb3 = Template.bind({});
WithWeb3.args = {
  navItems: navItems,
  web3: new Web3StoreStub(),
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

export const WithFaucet = Template.bind({});
WithFaucet.args = {
  navItems: testNavItems,
  children: TestContent
}
