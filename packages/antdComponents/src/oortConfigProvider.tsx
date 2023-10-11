import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";
import { primary6 } from "./styles/palette";

const OortAntdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: primary6,
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
