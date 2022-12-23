import { INftOwnerProvider, IFeatchNftOwnerResponse, ProviderKind, IFeatchAccountNftsParams, IFeatchNftImageSrc, IFeatchNftParams, IFeatchNftsResponse, INft, IAssetsProvider, IAssetProvider } from "../typesAndInterfaces";
import { ILogger } from "@oort/logger";
declare type MoralisLogLevel = 'verbose' | 'debug' | 'info' | 'warning' | 'error' | 'off';
export declare class MoralisNftProvider implements IAssetsProvider, IAssetProvider, INftOwnerProvider {
    readonly providerKind: ProviderKind;
    private readonly _logger;
    private readonly _startPromise;
    constructor(logger: ILogger, chainId: number, config: {
        apiKey: string;
    }, logLevel?: MoralisLogLevel);
    readonly chainId: number;
    featchNftOwner(params: {
        address: string;
        tokenId: string;
    }): Promise<IFeatchNftOwnerResponse>;
    featchNft(params: IFeatchNftParams): Promise<INft>;
    featchNftImageSrc(params: IFeatchNftImageSrc): Promise<string | undefined>;
    featchAccountNfts(params: IFeatchAccountNftsParams): Promise<IFeatchNftsResponse>;
    private ParseImage;
    private ParseNftName;
    private ParseDescription;
    private static ParseContractType;
    private mapNft;
}
export {};
//# sourceMappingURL=moralisNftProvider.d.ts.map