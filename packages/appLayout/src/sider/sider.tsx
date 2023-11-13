"use client";
import { ReactNode, useEffect, useState } from "react";
import { ConfigProvider, Drawer } from "antd";
import { CloseCircleIcon, Palette } from "@oort-digital/antd-components";
import styles from "./sider.module.scss";
import { BurgerMenuIcon } from "./burgerMenuIcon";

const { dark3, dark10 } = Palette;

interface IProps {
  children: ReactNode;
}

export const Sider = ({ children }: IProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => setMenuVisible(false);

  const RenderDrawer = () => (
    <ConfigProvider
      theme={{
        components: {
          Drawer: {
            colorBgElevated: dark3,
            colorText: dark10,
            colorIcon: dark10,
            colorIconHover: dark10,
          },
        },
      }}
    >
      <Drawer
        width={"95%"}
        title="Menu"
        className={styles.top_header_menu}
        classNames={{
          header: styles.header,
          body: styles.body,
        }}
        closeIcon={<CloseCircleIcon />}
        placement="left"
        onClose={closeMenu}
        open={isMenuVisible}
      >
        {children}
      </Drawer>
    </ConfigProvider>
  );

  useEffect(() => {
    var pushState = window.history.pushState;
    var replaceState = window.history.replaceState;

    window.history.pushState = function (
      data: any,
      unused: string,
      url?: string | URL | null | undefined
    ) {
      closeMenu();
      pushState.apply(window.history, [data, unused, url]);
    };

    window.history.replaceState = function (
      data: any,
      unused: string,
      url?: string | URL | null | undefined
    ) {
      closeMenu();
      replaceState.apply(window.history, [data, unused, url]);
      closeMenu();
    };

    window.addEventListener("beforeunload", function () {
      closeMenu();
    });
  }, []);

  return (
    <>
      {RenderDrawer()}
      <div className={styles.burger_icon} onClick={() => setMenuVisible(true)}>
        <BurgerMenuIcon />
      </div>
    </>
  );
};
