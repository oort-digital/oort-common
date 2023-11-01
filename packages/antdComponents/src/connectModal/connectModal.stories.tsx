import React from "react";
import "../../.storybook/index.scss";
import {
  ComponentStory,
  ComponentMeta,
  StoryObj,
  Meta,
} from "@storybook/react";
import { ConnectModal, IWeb3 } from ".";
import {
  ConnectorNames,
  EMPTY_CHAIN,
  IChainInfo,
  IConnector,
} from "@oort-digital/web3-connectors";
import { delayAsync, ZERO_ADDR } from "@oort-digital/utils";
import { IConnectModalProps } from "./connectModal";
import { Web3StoreStub } from "../stubs";
import { OortConfigProvider } from "../oortConfigProvider";

const meta = {
  title: "src/connectModal",
  component: ConnectModal,

  render: (args) => {
    return (
      <OortConfigProvider>
        <ConnectModal {...args} />
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof ConnectModal>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const Connected: Story = {
  args: {
    web3: web3,
    visible: true,
    supportedWallets,
  },
};

export const NotConnected: Story = {
  args: {
    web3: web3NotConnected,
    visible: true,
    supportedWallets,
  },
};

export const ExpectedChain: Story = {
  args: {
    web3: web3,
    visible: true,
    expectedChainId: 5,
    supportedWallets,
  },
};
