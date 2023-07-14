import { FooterMenu } from "../footerMenu";
import styles from './aside.module.less';
import { NavMenu } from "../navMenu";
import { IAsideProps } from "./typesAndInterfaces";
import { ReactNode } from "react";
import { ConnectorNames } from "@oort-digital/web3-connectors";

interface IProps extends IAsideProps {
    supportedWallets: ConnectorNames[]
    oortTokenAddress: string
    className: string
    logoLink?: ReactNode
}

export const Aside = ({ supportedWallets, oortTokenAddress, className, navItems, web3, isActiveFunc, logoLink }: IProps) => <aside className={`${styles.aside} ${className}`}>
    {logoLink}
    <NavMenu className={styles.nav_menu} isActiveFunc={isActiveFunc} navItems={navItems} />
    <FooterMenu supportedWallets={supportedWallets} oortTokenAddress={oortTokenAddress} className={styles.footer} web3={web3} />
</aside>