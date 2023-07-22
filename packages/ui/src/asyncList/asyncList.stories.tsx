import "../../.storybook/stories.less";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeLoader } from "../internalHelpers";
import { IProps, AsyncList } from "./asyncList";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "oort/asyncList",
  component: AsyncList,
} as ComponentMeta<typeof AsyncList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AsyncList> = (args: IProps<IItem>) => {
  return (
    <>
      <ThemeLoader />
      <AsyncList {...args} />
    </>
  );
};

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

export const main = Template.bind({});
main.args = {
  items: getItems(100),
  itemRenderer: itemRenderer,
  loading: true,
};

export const loading = Template.bind({});
loading.args = {
  items: [],
  itemRenderer: itemRenderer,
  loading: true,
};
