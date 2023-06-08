import React from "react";
import "../styles/antOverride.less";
import "../styles/fonts.css";
import { Meta, StoryObj } from '@storybook/react';
import { ThemeLoader } from "../internalHelpers";
import { OortModalMobile } from "./oortModalMobile"
import { FooterButtons, IFooterBtn } from "./footerButtons";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'oort/modalMobile',
  component: OortModalMobile,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: 'iphone6',
    },
  },
} satisfies Meta<typeof OortModalMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

const onCancel = () => { alert('onCance') }

export const Primary: Story = {
  args: {
    visible: true,
    title: 'modal title',
    onCancel,
    children: <ThemeLoader />
  }
};

const okBtn: IFooterBtn = {
  text: 'ok'
}

export const CustomFooterButtons: Story = {
  args: {
    visible: true,
    title: 'modal title',
    onCancel,
    children: <ThemeLoader />,
    footer: <FooterButtons okBtn={okBtn} />
  }
};