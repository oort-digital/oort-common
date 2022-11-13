import "../../stories.less";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionFilter } from "./collectionFilter";
import { InMemoryStoreStub, NftsCollectionStore, NoDataStoreStub } from "./testStores";
import React from "react";
import { ThemeLoader } from "../../internalHelpers";
import { StaticCollectionFilterStore, ICollectionFilterItem } from "./stores";

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

const noDataStore = new NoDataStoreStub()
export const NoData = Template.bind({}); 
NoData.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  searchPlaceholder: 'Enter text',
	filterStore: noDataStore,
	onChange: onChangeNfts,
	searchable: true,
	selectSingle: false
}


const generateItems = (count: number) => {
	const result: ICollectionFilterItem[] = []
	for(let i = 0; i < count; i++) {
		result.push({
			key: i,
			title: `${i+1} item`,
			iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRyZbR56vx1WJBb25cRQFBQLzgax11RjqFNA&usqp=CAU'
		})
	}
	return result
}

const staticStore = new StaticCollectionFilterStore(generateItems(10))

export const SingleTabStatic = Template.bind({}); 
SingleTabStatic.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
	searchPlaceholder: 'Enter text',
	filterStore: staticStore,
	onChange: onChange,
	searchable: true,
	selectSingle: false,
}