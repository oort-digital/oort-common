import "../../stories.less";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ICollectionFilterItem } from "./typesAndInterfaces";
import { CollectionFilterMobile, ICollectionFilterMobileProps } from "./collectionFilterMobile";
import { Row, Col } from "antd";
import { useFilterListeners } from "./useFilterListeners";
import React from "react";
import { InMemoryStoreStub } from "./testStores";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/collectionMobile',
  component: CollectionFilterMobile,

} as ComponentMeta<typeof CollectionFilterMobile>;

const Template: ComponentStory<typeof CollectionFilterMobile> = (args: ICollectionFilterMobileProps) => {

  const [add, remove, listeners] = useFilterListeners()

  args.addFilterEventListeners = add
  args.removeFilterEventListeners = remove

  return <>
    <button onClick={() => listeners!.submit()}>submit</button>
    <button onClick={() => listeners!.clear()}>clear</button>
    <button onClick={() => listeners!.close()}>close</button>

    <Row style={{ marginTop: '20px' }}>
      <Col span={6}>
        <CollectionFilterMobile {...args} />
      </Col>
    </Row>
  </>
}

const inMemoryFilterStore = new InMemoryStoreStub()
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
  searchable: true,
  selectSingle: false,
}
