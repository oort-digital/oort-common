import { ReactElement, ReactNode } from "react";
import styles from "./containers.module.scss";
import classNames from "classnames";
import React from "react";

interface IProps {
  className?: string;
  children: ReactNode;
  setStylesToChild?: boolean;
}

export function Contaner10({
  className,
  children,
  setStylesToChild = false,
}: IProps) {
  if (setStylesToChild) {
    const child = children as ReactElement;
    const cssClass = classNames(
      child.props.className,
      styles.container_10,
      className
    );

    const props = {
      className: cssClass,
    };

    return React.cloneElement(child, props);
  }

  return (
    <div className={classNames(styles.container_10, className)}>{children}</div>
  );
}
