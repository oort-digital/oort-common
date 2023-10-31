import styles from "./bold.module.scss";
import { ReactNode } from "react";

interface IProps {
  className?: string;
  children: ReactNode;
}

export const Bold = ({ className, children }: IProps) => {
  const cssClass = className ? `${className} ${styles.bold}` : styles.bold;
  return <span className={cssClass}>{children}</span>;
};
