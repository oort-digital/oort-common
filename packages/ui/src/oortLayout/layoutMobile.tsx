import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { FooterMenu } from "./footerMenu";
import styles from './layout.module.less';
import { LogoLink } from "./logoLink";
import { INavItems, NavMenu } from "./navMenu";
import { SideMenu } from "./sideMenu/sideMenu";

interface IProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export const LayoutMobile = ({ navItems, children, web3, isActiveFunc }: IProps) => {

    return <SideMenu>
        <div className={styles.root}>
            <aside>
                <LogoLink className={styles.logo} />
                <NavMenu className={styles.nav_menu} isActiveFunc={isActiveFunc} navItems={navItems}/>
                <FooterMenu className={styles.footer} web3={web3} />
            </aside>
            
            <div className={styles.content}>
                {children}
            </div>

        </div>
    </SideMenu>
}