import { ReactNode } from "react";
import styles from "./footer.module.scss";
import classNames from "classnames";

interface IProps {
  className?: string;
  children: ReactNode;
}

export function Footer({ children, className }: IProps) {
  return <div className={classNames(className, styles.footer)}>{children}</div>;
}
