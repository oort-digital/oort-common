import React, { useState } from "react";
import "../../stories.less";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionFilter, ICollectionFilterProps } from "./collectionFilter";
import { InMemoryStoreStub, LoadingStoreStub, NftsCollectionStore, NoDataStoreStub } from "./testStores";

import { ThemeLoader } from "../../internalHelpers";
import { StaticCollectionFilterStore, ICollectionFilterItem, SelectMode } from "./stores";
import { BscIcon, PolygonIcon, EthIcon } from "../../icons";
import { Button } from "antd";

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


const inMemoryStore = new InMemoryStoreStub({ useFavorites: true, useRecent: true, noIcons: false })
inMemoryStore.setApplied([1, 2])

const templateStyle = { height: '1000px' }
const Template: ComponentStory<typeof CollectionFilter> = (args: ICollectionFilterProps) => <>
  <ThemeLoader />
  <div style={templateStyle}>
    <CollectionFilter {...args} />
  </div>
</>

const NoTriggerButtonTemplate: ComponentStory<typeof CollectionFilter> = (args: ICollectionFilterProps) => {

	const [visible, onVisibleChange] = useState(false)

	const mergedProps = { ...args, ...{ visible, onVisibleChange } }

	return <>
		<ThemeLoader />
		<div style={templateStyle}>
			<Button onClick={() => onVisibleChange(true)}>Open</Button>
			<CollectionFilter {...mergedProps} />
		</div>
	</>
}


export const Main = Template.bind({}); 
Main.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  	searchPlaceholder: 'Enter text',
	filterStore: inMemoryStore,
	onChange: (collections: ICollectionFilterItem[]) => {
		inMemoryStore.setApplied(collections.map(x => x.key))
	},
	searchable: true,
	circleIcons: true,
	popoverStyle: { width: '350px' }
}

const inMemoryNoFavoriteStore = new InMemoryStoreStub({ useFavorites: false, useRecent: true, noIcons: true })

export const MainNoFavorite = Template.bind({}); 
MainNoFavorite.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  	searchPlaceholder: 'Enter text',
	filterStore: inMemoryNoFavoriteStore,
	onChange: (collections: ICollectionFilterItem[]) => {
		inMemoryNoFavoriteStore.setApplied(collections.map(x => x.key))
	},
	searchable: true,
	circleIcons: true,
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
	circleIcons: true
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
	circleIcons: true
}


const getIcon = (i: number) => {

	const iconNum = (i+1) % 3

	if(iconNum === 1) {
		return <BscIcon />
	}

	if(iconNum === 2) {
		return <EthIcon />
	}

	return <PolygonIcon />

}

const generateItems = (count: number) => {
	const result: ICollectionFilterItem[] = []
	for(let i = 0; i < count; i++) {
		result.push({
			key: i,
			title: `${i+1} list item`,
			icon: getIcon(i)
		})
	}
	return result
}

const staticStore = new StaticCollectionFilterStore(SelectMode.SingleRequired, generateItems(10))
staticStore.setApplied([1])
export const SingleTabStatic = Template.bind({}); 
SingleTabStatic.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
	searchPlaceholder: 'Enter text',
	filterStore: staticStore,
	onChange: (collections: ICollectionFilterItem[]) => {
		staticStore.setApplied(collections.map(x => x.key))
	},
	searchable: false,
	popoverStyle: { width: '300px' }
}

const noOptimalHeightStore = new StaticCollectionFilterStore(SelectMode.SingleRequired, generateItems(2))
noOptimalHeightStore.setApplied([1])
export const NoOptimalHeight = Template.bind({}); 
NoOptimalHeight.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
	searchPlaceholder: 'Enter text',
	filterStore: noOptimalHeightStore,
	onChange: (collections: ICollectionFilterItem[]) => {
		noOptimalHeightStore.setApplied(collections.map(x => x.key))
	},
	searchable: false,
	popoverStyle: { width: '300px' },
	calcOptimalListHeight: false
}

export const NoTriggerButton = NoTriggerButtonTemplate.bind({}); 
NoTriggerButton.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
	searchPlaceholder: 'Enter text',
	filterStore: staticStore,
	onChange: (collections: ICollectionFilterItem[]) => {
		staticStore.setApplied(collections.map(x => x.key))
	},
	searchable: true,
	showTriggerButton: false,
    showClose: true,
    showCancel: false,
    showClear: true,
}

const loadingStore = new LoadingStoreStub()
export const Loading = Template.bind({}); 
Loading.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
	searchPlaceholder: 'Enter text',
	filterStore: loadingStore,
	searchable: true
}