import { useState } from 'react';
import styles from './footerMenu.module.less';
import { Menu, MenuItem, MenuItemBtn } from './menu';
import { getChainIcon } from '../utils';
import { ChevronSortIcon, DiscordIcon, TelegramIcon, TwitterIcon } from '../icons';
import { ThemeSwitch } from './themeSwitch';
import { IChain } from '../typesAndInterfaces';
import { ConnectModal } from '../connectModal';
import { ConnectorNames, IConnector } from '@oort/web3-connectors';
import { BlockieAddress } from '../blockieAddress';
import { useTheme } from '../effects';

const TWITTER = "https://twitter.com/OortDigital";
const DISCORD = "https://t.co/6eYdGdfUK7?amp=1";
const TELEGRAM = "https://t.me/oortdigital";

export interface IWeb3 {
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: { [name: string]: IConnector }
    switchChain: (newChainId: number) => Promise<void>
    connectAsync: (connectorName: ConnectorNames) => Promise<void>
    supportedChains: IChain[]
    chain: IChain
    account: string
}

interface IProps {
    className?: string
    web3?: IWeb3
}

const social = <>
    <a href={TELEGRAM}><TelegramIcon/></a>
    <a href={TWITTER}><TwitterIcon/></a>
    <a href={DISCORD}><DiscordIcon/></a>
</>



export const FooterMenu = ({ className, web3 }: IProps) => {

    const [ connectModalVisible, setConnectModalVisible ] = useState(false)

    const [ isDarkMode, setDarkMode ] = useTheme()

    const renderConnectModal = () => {
        const { supportedChains, chain, switchChain, canSwitchChain, connectAsync, account, connectorName, supportedConnectors } = web3!
        return <ConnectModal
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

    const renderWeb3 = () => {
        if(!web3) { return null }

        const { account, chain } = web3
        const { chainId, name } = chain
        const chainIcon = <span className={styles.icon_before}>{getChainIcon(chainId, 20, 20)}</span>
        const accountImg = <BlockieAddress address={account} className={styles.account_img}/>
        const afterIcon = <span className={styles.icon_after}><ChevronSortIcon /></span>
        return <>
            {renderConnectModal()}
            <MenuItemBtn key="chain" iconBefore={chainIcon} iconAfter={afterIcon} caption={name} />
            <MenuItemBtn key="account" onClick={() => setConnectModalVisible(true)} iconBefore={accountImg} iconAfter={afterIcon} caption={account.toMasskedAddress()} />
        </>
    }

    const cssClass = className ? `${className} ${styles.root}`: styles.root

    return <>
        <Menu className={cssClass}>
            <MenuItem key="social" className={styles.social}>{social}</MenuItem>
            {renderWeb3()}
            <MenuItem key="theme-switch">
                <ThemeSwitch isDarkMode={isDarkMode} onChange={() => setDarkMode(!isDarkMode)} />
                <span className={styles.theme_name}>{isDarkMode ? 'light' : 'dark'}</span>
            </MenuItem>
        </Menu>
    </>
}