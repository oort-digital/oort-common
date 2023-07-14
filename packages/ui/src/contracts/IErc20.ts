import { BigNumber, BigNumberish, ContractTransaction } from "ethers";
import { PromiseOrValue } from "./generated/common";

export interface IErc20 {
  approve(
    _spender: PromiseOrValue<string>,
    _value: PromiseOrValue<BigNumberish>,
  ): Promise<ContractTransaction>;
  allowance(
    _owner: PromiseOrValue<string>,
    _spender: PromiseOrValue<string>,
  ): Promise<BigNumber>;
}
