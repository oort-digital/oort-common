import styles from './asideDesktop.module.less';
import { IAsideProps } from "./typesAndInterfaces";
import { Aside } from "./aside";
import { LogoLink } from '../logoLink';

export const AsideDesktop = ({ navItems, web3, isActiveFunc, supportedWallets }: IAsideProps) =>
    <Aside
        supportedWallets={supportedWallets}
        className={styles.aside_desktop}
        navItems={navItems}
        web3={web3}
        isActiveFunc={isActiveFunc}
        logoLink={<LogoLink className={styles.logo} />}
        />
