import "../../styles/antOverride.less";
import "../../styles/theme/light.less";
import "../../styles/fonts.css";
// import '@oort/ui/dist/style.css';
// import '../oortLib.less';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CollectionFilter } from "./collectionFilter";
import { ICollection } from "./collectionFilterContent";
import { CollectionFilterStore } from "./collectionFilterStore";
import { ItemSourceStub } from "./itemSourceStub";

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

const Template: ComponentStory<typeof CollectionFilter> = (args) => <CollectionFilter {...args} />


const collection: ICollection = {
	tokenAddress: 'testAddr',
	tokenName: 'test tocken',
}

const onChange = (collections: ICollection[]) => {}


const store = new CollectionFilterStore({
  cacheKeyPrefixFunc: () => 'storybook_collection_filter',
  itemSource: new ItemSourceStub()
})

export const Main = Template.bind({});
Main.args = {
  chainId: 1,
	title: 'Title',
	popoverTitle: 'PopoverTitle',
  searchPlaceholder: 'Enter text',
	applied: [collection],
	collectionFilterStore: store,
	onChange: onChange,
	searchable: true,
	selectSingle: true
};
