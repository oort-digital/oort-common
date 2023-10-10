import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageLoader, IPageLoaderProps } from "./pageLoader";

const meta = {
  title: "src/pageLoader",
  component: PageLoader,
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    visible: true,
  },

  render: (props: IPageLoaderProps) => <PageLoader {...props}></PageLoader>,
};

export const WithContent: Story = {
  args: {
    visible: true,
  },

  render: (props: IPageLoaderProps) => (
    <PageLoader {...props}>
      <button onClick={() => alert("clicked")}>try to click</button>
      <img
        style={{ height: "200px" }}
        src="https://static.oort.digital/80001/0x02d779ede7f246f7e529ca9942e9fd216985898c/41"
      ></img>
    </PageLoader>
  ),
};
