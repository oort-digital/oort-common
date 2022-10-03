import "../../styles/antOverride.less";
import "../../styles/theme/light.less";
import "../../styles/fonts.css";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemSourceStub } from "./itemSourceStub";
import { ICollectionFilterItem } from "./typesAndInterfaces";
import { CollectionFilterEventTypes, CollectionFilterMobile, FilterListenerType, ICollectionFilterMobileProps } from "./collectionFilterMobile";
import { Row, Col } from "antd";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/collectionMobile',
  component: CollectionFilterMobile,

} as ComponentMeta<typeof CollectionFilterMobile>;


const onChange = (collections: ICollectionFilterItem[]) => {
  debugger
  collections.forEach(x => console.log(`collectionMobile.onChange: ${JSON.stringify(x)}`))
}


let onSubmit: FilterListenerType
let onClear: FilterListenerType
let onClose: FilterListenerType

function addFilterEventListener(eventType: CollectionFilterEventTypes, listener: FilterListenerType) {
  if(eventType === "submit") {
    onSubmit = listener
  }
  switch(eventType) {
    case 'submit':
      onSubmit = listener
      break

    case 'clear':
      onClear = listener
      break

    case 'close':
      onClose = listener
      break
  }
}

const removeFilterEventListener = (eventType: CollectionFilterEventTypes, listener: FilterListenerType) => {
  console.log(`collectionMobile.removeFilterEventListener: ${eventType}`)
}

const Template: ComponentStory<typeof CollectionFilterMobile> = (args: ICollectionFilterMobileProps) => {
  return <>
    <button onClick={() => onSubmit()}>submit</button>
    <button onClick={() => onClear()}>clear</button>
    <button onClick={() => onClose()}>close</button>

    <Row style={{ marginTop: '20px' }}>
      <Col span={6}>
        <CollectionFilterMobile {...args} />
      </Col>
    </Row>
  </>
}

export const Main = Template.bind({});
Main.args = {
  title: 'Title',
  searchPlaceholder: 'Enter text',
  applied: [1, 2],
  cacheKeyPrefixFunc: () => 'storybook_collection_filter',
  itemSource: new ItemSourceStub(),
  onChange: onChange,
  searchable: true,
  selectSingle: false,
  addFilterEventListener: addFilterEventListener,
  removeFilterEventListener: removeFilterEventListener
}
