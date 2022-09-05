import React, { useState } from 'react';
import styles from './footerMenu.module.css';
import { Menu, MenuItem, MenuItemBtn } from './menu';
import { getChainIcon } from '../utils';
import { ChevronSortIcon, DiscordIcon, TelegramIcon, TwitterIcon } from '../icons';
import * as blockies from 'blockies-ts'
import { ThemeSwitch } from './themeSwitch';
import { IChain } from '../typesAndInterfaces';
import { ConnectWalletModal } from './connectModal';
import { ConnectorNames, IConnector } from '../web3Connectors';

export const TWITTER = "https://twitter.com/OortDigital";
export const DISCORD = "https://t.co/6eYdGdfUK7?amp=1";
export const TELEGRAM = "https://t.me/oortdigital";

interface IProps {
    className?: string
    isDarkMode: boolean
    onThemeChange: (isDarkMode: boolean) => void
    chain: IChain
    supportedChains: IChain[]
    account: string
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: { [name: string]: IConnector }
    switchChain: (newChainId: number) => Promise<void>
    connectAsync: (connectorName: ConnectorNames) => Promise<void>
}

const social = <>
    <a href={TELEGRAM}><TelegramIcon/></a>
    <a href={TWITTER}><TwitterIcon/></a>
    <a href={DISCORD}><DiscordIcon/></a>
</>



export const FooterMenu = (props: IProps) => {

    const { className, chain, account, isDarkMode, onThemeChange } = props

    const [ connectModalVisible, setConnectModalVisible ] = useState(false)

    const showConnectModal = () => {
        const { supportedChains, chain, switchChain, canSwitchChain, connectAsync, account, connectorName, supportedConnectors } = props
        return <ConnectWalletModal
            onCancel={() => setConnectModalVisible(false)}
            visible={connectModalVisible}
            supportedChains={supportedChains}
            chain={chain}
            switchChain={switchChain}
            canSwitchChain={canSwitchChain}
            connectAsync={connectAsync}
            account={account}
            connectorName={connectorName}
            supportedConnectors={supportedConnectors}
        />
    }


    const cssClass = className ? `${className} ${styles.root}`: styles.root

    const { chainId, name } = chain

    const chainIcon = <span className={styles.icon_before}>{getChainIcon(chainId, 20, 20)}</span>
    const imgSrc = blockies.create({seed: account}).toDataURL()
    const accountImg = <img alt={account} className={styles.account_img} src={imgSrc}/>
    const afterIcon = <span className={styles.icon_after}><ChevronSortIcon /></span>
    

    return <>
        {showConnectModal()}
        <Menu className={cssClass}>
            <MenuItem key="social" className={styles.social}>{social}</MenuItem>
            <MenuItemBtn key="chain" iconBefore={chainIcon} iconAfter={afterIcon} caption={name} />
            <MenuItemBtn key="account" onClick={() => setConnectModalVisible(true)} iconBefore={accountImg} iconAfter={afterIcon} caption={account.toMasskedAddress()} />
            <MenuItem key="theme-switch">
                <ThemeSwitch isDarkMode={isDarkMode} onChange={onThemeChange} />
                <span className={styles.theme_name}>{isDarkMode ? 'light' : 'dark'}</span>
            </MenuItem>
        </Menu>
    </>
}