import styles from './asideDesktop.module.less';
import { IAsideProps } from "./typesAndInterfaces";
import { Aside } from "./aside";
import { LogoLink } from '../logoLink';

const Impl = ({ navItems, web3, isActiveFunc, testNfts }: IAsideProps) => 
    <Aside
        className={styles.aside_desktop}
        navItems={navItems}
        web3={web3}
        testNfts={testNfts}
        isActiveFunc={isActiveFunc}
        logoLink={<LogoLink className={styles.logo} />}
        />

export const AsideDesktop = Impl