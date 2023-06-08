import "../styles/antOverride.less";
import "../styles/fonts.css";
import { Meta, StoryObj } from '@storybook/react';
import { IFooterBtn, FooterButtons } from "./footerButtons";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'oort/oortModal/footerButtons',
  component: FooterButtons,
} satisfies Meta<typeof FooterButtons>;

export default meta;
type Story = StoryObj<typeof meta>;

const onClick = () => { alert('onClick') }


const okButton: IFooterBtn = {
  text: 'Ok',
  onClick,
  showLoadingIcon: true,
  type: "primary"
}

const cancelBtn: IFooterBtn = {
  text: 'Cancel',
  onClick
}

export const Primary: Story = {
  args: {
    buttons: [cancelBtn, okButton]
  }
};