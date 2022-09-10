import { ReactNode } from "react";
import { FooterMenu, IWeb3 } from "./footerMenu";
import styles from './layout.module.less';
import { LogoLink } from "./logoLink";
import { INavItems, NavMenu } from "./navMenu";

interface IProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
}

export const Layout = ({ navItems, children, web3 }: IProps) => {

    return <div className={styles.root}>

        <div className={styles.sider}>
            <LogoLink className={styles.logo} v="3.0" />
            <NavMenu navItems={navItems}/>
            <FooterMenu
                className={styles.footer}
                web3={web3}
                />
        </div>
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}