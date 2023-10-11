import React from "react";
import { type Meta, type StoryObj } from "@storybook/react";
import { PageLoader, IPageLoaderProps } from "./pageLoader";
import { OortConfigProvider } from "../oortConfigProvider";

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

  render: (props: IPageLoaderProps) => (
    <OortConfigProvider>
      <PageLoader {...props}></PageLoader>
    </OortConfigProvider>
  ),
};

export const WithContent: Story = {
  args: {
    visible: true,
  },

  render: (props: IPageLoaderProps) => (
    <OortConfigProvider>
      <PageLoader {...props}>
        <button onClick={() => alert("clicked")}>try to click</button>
        <img
          style={{ height: "200px" }}
          src="https://static.oort.digital/80001/0x02d779ede7f246f7e529ca9942e9fd216985898c/41"
        ></img>
      </PageLoader>
    </OortConfigProvider>
  ),
};
