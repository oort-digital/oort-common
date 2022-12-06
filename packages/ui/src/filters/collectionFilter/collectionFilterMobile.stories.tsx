import "../../stories.less";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Row, Col } from "antd";
import { useFilterListeners } from "./useFilterListeners";
import React from "react";
import { InMemoryStoreStub } from "./testStores";
import { ICollectionFilterItem } from "./stores";
import { CollectionFilterMobile, ICollectionFilterMobileProps } from "./collectionFilterMobile";
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/collectionMobile',
  component: CollectionFilterMobile,

  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphone6',
    },
  }

} as ComponentMeta<typeof CollectionFilterMobile>;

const Template: ComponentStory<typeof CollectionFilterMobile> = (args: ICollectionFilterMobileProps) => {

  const [add, remove, listeners] = useFilterListeners()

  args.addFilterEventListeners = add
  args.removeFilterEventListeners = remove

  return <>
    <div style={{marginBottom: '20px'}}>
      <button onClick={() => listeners.submit()}>submit</button>
      <button onClick={() => listeners.clear()}>clear</button>
      <button onClick={() => listeners.close()}>close</button>
    </div>

    <CollectionFilterMobile {...args} />
  </>
}

const inMemoryFilterStore = new InMemoryStoreStub({})
inMemoryFilterStore.setApplied([1, 2])

const onChange = (collections: ICollectionFilterItem[]) => {
  inMemoryFilterStore.setApplied(collections.map(x => x.key))
}

export const Main = Template.bind({});
Main.args = {
  title: 'Title',
  searchPlaceholder: 'Enter text',
  filterStore: inMemoryFilterStore,
  onChange: onChange,
  searchable: true
}
