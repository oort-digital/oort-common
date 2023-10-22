import { ReactNode } from "react";
import styles from "./footerMobile.module.scss";

interface IProps {
  children: ReactNode;
}

export function FooterMobile({ children }: IProps) {
  return <div className={styles.footer}>{children}</div>;
}
