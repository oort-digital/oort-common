import styles from "./asideDesktop.module.scss";
import { IAsideProps } from "./typesAndInterfaces";
import { Aside } from "./aside";
import { LogoLink } from "../logoLink";

export const AsideDesktop = ({
  navItems,
  web3,
  _stubs,
  supportedWallets,
  oortTokenAddress,
  baseName,
}: IAsideProps) => (
  <Aside
    supportedWallets={supportedWallets}
    className={styles.aside_desktop}
    navItems={navItems}
    oortTokenAddress={oortTokenAddress}
    web3={web3}
    baseName={baseName}
    _stubs={_stubs}
    logoLink={<LogoLink className={styles.logo} />}
  />
);
