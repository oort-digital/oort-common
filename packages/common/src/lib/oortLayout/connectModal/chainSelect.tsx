import './chainSelect.less';
import { Select } from "antd";
import React from "react";
import BscSvg from './bscSvg';
import EthSvg from './ethSvg';
import MaticSvg from './maticSvg';
import SolanaSvg from './solanaSvg';
import { IChain, ChainEnum } from '../../typesAndInterfaces';

const { Option } = Select

interface IProps {
	chains: IChain[]
	selected: IChain
	disabled: boolean
	onChange: (selectedId: number) => void
}

// todo: use utils/getChainIcon
const getChainIcon = (chainId: ChainEnum) => {
	switch(chainId)
	{
		case ChainEnum.EthereumMainnet:
		case ChainEnum.EthereumGoerli:
		case ChainEnum.EthereumKovan:
		case ChainEnum.EthereumRinkeby:
		case ChainEnum.EthereumRopsten:
			return <EthSvg size={iconSize}/>
		case ChainEnum.MaticMumbai:
		case ChainEnum.MaticMainnet:
			return <MaticSvg size={iconSize}/>
		case ChainEnum.BSCMainnet:
		case ChainEnum.BSCTestnet:
			return <BscSvg size={iconSize}/>
		case ChainEnum.SolanaTestnet:
			return <SolanaSvg size={iconSize}/>
	}
	
	throw new Error(`Unknown chainId ${chainId}`)
}

const iconSize = 16

export const ChainSelect = (props: IProps) => {

	const { chains, selected, onChange, disabled } = props;

	return (
		<Select
			dropdownClassName='chain-select-drop-down'
			className='chain-select' value={selected.chainId} disabled={disabled} onChange={onChange} style={{ width: '100%' }}>
			{chains.map(x => <Option className={x.chainId.toString()} key={x.chainId} value={x.chainId}>
				<span className='chain-icon'>{getChainIcon(x.chainId)}</span>
				{x.name}
			
			</Option>)}
		</Select>
	)
}