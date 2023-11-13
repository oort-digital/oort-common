import classNames from "classnames";
import styles from "./button.module.scss";
import { Button as AntBtn, ButtonProps } from "antd";

export function Button(props: ButtonProps) {
  return (
    <AntBtn
      rootClassName={styles.btn}
      className={classNames(props.className)}
      {...props}
    />
  );
}
