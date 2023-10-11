import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";

const OortAntdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#2FB4AC", // @primary-6:
  },
};

interface IProps {
  children: ReactNode;
}

export function OortConfigProvider({ children }: IProps) {
  return (
    <ConfigProvider theme={OortAntdThemeConfig}>{children}</ConfigProvider>
  );
}
