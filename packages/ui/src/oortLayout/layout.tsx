import { ReactNode } from "react";
import { IChain } from "../typesAndInterfaces";
import { ConnectorNames, IConnector } from "@oort/web3-connectors";
import { FooterMenu } from "./footerMenu";
import styles from './layout.module.css';
import { LogoLink } from "./logoLink";
import { INavItems, NavMenu } from "./navMenu";

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
    children: ReactNode
    isDarkMode: boolean
    onThemeChange: (isDarkMode: boolean) => void
    navItems: INavItems
    web3?: IWeb3
}

export const Layout = ({ navItems, children, web3, isDarkMode, onThemeChange }: IProps) => {

    const renderFooter = () => {
        if(!web3) { return null }
        const { chain, account, supportedChains, switchChain, canSwitchChain, connectAsync, connectorName, supportedConnectors } = web3
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
            <NavMenu navItems={navItems}/>

            {renderFooter()}
        </div>
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}