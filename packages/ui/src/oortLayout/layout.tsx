import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { FooterMenu } from "./footerMenu";
import styles from './layout.module.less';
import { LogoLink } from "./logoLink";
import { INavItems, NavMenu } from "./navMenu";

interface IProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export const Layout = ({ navItems, children, web3, isActiveFunc }: IProps) => {

    return <div className={styles.root}>
        <aside className={styles.sider}>
            <div>
                <LogoLink className={styles.logo} />
                <NavMenu isActiveFunc={isActiveFunc} navItems={navItems}/>
                <FooterMenu className={styles.footer} web3={web3} />
            </div>
        </aside>
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}