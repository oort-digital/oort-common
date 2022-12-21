
import '../styles/antOverride.less';
import '../styles/fonts.css';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BorrowAssetCard, IBorrowAssetCardProps, IBorrowAssetItem } from './borrowAssetCard';
import { ThemeLoader } from '../internalHelpers';
import { BigNumber } from 'ethers';
import { ZERO_ADDR } from '../utils';
import { IMarketplaceConfig, MarketplaceEnum } from '../viewOn';
import { Col, Row } from 'antd';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/assetCard/borrow',
  component: BorrowAssetCard,

  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'fullscreen',
  },
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    //backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof BorrowAssetCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BorrowAssetCard> = (args: IBorrowAssetCardProps<IBorrowAssetItem>) => <>
   <ThemeLoader />
   <Row>
    <Col xs={24} sm={24} md={10} lg={8} xl={6} xxl={6}>
      <BorrowAssetCard {...args} />
    </Col>
   </Row>
</>

const assetItem: IBorrowAssetItem = {
  nftName: 'test nft',
  tokenAddress: ZERO_ADDR,
  tokenId: BigNumber.from(1),
  projectName: 'test project',
  nftAmount: 5,
  imgSrc: 'https://static.oort.digital/137/0x5a68f10109228ce53a46b5ce60e2db4af74192cb/1822',
  earningGoal: BigNumber.from(1),
  durationHours: 2,
  currency: { uiName: 'DAI', decimals: 18 },
  collateral: BigNumber.from(1)
}

const marketplaceConfig: IMarketplaceConfig = {
  assetItemUrlTemplate: 'https://testnets.opensea.io/assets/{chain-name}/{address}/{token-id}',
  name: MarketplaceEnum.opensea
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  assetItem: assetItem,
  owner: ZERO_ADDR,
  chainId: 1,
  marketplace: marketplaceConfig,
  onClick: (asset: IBorrowAssetItem) => { console.log('clicked') },
  href: 'https://rental.oort.digital/borrow'
}

export const NoHref = Template.bind({})
NoHref.args = {
  assetItem: assetItem,
  owner: ZERO_ADDR,
  chainId: 1,
  marketplace: marketplaceConfig,
  onClick: (asset: IBorrowAssetItem) => {
    console.log('clicked')
  }
};
