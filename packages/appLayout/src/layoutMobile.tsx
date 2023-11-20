import classNames from "classnames";
import { AsideMobile } from "./aside";
import "./styles.scss";
import styles from "./layoutMobile.module.scss";
import { LogoLink } from "./logoLink/logoLink";
import { Sider } from "./sider";
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutMobile = ({
  navItems,
  children,
  web3,
  oortTokenAddress,
  _stubs,
  className,
  supportedWallets,
  useTopGradient,
  baseName,
  id,
}: ILayoutProps) => {
  const _useTopGradient = useTopGradient === undefined ? true : useTopGradient;

  return (
    <div id={id} className={classNames(className, styles.root)}>
      <div className={classNames("oort-mobile-top-header", styles.top_header)}>
        <Sider>
          <AsideMobile
            baseName={baseName}
            oortTokenAddress={oortTokenAddress}
            supportedWallets={supportedWallets}
            navItems={navItems}
            _stubs={_stubs}
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
