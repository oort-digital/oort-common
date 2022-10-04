import "../../styles/antOverride.less";
import "../../styles/theme/light.less";
import "../../styles/fonts.css";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ItemSourceStub } from "./itemSourceStub";
import { ICollectionFilterItem } from "./typesAndInterfaces";
import { CollectionFilterMobile, ICollectionFilterMobileProps } from "./collectionFilterMobile";
import { Row, Col } from "antd";
import { useFilterListeners } from "./useFilterListeners";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/filters/collectionMobile',
  component: CollectionFilterMobile,

} as ComponentMeta<typeof CollectionFilterMobile>;


const onChange = (collections: ICollectionFilterItem[]) => {
  debugger
  collections.forEach(x => console.log(`collectionMobile.onChange: ${JSON.stringify(x)}`))
}


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
}
