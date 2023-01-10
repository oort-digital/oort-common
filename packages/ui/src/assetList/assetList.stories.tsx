import React from "react"
import "../styles/antOverride.less"
import "../styles/fonts.css"
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ThemeLoader } from "../internalHelpers"
import { IAssetListProps, AssetList } from "./assetList"
import { BorrowAssetCard, IBorrowAssetItem } from "../assetCard"
import { BigNumber } from "ethers"
import { ZERO_ADDR } from "../utils"
import { IMarketplaceConfig, MarketplaceEnum } from "../viewOn"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'oort/assetList',
  component: AssetList,
} as ComponentMeta<typeof AssetList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AssetList> = (args: IAssetListProps<IItem>) => {
  return <>
    <ThemeLoader />
    <AssetList {...args} />
  </> 
  
}

interface IItem {
  name: string
}



const getItems = (count: number): IBorrowAssetItem[] => {
  const result: IBorrowAssetItem[] = []
  for(let i = 0; i < count; i++) {
    result.push({
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
    })
  }
  return result
}

const marketplaceConfig: IMarketplaceConfig = {
  assetItemUrlTemplate: 'https://testnets.opensea.io/assets/{chain-name}/{address}/{token-id}',
  name: MarketplaceEnum.opensea
}

const itemRenderer = (item: IBorrowAssetItem) => <BorrowAssetCard
  assetItem={item}
  owner={ZERO_ADDR}
  chainId={1}
  marketplace={marketplaceConfig}
  onClick={(asset: IBorrowAssetItem) => {}}
  href={'https://rental.oort.digital/borrow'}
/>

export const main = Template.bind({});
main.args = {
  items: getItems(100),
  itemRenderer: itemRenderer,
  loading: true
}
