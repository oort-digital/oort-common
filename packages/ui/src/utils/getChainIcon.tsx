import React from 'react'
import { ChainEnum } from '../typesAndInterfaces'
import { BscIconOld, EthIconOld, PolygonIconOld } from '../icons'


export const getChainIcon = (chainId: number, height: number, width: number): React.ReactNode => {
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