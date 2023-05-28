import {BigNumber, BigNumberish, utils } from "ethers"

//Format the DAI for displaying to the user (1724221108374328791075 -> 1724.221108374328791075)
export const formatUnits = (value: BigNumberish, decimals: number): string => utils.formatUnits(value, decimals);

//Call it before pass dai amount from ui to contract method
export const parseUnits = (value: number, decimals: number, roundDecimals: boolean = false): BigNumber => {

    let str = ''
    if(roundDecimals) {
        str = value.toFixed(decimals)
    }
    else {
        str = value.toString()
    }

    return utils.parseUnits(str, decimals);
}