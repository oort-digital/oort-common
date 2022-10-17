import { ReactNode } from "react";
import { IWeb3 } from "../connectModal";
import { AsideDesktop } from "./aside";
import styles from './layout.module.less';
import { INavItems } from "./navMenu";

interface IProps {
    children: ReactNode
    navItems: INavItems
    web3?: IWeb3
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export const Layout = ({ navItems, children, web3, isActiveFunc }: IProps) => {

    return <div className={styles.root}>
        <AsideDesktop navItems={navItems} isActiveFunc={isActiveFunc} web3={web3} />
        
        <div className={styles.content}>
            {children}
        </div>

    </div>
}