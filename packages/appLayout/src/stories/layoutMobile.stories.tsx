import React from "react";
import "../../.storybook/index.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Meta, StoryObj } from "@storybook/react";
import LayoutMobile from "../layoutMobile";
import { navItems, TestContent, testNavItems } from "./common";
import { Web3StoreStub } from "./web3StoreStub";
import { OortConfigProvider } from "@oort-digital/antd-components";
import { ILayoutProps } from "../typesAndInterfaces";
// import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ConnectorNames } from "@oort-digital/web3-connectors";

const meta = {
  title: "oort/layout/mobile",
  component: LayoutMobile,
  /*
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
  */
  render: (props: ILayoutProps) => {
    return (
      <OortConfigProvider>
        <Router>
          <LayoutMobile {...props} />
        </Router>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof LayoutMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

const web3 = new Web3StoreStub();
const supportedWallets: ConnectorNames[] = [
  ConnectorNames.Injected,
  ConnectorNames.WalletConnect,
];

export const WithWeb3: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    supportedWallets,
    web3,
  },
};

export const WithoutWeb3: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    supportedWallets,
  },
};

export const ActiveCollapse: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    _stubs: {
      getCurLocation: () => new URL("https://game-hub.oort.local/nfts"),
    },
    supportedWallets,
  },
};

export const WithFaucet: Story = {
  args: {
    navItems: testNavItems,
    children: TestContent,
    supportedWallets,
  },
};
