import "../../.storybook/index.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ConnectButton } from "./connectButton";
import { MetamaskIcon } from "./metamaskIcon";
import React from "react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "src/connectModal/connectButton",
  component: ConnectButton,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConnectButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConnectButton> = (args) => (
  <ConnectButton {...args} />
);

const onClick = () => alert("button was clicked");

export const NotActive = Template.bind({});
NotActive.args = {
  walletIcon: MetamaskIcon,
  walletName: "Metamask",
  labelText: "Connect",
  onClick,
};

export const Connected = Template.bind({});
Connected.args = {
  account: "0x0000000000000000000000000000000000000000",
  walletIcon: MetamaskIcon,
  walletName: "Metamask",
  labelText: "some text",
  onClick,
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  walletIcon: MetamaskIcon,
  walletName: "Metamask",
  labelText: "some text",
  onClick,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  walletIcon: MetamaskIcon,
  walletName: "Metamask",
  labelText: "some text",
  onClick,
};
