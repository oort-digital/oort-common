import React from "react";
import "../../.storybook/stories.less";
import "../styles/theme/dark.less";

import { Meta, StoryObj } from "@storybook/react";
import { TxModal } from "./txModal";
import { IFooterBtn } from "../oortModal";
import { ITransactionInfoItem, ITxModalProps } from "./common";
import { TxLink, ITxLinkProps } from "./txLink";
import { EtherAddress } from "./etherAddress";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "oort/txModal/txModal",
  component: TxModal,
} satisfies Meta<typeof TxModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const okBtn: IFooterBtn = {
  text: "Ok",
};

const cancelBtn: IFooterBtn = {
  text: "Cancel",
};

const onOk = (e: React.MouseEvent<HTMLElement>) => alert("onOk");
const onCancel = () => alert("onCancel");

const blockExplorer = "https://mumbai.polygonscan.com/";
const txLinkProps: ITxLinkProps = {
  blockExplorer,
  hash: "0xcf5bd9729e365b59cdb8b7bfc2c692d9355008be4dd91129c997d7e964da3ac4",
  status: "pending",
};

const txItems: ITransactionInfoItem[] = [
  { name: "item 1", value: "value 1" },
  { name: "item 2", value: "value 2" },
  { name: "Tx status", value: <TxLink {...txLinkProps} /> },
  {
    name: "Address",
    value: (
      <EtherAddress
        blockExplorer={blockExplorer}
        address="0x09385a960a2e0b6b4516d341534da92cb2a50085"
      />
    ),
  },
];

const props: ITxModalProps = {
  visible: true,
  title: "title",
  description: "description",
  okBtn,
  cancelBtn,
  onOk,
  onCancel,
  txItems,
  waiting: false,
};

export const Primary: Story = {
  args: props,
};
