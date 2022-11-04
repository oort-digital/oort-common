import { BigNumber } from "ethers";
import { toMasskedAddress } from "../utils";

export const getNftTitle = (tokenAddress: string, projectName?: string): string => {
	if(projectName) {
		return projectName
	}
	return toMasskedAddress(tokenAddress)
}

export const getNftName = (tokenId: BigNumber, nftName?: string): string => {
	if(nftName) {
		return `${nftName} #${shortenTokenId(tokenId)}`;
	}
	return `#${shortenTokenId(tokenId)}`
}

const shortenTokenId = (tokenId: BigNumber): string => {
	const tokenIdNum = tokenId.toString();
	if(tokenIdNum.length > 10){
		return tokenIdNum.substring(0,4) + "..." + tokenIdNum.substring(tokenIdNum.length - 4);
	}
	return tokenIdNum;
}