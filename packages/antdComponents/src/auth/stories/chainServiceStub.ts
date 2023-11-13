import { IChain, IChainService } from "@oort-digital/web3-connectors";

const mumbai: IChain = {
    chainId: 80001,
    name: "mumbai"
}

export class ChainServiceStub implements IChainService<IChain> {
    chainName = (_chainId: number) => mumbai.name
    supportedChains: IChain[] = [mumbai]
    isSupported = (chainId: number) => chainId === mumbai.chainId;

    getChain = (chainId: number) => {
        if(chainId === mumbai.chainId) {
            return mumbai
        }
        return undefined
    }

}