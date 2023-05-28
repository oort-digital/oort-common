import React from 'react'
import { Spin } from 'antd'
import { BigNumber } from 'ethers'
import { useRef, useState} from 'react'
import { getViewOnIcon, getViewOnUrl, IMarketplaceConfig } from './utils'
import "./viewOnButton.less"
import { INftScanConfig } from './nftScanApi'

interface IProps {
    nftScanConfig: INftScanConfig
    showLabel: boolean
    marketplace: IMarketplaceConfig
    chainId: number,
    assetItem: { tokenAddress: string, tokenId: BigNumber }
    className?: string
}

export const ViewOnButton = ({ showLabel, marketplace, assetItem, chainId, className, nftScanConfig }: IProps) => {

    const [ loading, setLoading ] = useState(false)

    const viewOnUrl = useRef('')
    const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        if(viewOnUrl.current) {
            window.open(viewOnUrl.current);
            return
        }
        try {
            setLoading(true)
            const url = await getViewOnUrl({
                assetItem: assetItem,
                chainId: chainId,
                marketplace: marketplace
            }, nftScanConfig)
            
            if(url) {
                viewOnUrl.current = url
                window.open(viewOnUrl.current);
            }
        }
        finally {
            setLoading(false)
        }

    }

    let cssClass = `view-on-button ${className}`
    const label = <>{showLabel && <span className='view-on-label'>View on <span className='capitalize'>{marketplace.name}</span></span>}</>

    if(loading) {
        cssClass = `${cssClass} loading`
        return <span className={cssClass}><Spin size="small"></Spin>{label}</span>
    }

    return <button disabled={loading} className={cssClass} onClick={e => onClick(e)}>
        {getViewOnIcon(marketplace.name)}
        {label}
     </button>
}