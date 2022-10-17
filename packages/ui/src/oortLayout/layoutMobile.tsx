import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { AsideMobile } from "./aside";
import styles from './layoutMobile.module.less';
import { LogoLink, LogoLinkDesktop } from "./logoLink/logoLink";
import { INavItems } from "./navMenu";
import { Sider } from "./sider";

interface IProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export const LayoutMobile = ({ navItems, children, web3, isActiveFunc }: IProps) => {

    return <div className={styles.root}>
        
        <div className={styles.top_header}>
            <Sider>
                <AsideMobile navItems={navItems} isActiveFunc={isActiveFunc} web3={web3} />
            </Sider>
            <LogoLink />
        </div>
       
        <div className={styles.content}>
            {children}
        </div>
            
    </div>
}