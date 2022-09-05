import React from 'react';
import { Button } from "antd"
import {IChain} from "../../typesAndInterfaces"
import "./chainButton.less"
import { getChainIcon } from '../../utils';


interface IProps {
    loading: boolean
    chain: IChain
    isActive: boolean
    canSwitchChain: boolean
    onClick: () => void
}

export const ChainButton = ({ chain, loading, isActive, canSwitchChain, onClick }: IProps) => {
    const { name, chainId } = chain

    let cssClass = isActive ? 'chain-btn-active' : 'chain-btn'
    const canSwitch = canSwitchChain && !isActive
	
		let onClick_: () => void
		if(canSwitch) {
			onClick_ = () => onClick()
		}
		else {
			cssClass = `${cssClass} can-not-switch`
			onClick_ = () => {}
		}

    return <Button block className={cssClass} disabled={loading} icon={getChainIcon(chainId, 23, 23)} onClick={onClick_}>
				{name}
			</Button>
}