import { LinkButton } from "../../button";
import React from "react";
import styles from "./header.module.scss";
import { LogoLink } from "./logoLink";
import { communities, ecosystem, products, resources } from "../subMenu";
import { CommunityMenu, EcosystemMenu, ProductMenu } from "./menu";
import { GAMEHUB_URL } from "../../constants";
import { ILogger } from "@oort-digital/logger";

interface IProps {
  logger: ILogger;
}

const Header = ({ logger }: IProps) => {
  return (
    <div className={styles.header}>
      <LogoLink className={styles.logo} />
      <nav>
        <ProductMenu title="Products" subMenu={products} />
        <EcosystemMenu
          title="Ecosystem"
          subMenu={ecosystem}
          width={450}
          left={-190}
        />
        <CommunityMenu
          title="Community"
          subMenu={communities}
          width={252}
          left={-90}
        />
        <CommunityMenu
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
