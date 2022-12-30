/// <reference types="react" />
import { BigNumber } from "ethers";
import { INftScanConfig } from "./nftScanApi";
export declare enum MarketplaceEnum {
    nftscan = "nftscan",
    opensea = "opensea"
}
export interface IMarketplaceConfig {
    name: MarketplaceEnum;
    assetItemUrlTemplate: string;
}
interface IGetViewOnUrlParams {
    marketplace: IMarketplaceConfig;
    chainId: number;
    assetItem: {
        tokenAddress: string;
        tokenId: BigNumber;
    };
}
export declare const getViewOnUrl: (params: IGetViewOnUrlParams, nftScanConfig: INftScanConfig) => Promise<string>;
export declare const getViewOnIcon: (marketplace: MarketplaceEnum) => JSX.Element;
export {};
//# sourceMappingURL=utils.d.ts.map