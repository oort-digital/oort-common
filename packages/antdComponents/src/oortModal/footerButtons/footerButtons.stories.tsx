import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IFooterBtn, FooterButtons } from "./";
import { IButtonsProps } from "./footerButtons";
import { OortConfigProvider } from "../../oortConfigProvider";

function Wrap(props: IButtonsProps) {
  return (
    <OortConfigProvider>
      <FooterButtons {...props} />
    </OortConfigProvider>
  );
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "src/oortModal/footerButtons",
  component: Wrap,
} satisfies Meta<typeof FooterButtons>;

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
