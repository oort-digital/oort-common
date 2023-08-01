import React from "react";
import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { OortModal } from "./oortModal";
import { FooterButtons, IFooterBtn } from "./footerButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "oort/oortModal/oortModal",
  component: OortModal,
} satisfies Meta<typeof OortModal>;

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
    footer: <FooterButtons okBtn={okBtn} />,
  },
};
