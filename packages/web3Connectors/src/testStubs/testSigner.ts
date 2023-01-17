import { Provider, TransactionRequest } from "@ethersproject/abstract-provider";
import { Bytes, Signer } from "ethers";
import { Deferrable } from "ethers/lib/utils";

export class TestSigner extends Signer {
    connect(_provider: Provider): Signer {
        throw new Error("Method not implemented.");
    }

    getAddress(): Promise<string> {
        throw new Error("Method not implemented.");
    }
    signMessage(_message: string | Bytes): Promise<string> {
        throw new Error("Method not implemented.");
    }
    signTransaction(_transaction: Deferrable<TransactionRequest>): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    getChainId(): Promise<number> {
       return Promise.resolve(this._chainId)
    }

    constructor(chainId: number) {
        super()
        this._chainId = chainId
    }

    private readonly _chainId: number

}