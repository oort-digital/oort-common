import React from "react";
import "../../.storybook/index.scss";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConnectModal, IWeb3 } from ".";
import {
  ConnectorNames,
  EMPTY_CHAIN,
  IConnector,
} from "@oort-digital/web3-connectors";
import { delayAsync, ZERO_ADDR } from "@oort-digital/utils";
import { IConnectModalProps } from "./connectModal";
import { Web3StoreStub } from "../stubs";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "oort/connectModal",
  component: ConnectModal,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConnectModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConnectModal> = (
  args: IConnectModalProps
) => <ConnectModal {...args} />;

const chains: IChainInfo[] = [
  {
    name: "mumbai",
    chainId: 80001,
    rpcUrl: "https://rpc-mumbai.maticvigil.com",
    blockExplorer: "https://mumbai.polygonscan.com",

    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
  },
  {
    name: "goerli",
    chainId: 5,
    rpcUrl: "https://ethereum-goerli-rpc.allthatnode.com",
    blockExplorer: "https://goerli.etherscan.io",
  },
];

/*
https://oortdigital.slack.com/archives/C04EY5MLV50/p1671005355999189
Oort NFT Rental Marketplace
[API Key for Testnet]
*/

const supportedWallets: ConnectorNames[] = [ConnectorNames.Injected];

const web3 = new Web3StoreStub();
const supportedChains = web3.supportedChains;
const supportedConnectors = web3.supportedConnectors;
const web3NotConnected = {
  ...web3,
  ...{ chain: EMPTY_CHAIN, account: "", supportedChains, supportedConnectors },
};

export const Connected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Connected.args = {
  web3: web3,
  visible: true,
  supportedWallets,
};

export const NotConnected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NotConnected.args = {
  web3: web3NotConnected,
  visible: true,
  supportedWallets,
};

export const ExpectedChain = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ExpectedChain.args = {
  web3: web3,
  visible: true,
  expectedChainId: 5,
  supportedWallets,
};
