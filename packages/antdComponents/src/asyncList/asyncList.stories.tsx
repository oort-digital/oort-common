import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { IProps, AsyncList } from "./asyncList";
import { OortConfigProvider } from "../oortConfigProvider";

const meta = {
  title: "src/asyncList",
  component: AsyncList,

  render: (args: IProps<IItem>) => {
    return (
      <OortConfigProvider>
        <AsyncList {...args} />
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof AsyncList>;

export default meta;
type Story = StoryObj<typeof meta>;

interface IItem {
  name: string;
}

const getItems = (count: number): IItem[] => {
  const result: IItem[] = [];
  for (let i = 0; i < count; i++) {
    result.push({ name: `Item ${i + 1}` });
  }
  return result;
};

const itemRenderer = (item: IItem): React.ReactElement => <>{item.name}</>;

export const Main: Story = {
  args: {
    items: getItems(100),
    itemRenderer: itemRenderer,
    loading: true,
  },
};

export const Loading: Story = {
  args: {
    items: [],
    itemRenderer: itemRenderer,
    loading: true,
  },
};
