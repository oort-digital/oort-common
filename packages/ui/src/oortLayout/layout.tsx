import React, { ReactNode } from "react";
import { IChain } from "../typesAndInterfaces";
import { ConnectorNames, IConnector } from "@oort/web3-connectors";
import { FooterMenu } from "./footerMenu";
import styles from './layout.module.css';
import { LogoLink } from "./logoLink";
import { IMenuItemHref, NavMenu } from "./navMenu";

interface IProps {
    chain: IChain | undefined
    account: string
    children: ReactNode
    isDarkMode: boolean
    onThemeChange: (isDarkMode: boolean) => void
    supportedChains: IChain[]
    menuHrefs: IMenuItemHref[]
    canSwitchChain: boolean
    connectorName: ConnectorNames
    supportedConnectors: { [name: string]: IConnector }
    switchChain: (newChainId: number) => Promise<void>
    connectAsync: (connectorName: ConnectorNames) => Promise<void>
}

export const Layout = (props: IProps) => {

    const { menuHrefs, children, chain, account, isDarkMode, onThemeChange, supportedChains, switchChain, canSwitchChain, connectAsync, connectorName, supportedConnectors } = props

    const renderFooter = () => {
        if(!chain || !account) { return null }
        return <FooterMenu
            isDarkMode={isDarkMode}
            onThemeChange={onThemeChange}
            className={styles.footer}
            account={account} 
            chain={chain}
            supportedChains={supportedChains}
            switchChain={switchChain}
            canSwitchChain={canSwitchChain}
            connectAsync={connectAsync}
            connectorName={connectorName}
            supportedConnectors={supportedConnectors}
            />
    } 

    return <div className={styles.root}>

        <div className={styles.sider}>
            <LogoLink className={styles.logo} v="3.0" />
            <NavMenu menuHrefs={menuHrefs}/>

            {renderFooter()}
        </div>
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}