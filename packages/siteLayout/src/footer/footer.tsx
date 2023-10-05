import { ReactNode } from "react";
import styles from "./footer.module.scss";

interface IProps {
  children: ReactNode;
}

export function Footer({ children }: IProps) {
  return <div className={styles.footer}>{children}</div>;
}
