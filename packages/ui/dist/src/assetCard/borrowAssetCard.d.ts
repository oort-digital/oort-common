/// <reference types="react" />
import { BigNumber } from "ethers";
import { IMarketplaceConfig, INftScanConfig } from "../viewOn";
import { IAssetItem } from "./typesAndInterfaces";
interface ICurrency {
    uiName: string;
    decimals: number;
}
export interface IBorrowAssetItem extends IAssetItem {
    earningGoal: BigNumber;
    durationHours: number;
    currency: ICurrency;
    collateral: BigNumber;
}
export interface IBorrowAssetCardProps<TAssetItem extends IBorrowAssetItem> {
    nftScanConfig: INftScanConfig;
    assetItem: TAssetItem;
    owner: string;
    chainId: number;
    marketplace: IMarketplaceConfig;
    onClick?: (asset: TAssetItem) => void;
    href?: string;
}
export declare const BorrowAssetCard: <TAsset extends IBorrowAssetItem>({ nftScanConfig, assetItem, owner, marketplace, chainId, onClick, href }: IBorrowAssetCardProps<TAsset>) => JSX.Element;
export {};
//# sourceMappingURL=borrowAssetCard.d.ts.map