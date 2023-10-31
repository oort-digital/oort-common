import "../../.storybook/index.scss";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import React from "react";
import { OortConfigProvider } from "../oortConfigProvider";

const onChange = (e: any) => {
  alert("changed");
};

const meta = {
  title: "src/input",
  component: Input,

  render: (args) => {
    return (
      <OortConfigProvider>
        <div
          style={{
            background: "#11151A",
            height: "1000px",
            width: "100%",
            paddingTop: "50px",
            paddingLeft: "50px",
          }}
        >
          <Input
            style={{
              width: "100px",
            }}
            size="large"
            defaultValue={3}
            onChange={onChange}
          />
        </div>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
  },
};

export const PrimaryDisabled: Story = {
  args: {
    type: "primary",
    disabled: true,
  },
};
