import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IOortModalMobileProps, OortModalMobile } from "./oortModalMobile";
import { IFooterBtn, FooterButtonsMobile } from "./footerButtons";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { OortConfigProvider } from "../oortConfigProvider";

function Wrap(props: IOortModalMobileProps) {
  return (
    <OortConfigProvider>
      <OortModalMobile {...props} />
    </OortConfigProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "src/oortModal/oortModalMobile",
  component: Wrap,
  parameters: {
    //👇 The viewports object from the Essentials addon
    viewport: {
      //👇 The viewports you want to use
      viewports: INITIAL_VIEWPORTS,
      //👇 Your own default viewport
      defaultViewport: "iphone6",
    },
  },
} satisfies Meta<typeof OortModalMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

const onCancel = () => {
  alert("onCance");
};

export const Primary: Story = {
  args: {
    visible: true,
    title: "modal title",
    onCancel,
    children: <></>,
  },
};

const okBtn: IFooterBtn = {
  text: "ok",
};

export const CustomFooterButtons: Story = {
  args: {
    visible: true,
    title: "modal title",
    onCancel,
    children: <></>,
    footer: <FooterButtonsMobile okBtn={okBtn} />,
  },
};
