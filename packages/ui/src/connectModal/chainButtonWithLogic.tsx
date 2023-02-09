import { IChain } from "@oort-digital/web3-connectors";
import { ChainButton } from "./chainButton";

interface IProps {
    loading: boolean
	connectedChainId: number
	expectedChainId?: number
    chain: IChain
    canSwitchChain: boolean
    onClick: () => void
}

export const ChainButtonWithLogic = ({ chain, loading, connectedChainId, expectedChainId, canSwitchChain, onClick }: IProps) => {
    const { chainId } = chain
	const isActive = chainId === connectedChainId

	let disabled: boolean | undefined = undefined

	if(!isActive && expectedChainId) {
		disabled = chainId !== expectedChainId
	}

	return <ChainButton
		onClick={onClick}
		loading={loading}
		disabled={disabled}
		isActive={isActive}
		canSwitchChain={canSwitchChain}
		chain={chain} />
}