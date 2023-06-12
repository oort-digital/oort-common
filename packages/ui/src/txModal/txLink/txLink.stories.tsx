import React from "react";
import "../../styles/antOverride.less";
import "../../styles/theme/dark.less";
import "../../styles/fonts.css";
import { Meta, StoryObj } from '@storybook/react';
import { TxLink } from "./txLink"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'oort/txLink/txLink',
  component: TxLink,
} satisfies Meta<typeof TxLink>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    blockExplorer: 'https://mumbai.polygonscan.com/',
    hash: '0xcf5bd9729e365b59cdb8b7bfc2c692d9355008be4dd91129c997d7e964da3ac4',
    status: "pending"
  }
};
