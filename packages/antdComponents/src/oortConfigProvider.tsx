import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";
import { dark3, dark4, dark9, primary6 } from "./styles/palette";

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
      colorBgContainer: dark4,
    },

    Button: {
      // Text color of primary button
      primaryColor: dark3,
      fontWeight: 500,
      borderRadius: 4,
      borderRadiusLG: 4,
      controlHeightLG: 52,
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
