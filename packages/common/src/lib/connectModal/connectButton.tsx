import React, { ReactNode } from "react";
import "./connectButton.less"


interface IProps {
	account?: string
	disabled?: boolean
	walletIcon: ReactNode
	walletName: string
	labelText?: string
	onClick?: () => void;
}

export const ConnectButton = ({ account, onClick, walletIcon, walletName, disabled, labelText }:IProps) => {

	let acc = <span className="cnn">{labelText}</span>
	let className = 'connect-wallet-button'

	if(account) {
		acc = <span className="acc">{account.toMasskedAddress()}</span>
		className = `${className} active`
	}

	return <div onClick={account ? undefined : onClick} className={className} >
			{walletIcon}
			<span className="wallet-name">{walletName}</span>
			{acc}
		</div>
}