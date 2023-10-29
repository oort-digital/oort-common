import styles from "./button.module.scss";
import classnames from "classnames";
import { Button as AntBtn, ButtonProps } from "antd";

export function Button(props: ButtonProps) {
  return (
    <AntBtn className={classnames(props.className, styles.btn)} {...props} />
  );
}
