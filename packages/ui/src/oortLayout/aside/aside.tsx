import { FooterMenu } from "../footerMenu";
import styles from './aside.module.less';
import {  NavMenu } from "../navMenu";
import { IAsideProps } from "./typesAndInterfaces";
import { ReactNode } from "react";

interface IProps extends IAsideProps {
    className: string
    logoLink?: ReactNode
}

export const Aside = ({ className, navItems, web3, isActiveFunc, logoLink, testNfts }: IProps) => <aside className={`${styles.aside} ${className}`}>
    {logoLink}
    <NavMenu className={styles.nav_menu} isActiveFunc={isActiveFunc} navItems={navItems} />
    <FooterMenu testNfts={testNfts} className={styles.footer} web3={web3} />
</aside>