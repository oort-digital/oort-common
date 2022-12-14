import { Col, Row } from "antd"
import { BigNumber, BigNumberish } from "ethers"
import { formatUnits, parsePrice } from "../utils"
import { IMarketplaceConfig, INftScanConfig } from "../viewOn"
import { AssetCardLayout } from "./assetCardLayout"
import { IAssetItem } from "./typesAndInterfaces"
import styles from "./borrowAssetCard.module.less"

interface ICurrency {
    uiName: string
    decimals: number
}

export type PriceMode = 'perHour' | 'perDay'

export interface IBorrowAssetItem extends IAssetItem {
    earningGoal: BigNumber
    durationHours: number
    currency: ICurrency
    collateral: BigNumber
}

export interface IBorrowAssetCardProps<TAssetItem extends IBorrowAssetItem> {
	nftScanConfig: INftScanConfig
    assetItem: TAssetItem
    owner: string
    chainId: number
    marketplace: IMarketplaceConfig
    onClick?: (asset: TAssetItem) => void
    href?: string
	reactRouterLink?: string
	priceMode: PriceMode
}

const countPricePerHour = (earningGoal: number, durationHours: number): number =>
    durationHours <= 0 ? 0 : earningGoal / durationHours;

const countPricePerDay = (earningGoal: number, durationHours: number) => 24 * countPricePerHour(earningGoal, durationHours)

//Convert bigNumber to number
const convertToNumber = (value: BigNumberish, decimals: number): number => Number.parseFloat(formatUnits(value, decimals));

const setting = (name: string, value: string) => <Col>
	<div className={styles.name}>{name}</div>
	<div className={value === 'ZERO' ? styles.zero_value : styles.value}>{value}</div>
</Col>

export const BorrowAssetCard = <TAsset extends IBorrowAssetItem, >({priceMode, nftScanConfig, assetItem, owner, marketplace, chainId, onClick, href, reactRouterLink }: IBorrowAssetCardProps<TAsset>) => {

    const { durationHours, earningGoal, currency, collateral } = assetItem
	const { uiName, decimals } = currency

    const collateralNum = convertToNumber(collateral, decimals);

	let price: number = 0
	let priceUnits: 'hour' | 'day' = 'day'

	if(priceMode === "perHour") {
		price = countPricePerHour(convertToNumber(earningGoal, decimals), durationHours)
		priceUnits = "hour"
	}
	else {
		price = countPricePerDay(convertToNumber(earningGoal, decimals), durationHours)
		priceUnits = "day"
	}

	const formattedPrice = `${parsePrice(price)} ${uiName}`;
	const formattedCollateral = collateralNum === 0 ? "ZERO" : `${parsePrice(collateralNum)} ${uiName}`;

    return <AssetCardLayout
			nftScanConfig={nftScanConfig}
			assetItem={assetItem}
			// isShowCollateral={true}
			collateral={collateral}
			chainId={chainId}
			marketplace={marketplace}
			owner={owner}
			onClick={onClick}
			reactRouterLink={reactRouterLink}
			href={href}>
				<Row justify='start' gutter={[25, 0]} className={styles.settings}>
					{/* <Tooltip title={getTheFullHourToDay(durationHours)}>
					{setting('Max duration', convertHoursToDay(durationHours))}
					</Tooltip> */}
					{setting(`Price/${priceUnits}`, formattedPrice)}
					{setting('Collateral', formattedCollateral)}
				</Row>
		</AssetCardLayout>
}