
import '../styles/antOverride.less';
import '../styles/fonts.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ConnectButton } from "./connectButton"
import { MetamaskIcon } from './metamaskIcon';
import React from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/connectModal/connectButton',
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
const Template: ComponentStory<typeof ConnectButton> = (args) => <ConnectButton {...args} />;


export const Connected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Connected.args = {
  account: '0x0000000000000000000000000000000000000000',
	disabled: false,
	walletIcon: MetamaskIcon,
	walletName: 'Metamask',
	labelText: 'some text'
};

export const Loading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Loading.args = {
	loading: true,
	walletIcon: MetamaskIcon,
	walletName: 'Metamask',
	labelText: 'some text'
};
