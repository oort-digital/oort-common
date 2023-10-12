import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";
import { dark4, dark9, primary6 } from "./styles/palette";

const OortAntdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: primary6,
    borderRadius: 2,
  },

  components: {
    Pagination: {
      colorText: dark9,

      colorBorder: "red",
      colorBorderSecondary: "red",

      // colorFillAlter: "red",
      colorBgContainer: dark4,
      // colorBgContainerDisabled: "red",
      // colorBgBase: "red",
      // colorBgBlur: "red",
      // colorBgElevated: "red",
      // colorBgLayout: "red",
      // itemBg: "red",
      // colorPrimaryBg: "red",
      // itemActiveBg: "red",
      // itemActiveBgDisabled: "red",
      // colorBgMask: "red",
      // itemInputBg: "red",
    },
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
