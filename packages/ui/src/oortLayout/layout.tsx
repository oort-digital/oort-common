import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { OortAside } from "./aside";
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
        <OortAside navItems={navItems} isActiveFunc={isActiveFunc} web3={web3} />
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}