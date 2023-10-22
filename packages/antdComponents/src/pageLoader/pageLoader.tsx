import { Spin } from "antd";
import { CSSProperties, ReactNode } from "react";

export interface IPageLoaderProps {
  style?: CSSProperties;
  className?: string;
  visible: boolean;
  children?: ReactNode;
  delay?: number;
}

export const PageLoader = ({
  style,
  className,
  visible,
  children,
  delay,
}: IPageLoaderProps) => {
  if (visible) {
    return (
      <Spin delay={delay} size="large" className={className} style={style}>
        {children}
      </Spin>
    );
  }

  return <>{children}</>;
};
