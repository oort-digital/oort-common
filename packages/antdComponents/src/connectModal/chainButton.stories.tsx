import React from "react";
import "../../.storybook/index.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ChainButton } from "./chainButton";
import { IChain } from "@oort-digital/web3-connectors";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "src/connectModal/chainButton",
  component: ChainButton,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ChainButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ChainButton> = (args) => (
  <ChainButton {...args} />
);

const chain: IChain = {
  chainId: 1,
  name: "Ethereum",
};

const onClick = () => {
  alert("clicked");
};

export const Active = Template.bind({});
Active.args = {
  loading: false,
  chain: chain,
  isActive: true,
  canSwitchChain: true,
  onClick: onClick,
};

export const NotActive = Template.bind({});
NotActive.args = {
  loading: false,
  chain: chain,
  isActive: false,
  canSwitchChain: true,
  onClick: onClick,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  chain: chain,
  isActive: false,
  canSwitchChain: true,
  onClick: onClick,
};

export const Disabled = Template.bind({});
Disabled.args = {
  loading: false,
  disabled: true,
  chain: chain,
  isActive: false,
  canSwitchChain: true,
  onClick: onClick,
};
