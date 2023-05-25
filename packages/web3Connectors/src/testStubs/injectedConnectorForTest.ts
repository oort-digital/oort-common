import { ILogger } from "@oort-digital/logger"
import { Signer } from "ethers"
import { InjectedConnector } from "../connectors"
import { IChainInfo } from "../internalTypesAndInterfaces"
import { TestRawProvider } from "./testRawProvider"
import { TestSigner } from "./testSigner"
import { IRawProvider } from "../connectors/injectedConnector"

interface IOptions {
    rawProvider: TestRawProvider
    signer: TestSigner
    logger: ILogger
    chains: IChainInfo[]
}

export class InjectedConnectorForTest extends InjectedConnector {

    private readonly _rawProvider: TestRawProvider
    private readonly _signer: TestSigner
    constructor({rawProvider, signer, logger, chains }: IOptions) {
      super(logger, chains)
      this._rawProvider = rawProvider
      this._signer = signer
    }
  
    protected get rawProvider(): IRawProvider | null {
      return this._rawProvider
    }
  
    getSigner(): Promise<Signer> {
      return Promise.resolve<Signer>(this._signer)  
    }
}