import { Meta, StoryObj } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { OortConfigProvider } from "../../oortConfigProvider";
import React from "react";
import {
  IFooterButtonsMobileProps,
  FooterButtonsMobile,
} from "./footerButtonsMobile";
import { IFooterBtn } from "./typesAndInterfaces";

function Wrap(props: IFooterButtonsMobileProps) {
  return (
    <OortConfigProvider>
      <FooterButtonsMobile {...props} />
    </OortConfigProvider>
  );
}

const meta = {
  title: "src/oortModal/footerButtonsMobile",
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
} satisfies Meta<typeof FooterButtonsMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClick = () => {
  alert("onClick");
};

const okButton: IFooterBtn = {
  text: "Ok",
  onClick,
  isMainButton: true,
  type: "primary",
};

const cancelBtn: IFooterBtn = {
  text: "Cancel",
  onClick,
};

export const SingleButtons: Story = {
  args: {
    buttons: [okButton],
  },
};

export const TwoButtons: Story = {
  args: {
    buttons: [cancelBtn, okButton],
  },
};

export const SingleBtnDepricated: Story = {
  args: {
    okBtn: okButton,
    onOk: onClick,
  },
};

export const TwoButtonsDepricated: Story = {
  args: {
    okBtn: okButton,
    cancelBtn,
    onCancel: onClick,
    onOk: onClick,
  },
};
