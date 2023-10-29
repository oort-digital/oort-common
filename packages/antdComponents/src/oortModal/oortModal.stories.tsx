import React from "react";
// import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { IModalProps, OortModal } from "./oortModal";
import { FooterButtons, IFooterBtn } from "./footerButtons";
import { OortConfigProvider } from "../oortConfigProvider";

function Wrap(props: IModalProps) {
  return (
    <OortConfigProvider>
      <OortModal {...props} />
    </OortConfigProvider>
  );
}

const meta = {
  title: "src/oortModal/oortModal",
  component: Wrap,
} satisfies Meta<typeof Wrap>;

export default meta;
type Story = StoryObj<typeof meta>;

const onCancel = (e: React.MouseEvent<HTMLElement>) => {
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
    footer: <FooterButtons buttons={[okBtn]} />,
  },
};
