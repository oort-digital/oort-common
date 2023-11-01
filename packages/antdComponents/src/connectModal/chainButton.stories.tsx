import React from "react";
import "../../.storybook/index.scss";
import { Meta, StoryObj } from "@storybook/react";
import { ChainButton } from "./chainButton";
import { IChain } from "@oort-digital/web3-connectors";
import { OortConfigProvider } from "../oortConfigProvider";

const meta = {
  title: "src/connectModal/chainButton",
  component: ChainButton,

  render: (args) => {
    return (
      <OortConfigProvider>
        <ChainButton {...args} />
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof ChainButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const chain: IChain = {
  chainId: 1,
  name: "Ethereum",
};

const onClick = () => {
  alert("clicked");
};

export const Active: Story = {
  args: {
    loading: false,
    chain: chain,
    isActive: true,
    canSwitchChain: true,
    onClick: onClick,
  },
};

export const NotActive: Story = {
  args: {
    loading: false,
    chain: chain,
    isActive: false,
    canSwitchChain: true,
    onClick: onClick,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    chain: chain,
    isActive: false,
    canSwitchChain: true,
    onClick: onClick,
  },
};

export const Disabled: Story = {
  args: {
    loading: false,
    disabled: true,
    chain: chain,
    isActive: false,
    canSwitchChain: true,
    onClick: onClick,
  },
};
