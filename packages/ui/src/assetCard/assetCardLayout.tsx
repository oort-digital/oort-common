import {Card, Col, Row} from 'antd'
import styles from './assetCardLayout.module.less'
import { IAssetItem } from './typesAndInterfaces'
import { getNftName, getNftTitle } from './utils';
import { cutLongString, getChainIconOld, toMasskedAddress } from '../utils';
import { TileCoverSimple, TileCoverSkeleton } from '../tileCover';
import { NftQuantity } from '../nftQuantity';
import { IMarketplaceConfig, INftScanConfig, ViewOnButton } from '../viewOn';
import { BigNumber } from 'ethers';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface IProps<TAssetItem extends IAssetItem> {
    nftScanConfig: INftScanConfig,
    assetItem: TAssetItem
    collateral: BigNumber | undefined
    owner: string
    chainId: number
    marketplace: IMarketplaceConfig
    children: ReactNode
    onClick?: (asset: TAssetItem) => void
    href?: string
    reactRouterLink?: string
    coverSkeleton?: boolean
}

const maxNftNameLen = 25
export const AssetCardLayout = <TAsset extends IAssetItem, >({assetItem, owner, marketplace, chainId, children, onClick, href, reactRouterLink, collateral, coverSkeleton, nftScanConfig}: IProps<TAsset>) => {

    const {tokenId, imgSrc, tokenAddress, projectName, nftAmount} = assetItem

    const nftTitle = getNftTitle(tokenAddress, projectName)
    let nftName = getNftName(tokenId, assetItem.nftName)
    nftName = cutLongString(nftName, maxNftNameLen)

    const clickHandler = (asset: TAsset) => {
        if (onClick) {
            onClick(asset)
        }
    }

    const showZeroCollateral = collateral?.isZero() === true

    const ownerR =
        <Row justify="space-between">
            <Col>
                <div className={styles.owner}>
                    <span className={styles.lable}>Owner:</span><span className={styles.address}>{toMasskedAddress(owner)}</span>
                    <ViewOnButton nftScanConfig={nftScanConfig} className={styles.view_on} assetItem={assetItem} chainId={chainId} marketplace={marketplace} showLabel={false}/>
                </div>
            </Col>
            {/*
            Roman told remove it
            <Col span={10}>
                {showZeroCollateral && <div className='collateral'>zero Collateral</div>}
            </Col>
            */}
        </Row>

    const assetData = <div className={styles.asset_data}>
        <Row justify="space-between" align="middle">
            <div className={styles.nft_title}>{cutLongString(nftTitle, 28)}</div>
            <div className={styles.nft_title}>
                {getChainIconOld(chainId, 17, 15)}
            </div>
        </Row>
        <div className={styles.nft_name}>{nftName}</div>

        {children}
    </div>

    const renderAssetData = () => {
        if(reactRouterLink) {
            return <Link to={reactRouterLink}>{assetData}</Link>
        }
        if (href) {
            return <a href={href}>{assetData}</a>
        }
        return assetData
    }

    const cover = coverSkeleton ?
        <TileCoverSkeleton/> :
        <TileCoverSimple className={styles.tile_cover} size='md' reactRouterLink={reactRouterLink} href={href} imgSrc={imgSrc || ''} noText={false}/>

    const cardClass = showZeroCollateral ? `${styles.layout} ${styles.zero_collateral_layout}` : styles.layout

    return <Card
        title={ownerR}
        extra={<NftQuantity quantity={nftAmount}/>}
        onClick={() => clickHandler(assetItem)}
        bordered={false}
        bodyStyle={{padding: 0}}
        className={cardClass}
        cover={cover}>
        <>{renderAssetData()}</>
    </Card>
}
