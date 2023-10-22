import { LinkButton } from "../../button";
import React from "react";
import styles from "./header.module.scss";
import { LogoLink } from "./logoLink";
import {
  communities,
  getEcosystemSubmenu,
  getProductsSubMenu,
  resources,
} from "../subMenu";
import { CommunityMenu, EcosystemMenu, ProductMenu } from "./menu";
import { GAMEHUB_URL } from "../../constants";

export interface IHeaderProps {
  pathname: string;
  baseUrl?: string;
}

const Header = ({ pathname, baseUrl }: IHeaderProps) => {
  return (
    <div className={styles.header}>
      <LogoLink className={styles.logo} />
      <nav>
        <ProductMenu
          pathname={pathname}
          title="Products"
          subMenu={getProductsSubMenu(baseUrl)}
        />
        <EcosystemMenu
          pathname={pathname}
          title="Ecosystem"
          subMenu={getEcosystemSubmenu(baseUrl)}
          width={450}
          left={-190}
        />
        <CommunityMenu
          pathname={pathname}
          title="Community"
          subMenu={communities}
          width={252}
          left={-90}
        />
        <CommunityMenu
          pathname={pathname}
          title="Resources"
          subMenu={resources}
          width={290}
          left={-115}
        />
        <LinkButton href={GAMEHUB_URL} className={styles.btn_link}>
          PLAY
        </LinkButton>
      </nav>
    </div>
  );
};

export default Header;
