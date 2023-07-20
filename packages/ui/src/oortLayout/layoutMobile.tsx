import classNames from "classnames";
import { AsideMobile } from "./aside";
import styles from "./layoutMobile.module.less";
import { LogoLink } from "./logoLink/logoLink";
import { Sider } from "./sider";
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutMobile = ({
  navItems,
  children,
  web3,
  oortTokenAddress,
  isActiveFunc,
  className,
  supportedWallets,
  useTopGradient,
}: ILayoutProps) => {
  const _useTopGradient = useTopGradient === undefined ? true : useTopGradient;

  return (
    <div className={classNames(className, styles.root)}>
      <div className={classNames("oort-mobile-top-header", styles.top_header)}>
        <Sider>
          <AsideMobile
            oortTokenAddress={oortTokenAddress}
            supportedWallets={supportedWallets}
            navItems={navItems}
            isActiveFunc={isActiveFunc}
            web3={web3}
          />
        </Sider>
        <LogoLink className={styles.logo} />
      </div>

      <div
        className={classNames("oort-mobile-content", styles.content, {
          [`${styles.top_gradient}`]: _useTopGradient,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default LayoutMobile;
