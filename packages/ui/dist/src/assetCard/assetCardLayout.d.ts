import { IAssetItem } from './typesAndInterfaces';
import { IMarketplaceConfig, INftScanConfig } from '../viewOn';
import { BigNumber } from 'ethers';
import { ReactNode } from 'react';
interface IProps<TAssetItem extends IAssetItem> {
    nftScanConfig: INftScanConfig;
    assetItem: TAssetItem;
    collateral: BigNumber | undefined;
    owner: string;
    chainId: number;
    marketplace: IMarketplaceConfig;
    children: ReactNode;
    onClick?: (asset: TAssetItem) => void;
    href?: string;
    reactRouterLink?: string;
    coverSkeleton?: boolean;
}
export declare const AssetCardLayout: <TAsset extends IAssetItem>({ assetItem, owner, marketplace, chainId, children, onClick, href, reactRouterLink, collateral, coverSkeleton, nftScanConfig }: IProps<TAsset>) => JSX.Element;
export {};
//# sourceMappingURL=assetCardLayout.d.ts.map