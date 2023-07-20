import classNames from "classnames";
import { AsideDesktop } from "./aside";
import styles from "./layoutDesktop.module.less";
import { ILayoutProps } from "./typesAndInterfaces";

const LayoutDesktop = (props: ILayoutProps) => {
  const useTopGradient =
    props.useTopGradient === undefined ? true : props.useTopGradient;

  return (
    <div className={styles.root}>
      <AsideDesktop {...props} />
      <div
        className={classNames(styles.content, {
          [`${styles.top_gradient}`]: useTopGradient,
        })}
      >
        {props.children}
      </div>
    </div>
  );
};

export default LayoutDesktop;
