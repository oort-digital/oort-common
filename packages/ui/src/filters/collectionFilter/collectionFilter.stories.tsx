import "../../styles/antOverride.less";
import "../../styles/theme/light.less";
import "../../styles/fonts.css";
// import '@oort/ui/dist/style.css';
// import '../oortLib.less';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionFilter } from "./collectionFilter";
import { CollectionFilterStoreStub } from "./collectionFilterStoreStub";
import { ICollectionFilterItem } from "./typesAndInterfaces";
import React from "react";

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


const filterStore = new CollectionFilterStoreStub()

filterStore.setApplied([1, 2])

const Template: ComponentStory<typeof CollectionFilter> = (args) => <CollectionFilter {...args} />


const onChange = async (collections: ICollectionFilterItem[]) => {
  await filterStore.setApplied(collections.map(x => x.key))
}

export const Main = Template.bind({}); 
Main.args = {
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  searchPlaceholder: 'Enter text',
	filterStore: filterStore,
	onChange: onChange,
	searchable: true,
	selectSingle: false
}