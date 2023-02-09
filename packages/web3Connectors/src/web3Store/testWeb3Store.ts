import { makeObservable, observable } from "mobx";
import { IChain } from "../publicTypesAndInterfaces";
import { IWeb3StoreParams, Web3Store } from "./web3Store"

export class TestWeb3Store extends Web3Store<IChain> {

    someProperty: number | undefined

    constructor(params: IWeb3StoreParams<IChain>) {
        super(params)

        makeObservable(this, {
            someProperty: observable
        })

    }
}