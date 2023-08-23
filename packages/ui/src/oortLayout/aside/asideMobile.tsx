import { Aside } from "./aside";
import styles from "./asideMobile.module.less";
import { IAsideProps } from "./typesAndInterfaces";

export const AsideMobile = ({
  navItems,
  web3,
  _stubs,
  oortTokenAddress,
  supportedWallets,
  baseName,
}: IAsideProps) => (
  <Aside
    oortTokenAddress={oortTokenAddress}
    supportedWallets={supportedWallets}
    className={styles.aside_mobile}
    navItems={navItems}
    web3={web3}
    _stubs={_stubs}
    baseName={baseName}
  />
);
