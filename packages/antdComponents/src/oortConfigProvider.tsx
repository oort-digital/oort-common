import { ConfigProvider, ThemeConfig } from "antd";
import { ReactNode } from "react";
import { Palette } from "./styles";
const { dark13, dark2, dark3, dark4, dark5, dark9, primary6 } = Palette;

const OortAntdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: primary6,
    borderRadius: 2,
  },

  components: {
    Modal: {
      contentBg: dark3,
      headerBg: dark3,
      footerBg: dark2,
      titleColor: dark13,
      paddingContentHorizontalLG: 0,
      // paddingLG: 0,
      padding: 0,
      // borderRadius: 8,
      // borderRadiusOuter: 8,
    },

    Pagination: {
      colorText: dark9,
      // colorBorder: "red",
      // colorBorderSecondary: "red",
      colorBgContainer: dark4,
    },

    Button: {
      // Text color of primary button
      primaryColor: dark3,
      defaultColor: dark9,
      defaultBg: dark4,
      defaultBorderColor: dark5,

      colorBgContainerDisabled: dark3,
      colorTextDisabled: "rgba(242, 243, 245, 0.25);",
      borderColorDisabled: dark5,

      fontWeight: 500,
      fontSizeLG: 16,
      fontSize: 14,

      borderRadius: 4,
      borderRadiusLG: 4,

      controlHeightLG: 52,
      controlHeight: 40,
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
