import { FooterMenu } from "../footerMenu";
import styles from './aside.module.less';
import { LogoLink } from "../logoLink";
import {  NavMenu } from "../navMenu";
import { IAsideProps } from "./typesAndInterfaces";

interface IProps extends IAsideProps {
    className: string
    showLogo: boolean
}

export const Aside = ({ className, navItems, web3, isActiveFunc, showLogo }: IProps) => <aside className={`${styles.aside} ${className}`}>
    { showLogo && <LogoLink className={styles.logo} /> }
    <NavMenu className={styles.nav_menu} isActiveFunc={isActiveFunc} navItems={navItems}/>
    <FooterMenu className={styles.footer} web3={web3} />
</aside>
