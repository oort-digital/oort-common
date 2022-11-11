import { Button } from "antd"
import {IChain} from "../typesAndInterfaces"
import styles from "./chainButton.module.less"
import { getChainIcon } from '../utils';


interface IProps {
    loading: boolean
	disabled?: boolean
    chain: IChain
    isActive: boolean
    canSwitchChain: boolean
    onClick: () => void
}

export const ChainButton = ({ chain, loading, disabled, isActive, canSwitchChain, onClick }: IProps) => {
    const { name, chainId } = chain

    let cssClass = isActive ? styles.active : styles.btn
    const canSwitch = canSwitchChain && !isActive
	
		let onClick_: () => void
		if(canSwitch) {
			onClick_ = () => onClick()
		}
		else {
			cssClass = `${cssClass} ${styles.can_not_switch}`
			onClick_ = () => {}
		}

    return <Button block className={cssClass} disabled={loading || disabled} icon={getChainIcon(chainId, 23, 23)} onClick={onClick_}>
				{name}
			</Button>
}