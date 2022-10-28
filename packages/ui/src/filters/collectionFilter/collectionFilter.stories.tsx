import "../../styles/antOverride.less";
import "../../styles/theme/light.less";
import "../../styles/fonts.css";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionFilter } from "./collectionFilter";
import { InMemoryStoreStub, NftsCollectionStore } from "./testStores";
import { ICollectionFilterItem } from "./typesAndInterfaces";
import React from "react";
import { ThemeLoader } from "../../internalHelpers";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/collection',
  component: CollectionFilter,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CollectionFilter>;


const inMemoryFilterStore = new InMemoryStoreStub()
inMemoryFilterStore.setApplied([1, 2])

const templateStyle = { height: '1000px' }
const Template: ComponentStory<typeof CollectionFilter> = (args) => <>
  <ThemeLoader />
  <div style={templateStyle}>
    <CollectionFilter {...args} />
  </div>
</>


const onChange = (collections: ICollectionFilterItem[]) => {
  inMemoryFilterStore.setApplied(collections.map(x => x.key))
}

export const Main = Template.bind({}); 
Main.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  searchPlaceholder: 'Enter text',
	filterStore: inMemoryFilterStore,
	onChange: onChange,
	searchable: true,
	selectSingle: false
}


const nftsStore = new NftsCollectionStore()
// nftsStore.setApplied([1, 2])
// nftsStore.setApplied([30])

const onChangeNfts = (collections: ICollectionFilterItem[]) => {
  nftsStore.setApplied(collections.map(x => x.key))
}

export const Nfts = Template.bind({}); 
Nfts.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  searchPlaceholder: 'Enter text',
	filterStore: nftsStore,
	onChange: onChangeNfts,
	searchable: true,
	selectSingle: false
}