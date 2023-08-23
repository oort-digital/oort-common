import "../../../.storybook/stories.less";
import { BrowserRouter as Router } from "react-router-dom";
import { StoryObj, Meta } from "@storybook/react";
import React from "react";
import { Layout } from "..";
import { isActiveFunc, navItems, TestContent, testNavItems } from "./common";
import { Web3StoreStub } from "./web3StoreStub";
import { ILayoutProps } from "../typesAndInterfaces";
import { Button } from "antd";
import { ConnectorNames } from "@oort-digital/web3-connectors";

const meta = {
  title: "oort/layout",
  component: Layout,
  render: (props: ILayoutProps) => {
    return (
      <Router>
        <Layout {...props} />
      </Router>
    );
  },
} satisfies Meta<typeof Layout>;

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
    web3: web3,
    oortTokenAddress: "0xD8341A4978a68Ed0ad558D745af5578e51102725",
    supportedWallets,
    children: (
      <>
        <Button onClick={() => web3.connect(1, ConnectorNames.Injected)}>
          Connect
        </Button>
        {TestContent}
      </>
    ),
  },
};

export const WithoutWeb3: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    supportedWallets,
  },
};

export const ActiveDashboard: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    _stubs: {
      getCurLocation: () => new URL("https://app-test.oort.digital"),
    },
    supportedWallets,
  },
};

export const ActiveRent: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    _stubs: {
      getCurLocation: () =>
        new URL("https://app-test.oort.digital/rent/avtivities"),
    },
    supportedWallets,
  },
};

export const ActiveLeaderboard: Story = {
  args: {
    navItems: navItems,
    children: TestContent,
    _stubs: {
      getCurLocation: () =>
        new URL("https://app-test.oort.digital/leaderboard"),
    },
    supportedWallets,
  },
};

export const WithFaucet: Story = {
  args: {
    navItems: testNavItems,
    web3: web3,
    oortTokenAddress: "0xcce87c5b269c94b31ec437b1d7d85bf1413b7804",
    supportedWallets,
    children: (
      <>
        <Button onClick={() => web3.connect(1, ConnectorNames.Injected)}>
          Connect
        </Button>
        {TestContent}
      </>
    ),
  },
};
