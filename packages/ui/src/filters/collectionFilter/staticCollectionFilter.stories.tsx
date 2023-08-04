import React, { useState } from "react";
import "../../../.storybook/stories.less";
import { Meta, StoryObj } from "@storybook/react";
import { InMemoryStoreStub } from "./testStores";

import { ICollectionFilterItem } from "./stores";
import { BscIcon, PolygonIcon, EthIcon } from "../../icons";
import { Button } from "antd";
import { StaticCollectionFilter } from "./staticCollectionFilter";

const meta = {
  title: "oort/filters/staticCollection",
  component: StaticCollectionFilter,
} satisfies Meta<typeof StaticCollectionFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

const inMemoryStore = new InMemoryStoreStub({
  useFavorites: true,
  useRecent: true,
  noIcons: false,
});
inMemoryStore.setApplied([1, 2]);

const templateStyle = { height: "1000px" };

const getIcon = (i: number) => {
  const iconNum = (i + 1) % 3;

  if (iconNum === 1) {
    return <BscIcon />;
  }

  if (iconNum === 2) {
    return <EthIcon />;
  }

  return <PolygonIcon />;
};

const generateItems = (count: number) => {
  const result: ICollectionFilterItem[] = [];
  for (let i = 0; i < count; i++) {
    result.push({
      key: i,
      title: `${i + 1} item`,
      icon: getIcon(i),
    });
  }
  return result;
};

const items = generateItems(40);
export const NoTriggerButton: Story = {
  args: {
    title: "Title",
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    items: items,
    searchable: true,
    showTriggerButton: false,
    showClose: true,
    showCancel: false,
    showClear: true,
  },

  render: (args) => {
    const [visible, onVisibleChange] = useState(false);

    const [applied, setApplied] = useState([0]);

    const onChange = (collections: ICollectionFilterItem[]) => {
      setApplied(collections.map((x) => x.key as number));
    };

    const mergedProps = {
      ...args,
      ...{ visible, onVisibleChange, onChange, applied },
    };

    return (
      <div style={templateStyle}>
        <div>selected: {JSON.stringify(applied)}</div>
        <Button onClick={() => onVisibleChange(true)}>Open</Button>
        <StaticCollectionFilter {...mergedProps} />
      </div>
    );
  },
};
