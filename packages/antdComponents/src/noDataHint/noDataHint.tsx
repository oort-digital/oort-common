import { ReactNode } from "react";
import { NoDataIcon } from "../icons";
import classNames from "classnames";
import styles from "./noDataHint.module.scss";

interface IProps {
  className?: string;
  text?: string;
  icon?: ReactNode;
}

export const NoDataHint = ({
  className,
  text = "No data",
  icon = <NoDataIcon />,
}: IProps) => (
  <div className={classNames(styles.empty_hint, className)}>
    {icon}
    {text}
  </div>
);
