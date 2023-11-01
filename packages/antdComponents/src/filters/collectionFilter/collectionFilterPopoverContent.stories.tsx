import React from "react";
import "../../../.storybook/index.scss";
import { Meta, StoryObj } from "@storybook/react";
import {
  CollectionFilterPopoverContent,
  ICollectionFilterPopoverContentProps,
} from "./collectionFilterPopoverContent";
import { OortConfigProvider } from "../../oortConfigProvider";
import {
  InMemoryStoreStub,
  LoadingStoreStub,
  NftsCollectionStore,
  NoDataStoreStub,
} from "./testStores";

import {
  StaticCollectionFilterStore,
  ICollectionFilterItem,
  SelectMode,
} from "./stores";
import { BscIcon, PolygonIcon, EthIcon } from "../../icons";
import { Button } from "antd";

const templateStyle = { height: "1000px" };

const meta = {
  title: "src/filters/collectionFilterPopoverContent",
  component: CollectionFilterPopoverContent,
  render: (props: ICollectionFilterPopoverContentProps) => {
    return (
      <OortConfigProvider>
        <div style={templateStyle}>
          <CollectionFilterPopoverContent {...props} />
        </div>
      </OortConfigProvider>
    );
  },
} satisfies Meta<typeof CollectionFilterPopoverContent>;

export default meta;
type Story = StoryObj<typeof meta>;

const inMemoryStore = new InMemoryStoreStub({
  useFavorites: true,
  useRecent: true,
  noIcons: false,
});
inMemoryStore.setApplied([1, 2]);

export const Main: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: inMemoryStore,
    onChange: (collections: ICollectionFilterItem[]) => {
      inMemoryStore.setApplied(collections.map((x) => x.key));
    },
    searchable: true,
    circleIcons: true,
    popoverStyle: { width: "350px" },
  },
};

const inMemoryNoFavoriteStore = new InMemoryStoreStub({
  useFavorites: false,
  useRecent: true,
  noIcons: true,
});

export const MainNoFavorite: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: inMemoryNoFavoriteStore,
    onChange: (collections: ICollectionFilterItem[]) => {
      inMemoryNoFavoriteStore.setApplied(collections.map((x) => x.key));
    },
    searchable: true,
    circleIcons: true,
  },
};

const nftsStore = new NftsCollectionStore();
// nftsStore.setApplied([1, 2])
// nftsStore.setApplied([30])

const onChangeNfts = (collections: ICollectionFilterItem[]) => {
  nftsStore.setApplied(collections.map((x) => x.key));
};

export const Nfts: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: nftsStore,
    onChange: onChangeNfts,
    searchable: true,
    circleIcons: true,
  },
};

const noDataStore = new NoDataStoreStub();
export const NoData: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: noDataStore,
    onChange: onChangeNfts,
    searchable: true,
    circleIcons: true,
  },
};

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
      title: `${i + 1} list item`,
      icon: getIcon(i),
    });
  }
  return result;
};

const staticStore = new StaticCollectionFilterStore(
  SelectMode.SingleRequired,
  generateItems(10)
);
staticStore.setApplied([1]);
export const SingleTabStatic: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: staticStore,
    onChange: (collections: ICollectionFilterItem[]) => {
      staticStore.setApplied(collections.map((x) => x.key));
    },
    searchable: false,
    popoverStyle: { width: "300px" },
  },
};

const loadingStore = new LoadingStoreStub();
export const Loading: Story = {
  args: {
    popoverTitle: "PopoverTitle",
    searchPlaceholder: "Enter text",
    filterStore: loadingStore,
    searchable: true,
  },
};
