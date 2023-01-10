import { ReactNode } from "react";
import { toMasskedAddress } from "../utils";
import styles from "./connectButton.module.less"
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


interface IProps {
	account?: string
	disabled?: boolean
	loading?: boolean
	walletIcon: ReactNode
	walletName: string
	labelText?: string
	onClick?: () => void;
}

const spinner = <Spin className={styles.spinner} indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />

export const ConnectButton = ({ account, onClick, walletIcon, walletName, labelText, disabled, loading }:IProps) => {

	let label: ReactNode
	let className = styles.button

	if(account) {
		label = <span className={styles.acc}>{toMasskedAddress(account)}</span>
		className = `${className} ${styles.active}`
	}
	else if(loading) {
		label = spinner
		className = `${className} ${styles.loading}`
	}
	else {
		label = <span className={styles.cnn}>{labelText}</span>
	}


	let _onClick = onClick 

	if(account || disabled || loading) {
		_onClick = undefined
	}

	return <div onClick={_onClick} className={className} >
			{walletIcon}
			<span className={styles.wallet_name}>{walletName}</span>
			{label}
		</div>
}