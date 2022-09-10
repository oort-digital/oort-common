import { ReactNode } from "react";
import { IChain } from "../typesAndInterfaces";
import { ConnectorNames, IConnector } from "@oort/web3-connectors";
import { FooterMenu, IWeb3 } from "./footerMenu";
import styles from './layout.module.css';
import { LogoLink } from "./logoLink";
import { INavItems, NavMenu } from "./navMenu";

interface IProps {
    children: ReactNode
    isDarkMode: boolean
    onThemeChange: (isDarkMode: boolean) => void
    navItems: INavItems
    web3?: IWeb3
}

export const Layout = ({ navItems, children, web3, isDarkMode, onThemeChange }: IProps) => {

    return <div className={styles.root}>

        <div className={styles.sider}>
            <LogoLink className={styles.logo} v="3.0" />
            <NavMenu navItems={navItems}/>
            <FooterMenu
                isDarkMode={isDarkMode}
                onThemeChange={onThemeChange}
                className={styles.footer}
                web3={web3}
                />
        </div>
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}