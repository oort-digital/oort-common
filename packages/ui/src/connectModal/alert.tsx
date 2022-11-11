import { IChain } from "../typesAndInterfaces"
import styles from "./alert.module.less"
import { getChainName } from '../utils';
import { ReactNode } from "react";
import { Bold } from "./bold";

interface IProps {
	account: string
	chain: IChain
	supportedChains: IChain[]
	expectedChainId: number | undefined
}

interface IChainNameProps {
	children: ReactNode
}
const ChainName = ({children}: IChainNameProps) => <Bold className={styles.chain_name}>{children}</Bold>

export const Alert = ({ account, chain, supportedChains, expectedChainId }: IProps) => {

	if (!account) { return null }

	if(expectedChainId) {
		return <>
			You connected to <ChainName>{chain.name}.</ChainName>
			<div>
				Please connect to <ChainName>{getChainName(expectedChainId)}</ChainName> network.
			</div>
		</>
	}

	if (!supportedChains.some(x => x.name === chain.name)) {
		return <>
			You connected to <ChainName>{chain.name}.</ChainName>
			<div>
				Please connect to the appropriate network. <ChainName>{supportedChains.map(x => x.name).join(', ')}</ChainName>
			</div>
		</>
	}

	return <>You are currently using <Bold>Oort Digital</Bold> on the <ChainName>{chain.name}</ChainName> network</>
}


