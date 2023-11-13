import "../../../.storybook/index.scss";
import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InMemoryStoreStub } from "./testStores";
import { ICollectionFilterItem } from "./stores";
import { BscIcon, PolygonIcon, EthIcon } from "../../icons";
import { OortConfigProvider } from "../../oortConfigProvider";
import {
  IStaticCollectionFilterPopoverContentProps,
  StaticCollectionFilterPopoverContent,
} from "./staticCollectionFilterPopoverContent";

const meta = {
  title: "src/filters/staticCollectionFilterPopoverContent",
  component: StaticCollectionFilterPopoverContent,
} satisfies Meta<typeof StaticCollectionFilterPopoverContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const inMemoryStore = new InMemoryStoreStub({
  useFavorites: true,
  useRecent: true,
  noIcons: false,
});
inMemoryStore.setApplied([1, 2]);

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
export const Main: Story = {
  args: {
    title: "Title",
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    items: items,
    searchable: true,
    showClose: true,
    showCancel: false,
    showClear: true,
  },

  render: (args: IStaticCollectionFilterPopoverContentProps) => {
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
      <OortConfigProvider>
        <div
        // style={{
        //   backgroundColor: "red",
        // }}
        >
          <div>selected: {JSON.stringify(applied)}</div>
          <StaticCollectionFilterPopoverContent {...mergedProps} />
        </div>
      </OortConfigProvider>
    );
  },
};
