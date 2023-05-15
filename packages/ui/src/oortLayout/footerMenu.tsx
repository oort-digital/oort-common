import { useState } from 'react';
import styles from './footerMenu.module.less';
import { Menu, MenuItem, MenuItemBtn } from './menu';
import { getChainIconOld } from '../utils';
import { ChevronSortIcon, DiscordIcon, TelegramIcon, TwitterIcon } from '../icons';
import { ThemeSwitch } from './themeSwitch';
import { ConnectModal, IWeb3 } from '../connectModal';
import { BlockieAddress } from '../blockieAddress';
import { useTheme } from '../effects';
import { isChainEmpty } from '@oort-digital/web3-connectors';
import { observer } from 'mobx-react';
import { toMasskedAddress } from '@oort-digital/utils';
import { ConnectorNames } from '@oort-digital/web3-connectors';

const TWITTER = "https://twitter.com/OortDigital";
const DISCORD = "https://t.co/6eYdGdfUK7?amp=1";
const TELEGRAM = "https://t.me/oortdigital";


interface IProps {
    supportedWallets: ConnectorNames[]
    className?: string
    web3?: IWeb3
}

const social = <>
    <a href={TELEGRAM}><span className={styles.icon}><TelegramIcon/></span></a>
    <a href={TWITTER}><span className={styles.icon}><TwitterIcon/></span></a>
    <a href={DISCORD}><span className={styles.icon}><DiscordIcon/></span></a>
</>

const Impl = ({ className, web3, supportedWallets }: IProps) => {

    const [ connectModalVisible, setConnectModalVisible ] = useState(false)

    const [ isDarkMode, setDarkMode ] = useTheme()

    const renderConnectModal = () => {
        return <ConnectModal
            onCancel={() => setConnectModalVisible(false)}
            visible={connectModalVisible}
            web3={web3!}
            supportedWallets={supportedWallets}
        />
    }

    const renderWeb3 = () => {
        if(!web3) { return null }

        const { account, chain } = web3

        if(isChainEmpty(chain)) { return null }
        
        const { chainId, name } = chain
        const chainIcon = <span className={styles.icon_before}>{getChainIconOld(chainId, 20, 20)}</span>
        const accountImg = <BlockieAddress address={account} className={styles.account_img}/>
        const afterIcon = <span className={styles.icon_after}><ChevronSortIcon /></span>
        return <>
            {renderConnectModal()}
            <MenuItemBtn className={`${styles.menu_item_btn} ${styles.chain_name}`} key="chain" onClick={() => setConnectModalVisible(true)} iconBefore={chainIcon} iconAfter={afterIcon} caption={name} />
            <MenuItemBtn className={styles.menu_item_btn} key="account" onClick={() => setConnectModalVisible(true)} iconBefore={accountImg} iconAfter={afterIcon} caption={toMasskedAddress(account)} />
        </>
    }



    const cssClass = className ? `${className} ${styles.root}`: styles.root

    return <>
        <Menu className={cssClass}>
            <MenuItem key="social" className={styles.social}>{social}</MenuItem>
            {renderWeb3()}
            <MenuItem className={styles.theme_switch} key="theme-switch">
                <ThemeSwitch isDarkMode={isDarkMode} onChange={() => setDarkMode(!isDarkMode)} />
                <span className={styles.theme_name}>{isDarkMode ? 'light' : 'dark'}</span>
            </MenuItem>
        </Menu>
    </>
}

export const FooterMenu = observer(Impl)