import { ChainEnum } from '@oort-digital/web3-connectors'
import React from 'react'

import { BscIcon, BscIconOld, EthIcon, EthIconOld, PolygonIcon, PolygonIconOld } from '../icons'


export const getChainIconOld = (chainId: number, height: number, width: number): React.ReactNode => {
    switch(chainId)
    {
        case ChainEnum.EthereumMainnet:
        case ChainEnum.EthereumRopsten:
        case ChainEnum.EthereumRinkeby:
        case ChainEnum.EthereumGoerli:
        case ChainEnum.EthereumKovan:
            return <EthIconOld height={height} width={width} />
        case ChainEnum.MaticMainnet:
        case ChainEnum.MaticMumbai:
            return <PolygonIconOld height={height} width={width}/>
        case ChainEnum.BSCTestnet:
        case ChainEnum.BSCMainnet:
            return <BscIconOld height={height} width={width}/>
    }

    throw new Error(`Unknow chainId: ${chainId}`)
}

export const getChainIcon = (chainId: number): React.ReactElement => {
    switch(chainId)
    {
        case ChainEnum.EthereumMainnet:
        case ChainEnum.EthereumRopsten:
        case ChainEnum.EthereumRinkeby:
        case ChainEnum.EthereumGoerli:
        case ChainEnum.EthereumKovan:
            return <EthIcon />
        case ChainEnum.MaticMainnet:
        case ChainEnum.MaticMumbai:
            return <PolygonIcon />
        case ChainEnum.BSCTestnet:
        case ChainEnum.BSCMainnet:
            return <BscIcon />
    }

    throw new Error(`Unknow chainId: ${chainId}`)
}