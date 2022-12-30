/// <reference types="react" />
import { BigNumber } from 'ethers';
import { IMarketplaceConfig } from './utils';
import { INftScanConfig } from './nftScanApi';
interface IProps {
    nftScanConfig: INftScanConfig;
    showLabel: boolean;
    marketplace: IMarketplaceConfig;
    chainId: number;
    assetItem: {
        tokenAddress: string;
        tokenId: BigNumber;
    };
    className?: string;
}
export declare const ViewOnButton: ({ showLabel, marketplace, assetItem, chainId, className, nftScanConfig }: IProps) => JSX.Element;
export {};
//# sourceMappingURL=viewOnButton.d.ts.map