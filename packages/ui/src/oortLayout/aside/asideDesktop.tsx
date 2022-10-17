import styles from './asideDesktop.module.less';
import { IAsideProps } from "./typesAndInterfaces";
import { Aside } from "./aside";

export const AsideDesktop = ({ navItems, web3, isActiveFunc }: IAsideProps) => <Aside className={styles.aside_desktop} navItems={navItems} web3={web3} isActiveFunc={isActiveFunc} showLogo={true} />
