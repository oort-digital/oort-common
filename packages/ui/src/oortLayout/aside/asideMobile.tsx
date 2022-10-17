import { Aside } from './aside';
import styles from './asideMobile.module.less';
import { IAsideProps } from "./typesAndInterfaces";

export const AsideMobile = ({ navItems, web3, isActiveFunc }: IAsideProps) => <Aside className={styles.aside_mobile} navItems={navItems} web3={web3} isActiveFunc={isActiveFunc} />
