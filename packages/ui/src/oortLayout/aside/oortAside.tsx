import { IWeb3 } from "../../connectModal";
import { FooterMenu } from "../footerMenu";
import styles from './oortAside.module.less';
import { LogoLink } from "../logoLink";
import { INavItems, NavMenu } from "../navMenu";

interface IProps {
    navItems: INavItems
    web3?: IWeb3
    //for testing
    isActiveFunc?: (href: string) => boolean
}

export const OortAside = ({ navItems, web3, isActiveFunc }: IProps) => <aside className={styles.oort_aside}>
    <LogoLink className={styles.logo} />
    <NavMenu className={styles.nav_menu} isActiveFunc={isActiveFunc} navItems={navItems}/>
    <FooterMenu className={styles.footer} web3={web3} />
</aside>
