import React from "react";
import "../styles/antOverride.less";
import "../styles/fonts.css";
import { Meta, StoryObj } from '@storybook/react';
import { FooterButtons, IFooterBtn, OortModal } from ".";
import { ThemeLoader } from "../internalHelpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'oort/modal',
  component: OortModal,
} satisfies Meta<typeof OortModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    visible: true,
    title: 'modal title',
    onCancel: (e: React.MouseEvent<HTMLElement>) => {},
    children: <ThemeLoader />
  },

  render: (props) => {
    return <OortModal {...props} />
  }
};

const okBtn: IFooterBtn = {
  text: 'ok'
}

export const CustomFooterButtons: Story = {
  args: {
    visible: true,
    title: 'modal title',
    onCancel: (e: React.MouseEvent<HTMLElement>) => {},
    children: <ThemeLoader />,
    footer: <FooterButtons okBtn={okBtn} />
  },

  render: (props) => {
    return <OortModal {...props} />
  }
};