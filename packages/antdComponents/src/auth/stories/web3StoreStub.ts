import { action, makeObservable } from "mobx";
import logger from "./logger";
import {
  IChain,
  Web3Store,
  IFaceWalletCredentials,
  ConnectorNames,
  IChainInfo,
} from "@oort-digital/web3-connectors";
import { ChainServiceStub } from "./chainServiceStub";

const testnetApiKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDD7uJnqeI74gH6M-cSeEq82_Zrh-dp9KYH9asKMsjmdZpxjuHifc8lRhkKp5ZDTr9H__bpX8XFSBHt52r_iyP2-pMMh5E-T3uQJLFs0dBUSw2COr2ZgA_QWFHaIoSOtV_b9w5gEzxY623L0_Op9ItpZ51NN1WGEWgate5k-vMaDwIDAQAB";
const mainnetApiKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCX9F3aDaZiPAsbGNbnpHAyBJNBHi4DtLkHIo1ZSYKSlxVHkg2ejuN1rMmPFGe6cZsZS7eAcNB-AaVTLyDgmYYdYBYwdJEoTejAJ2nC1ntZwmOEDC6nR_oeedEH2lc4zQp05rV0p8DHDUYxiYC6nlG-RSEUOvJhzsoC2tetoEbjuQIDAQAB";

const faceWalletCredentials: IFaceWalletCredentials = {
  testnetApiKey,
  mainnetApiKey,
};

const supportedChains: IChainInfo[] = [
  {
    name: "mumbai",
    chainId: 80001,
    rpcUrl: "https://matic-mainnet.chainstacklabs.com",
  },
];

export class Web3StoreStub extends Web3Store<IChain> {
  constructor() {
    super({
      logger,
      chainService: new ChainServiceStub(),
      faceWalletCredentials,
      walletConnectProjectId: "c2b4ff7ce76613f93a7edea85b9618f5",
      supportedWallets: [ConnectorNames.Injected],
      supportedChains,
    });
    makeObservable(this, {
      signMessage: action.bound,
    });
  }

  async signMessage(message: string): Promise<string> {
    if (this.signer) {
      return await this.signer.signMessage(message);
    }

    throw new Error(`web3Store is not connected`);
  }
}
