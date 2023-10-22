"use client";
import classNames from "classnames";
import Link from "next/link";
import React from "react";
import {
  communities,
  getEcosystemSubmenu,
  getProductsSubMenu,
  resources,
  SubMenu,
} from "../subMenu";
import styles from "./headerMobile.module.scss";
import { LogoMobileLink } from "./logoMobile";
import { SideMenu } from "./sideMenu";
import { Button } from "../../button";
import { GAMEHUB_URL } from "../../constants";
import { IHeaderProps } from "../desktop";

const Footer = () => {
  return (
    <>
      {communities.map((x) => (
        <Link key={x.title} href={x.href} className={styles.social}>
          {x.icon}
        </Link>
      ))}
    </>
  );
};

const HeaderMobile = ({ pathname, baseUrl: basePath }: IHeaderProps) => {
  const renderLink = (text: string, subMenu: SubMenu[]) => (
    <>
      <div>{text}</div>
      {subMenu.map((item) => (
        <Link
          className={classNames({
            [styles.active]: pathname === item.href,
          })}
          key={item.title}
          href={item.href}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </>
  );

  return (
    <div className={styles.header}>
      <LogoMobileLink />
      <SideMenu footer={<Footer />}>
        <nav className={styles.navigation}>
          {renderLink("Products", getProductsSubMenu(basePath))}
          {renderLink("Ecosystem", getEcosystemSubmenu(basePath))}
          {renderLink("Resources", resources)}
          <Link href={GAMEHUB_URL} className={styles.btn_link}>
            <Button>PLAY</Button>
          </Link>
        </nav>
      </SideMenu>
    </div>
  );
};

export default HeaderMobile;
