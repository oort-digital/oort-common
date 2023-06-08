import React from "react";
import "../styles/antOverride.less";
import "../styles/theme/dark.less";
import "../styles/fonts.css";
import { Meta, StoryObj } from '@storybook/react';
import { ThemeLoader } from "../internalHelpers";
import { TxModal } from "./txModal";
import { IFooterBtn } from "../oortModal";
import { ITransactionInfoItem, ITxModalProps } from "./common";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'oort/txModal/txModal',
  component: TxModal,
} satisfies Meta<typeof TxModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const okBtn: IFooterBtn = {
  text: 'Ok'
}

const cancelBtn: IFooterBtn = {
  text: 'Cancel'
}

const onOk = (e: React.MouseEvent<HTMLElement>) => alert('onOk');
const onCancel = () => alert('onCancel');

const txItems: ITransactionInfoItem[] = [
  { name: 'item 1', value: 'value: 1' },
  { name: 'item 2', value: 'value: 2' },
  { name: 'item 3', value: 'value: 3' },
  { name: 'item 4', value: 'value: 4' }
]

const props: ITxModalProps = {
  visible: true,
  title: 'title',
  description: 'description',
  okBtn,
  cancelBtn,
  onOk,
  onCancel,
  txItems,
  note: 'some note',
  waiting: false
}

export const Primary: Story = {
  args: props
};
