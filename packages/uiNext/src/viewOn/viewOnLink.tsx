
import { Spin } from 'antd'
import { BigNumber } from 'ethers'
import { useEffect, useState} from 'react'
import { INftScanConfig } from './nftScanApi'
import { getViewOnIcon, getViewOnUrl, IMarketplaceConfig } from './utils'
import "./viewOnLink.less"

interface IProps {
    nftScanConfig: INftScanConfig
    showLabel: boolean
    marketplace: IMarketplaceConfig
    chainId: number,
    assetItem: { tokenAddress: string, tokenId: BigNumber }
    loadingText?: string
}

export const ViewOnLink = ({ showLabel, marketplace, assetItem, chainId, loadingText, nftScanConfig }: IProps) => {

    const [ viewOnUrl, setViewOnUrl ] = useState('')

    useEffect(() => {

        getViewOnUrl({
            assetItem: assetItem,
            chainId: chainId,
            marketplace: marketplace
        }, nftScanConfig).then(url => setViewOnUrl(url))

    }, [ assetItem, chainId, marketplace ]);


    if(!viewOnUrl) {
        return <span className="view-on-link"><Spin size="small"></Spin><span className='loading-txt'>{loadingText}</span></span>
    }

    return <a href={viewOnUrl} className="view-on-link" target="_blank" rel="noreferrer">
        {getViewOnIcon(marketplace!.name)}
        {showLabel && <span className='view-on-label'>View on <span className='capitalize'>{marketplace!.name}</span></span>}
     </a>
}