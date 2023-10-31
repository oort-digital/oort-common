// import "../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";
import React from "react";
import { OortConfigProvider } from "../oortConfigProvider";
import { Button } from "../button";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const meta = {
  title: "src/popover",
  component: Popover,

  render: (args) => {
    return (
      <OortConfigProvider>
        <Popover arrow={false} content={content} title="title" trigger="click">
          <Button>Click me</Button>
        </Popover>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
