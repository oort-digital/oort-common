"use client";
import { ReactNode, useEffect, useState } from "react";
import Drawer from "antd/lib/drawer";
import { CloseCircleIcon } from "./closeCircleIcon";
import styles from "./sideMenu.module.scss";
import { BurgerMenuIcon } from "./burgerMenuIcon";

interface IProps {
  children: ReactNode;
  footer: ReactNode;
}

export const SideMenu = ({ children, footer }: IProps) => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const closeMenu = () => setMenuVisible(false);

  const RenderDrawer = () => (
    <Drawer
      className={styles.menu}
      footer={footer}
      closeIcon={<CloseCircleIcon />}
      placement="left"
      onClose={closeMenu}
      open={isMenuVisible}
    >
      {children}
    </Drawer>
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
