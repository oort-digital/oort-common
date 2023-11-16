"use client";
import { Collapse } from "antd";
import {
  DashboardIcon,
  DevelopToolsIcon,
  GameHubIcon,
  LeaderboardIcon,
  MintIcon,
  RentAppIcon,
} from "@oort-digital/antd-components";
import { Menu, MenuItemLink } from "../menu";
import styles from "./navMenu.module.scss";
import { createIsHrefActiveFunc, getChildCaptions } from "./utils";
import {
  INavItemInternal,
  INavItems,
  IStubs,
  NavItemMap,
  NavItemType,
} from "./typesAndInterfaces";
import classNames from "classnames";
import { useEffect, useState } from "react";

const { Panel } = Collapse;

interface IProps {
  //for testing
  _stubs?: IStubs;
  className?: string;
  navItems: INavItems;
  baseName?: string;
}

const dashboardInternal = {
  caption: "dashboard",
  icon: <DashboardIcon />,
};

const leaderboardInternal = {
  caption: "leaderboard",
  icon: <LeaderboardIcon />,
};

const rentInternal = {
  caption: "NFT Rental",
  icon: <RentAppIcon />,
  lend: "Lend",
  borrow: "Borrow",
  heroes: "Our own NFTs",
  activity: "Activity",
};

const mintInternal = {
  caption: "minting",
  icon: <MintIcon />,
  mutation: "Hero Mutation (Upgrading)",
  claimRewards: "Claim Rewards",
};

const gameHubInternal = {
  caption: "NFT Play",
  icon: <GameHubIcon />,
  games: "Game Library",
  nfts: "NFT Library",
};

const developInternal = {
  caption: "Develop Tools",
  icon: <DevelopToolsIcon />,
  faucet: "Faucet",
  refreshMetadata: "Refresh Metadata",
};

const rpgBattleInternal = {
  caption: "RPG Battle",
  icon: <GameHubIcon />,
};

const RenderPanelHeader = ({ caption, icon }: INavItemInternal) => {
  const i = <span className={styles.icon}>{icon}</span>;
  return (
    <div className={styles.header}>
      {i}
      {caption}
    </div>
  );
};

const getHRef = (it: NavItemType) => (typeof it === "string" ? it : it.href);

type NavItemPairType = [INavItemInternal, NavItemMap];

export const NavMenu = ({ className, navItems, _stubs, baseName }: IProps) => {
  // to trigger rerendering on react-router pathchange
  // useLocation();

  const [isSsr, setIsSsr] = useState(true);

  const {
    dashboard,
    rent,
    gameHub,
    minting,
    developTools,
    rpgBattle,
    leaderboard,
  } = navItems;

  const collapseNavItemPairs: NavItemPairType[] = [
    [rentInternal, rent],
    [gameHubInternal, gameHub],
    [mintInternal, minting],
  ];

  if (developTools) {
    collapseNavItemPairs.push([developInternal, developTools]);
  }

  const isActive = createIsHrefActiveFunc(_stubs, isSsr);

  const hasActiveHref = (hrefs: string[]): boolean => hrefs.some(isActive);

  const getCollapseActiveKey = (): string | undefined => {
    const activePair = collapseNavItemPairs.find((pair) => {
      const hrefEntries = Object.entries(pair[1]);
      const hrefs = hrefEntries.map((kvp) => getHRef(kvp[1]));
      return hasActiveHref(hrefs);
    });

    if (activePair) {
      return activePair[0].caption;
    }

    return undefined;
  };

  const [activeCollapseKey, setActiveCollapseKey] = useState(
    getCollapseActiveKey()
  );
  function onCollapse(key: string | string[]) {
    setActiveCollapseKey(key as string);
  }

  useEffect(() => {
    const _isSsr = typeof window === "undefined";
    setIsSsr(_isSsr);
  }, []);

  useEffect(() => {
    if (!isSsr) {
      setActiveCollapseKey(getCollapseActiveKey());
    }
  }, [isSsr]);

  const renderItem = (it: NavItemType, { caption, icon }: INavItemInternal) => {
    let href;
    let reactRouterLink = false;
    let disabled = false;
    let hide = false;

    if (typeof it === "string") {
      href = it;
    } else {
      href = it.href;
      reactRouterLink = it.reactRouterLink;
      disabled = !!it.disabled;
      hide = !!it.hide;
    }

    if (hide) {
      return null;
    }

    const activeCss = isActive(href) ? styles.active : "";
    const i = <span className={styles.icon}>{icon}</span>;
    return (
      <MenuItemLink
        disabled={disabled}
        reactRouterLink={reactRouterLink || false}
        key={caption}
        className={activeCss}
        href={href}
        baseName={baseName ?? null}
        caption={caption}
        icon={i}
      />
    );
  };

  const renderCollapse = ([rootItem, navItemMap]: NavItemPairType) => {
    const key = rootItem.caption;

    const isPanelActive = key === activeCollapseKey;
    let panelClass = styles.collapse_panel;

    if (isPanelActive) {
      panelClass = `${styles.active_header} ${panelClass}`;
    }

    const childCaptionsMap = getChildCaptions(rootItem);
    const hrefEntries = Object.entries(navItemMap);

    return (
      <Panel
        key={key}
        className={panelClass}
        header={RenderPanelHeader(rootItem)}
      >
        <Menu>
          {hrefEntries.map((kvp) => {
            const [key, navItem] = kvp;
            return renderItem(navItem, { caption: childCaptionsMap[key] });
          })}
        </Menu>
      </Panel>
    );
  };

  return (
    <Menu className={classNames(styles.root, className)}>
      {renderItem(dashboard, dashboardInternal)}
      <Collapse
        accordion
        activeKey={activeCollapseKey}
        ghost
        onChange={onCollapse}
        expandIconPosition="end"
      >
        {collapseNavItemPairs.map(renderCollapse)}
      </Collapse>
      {renderItem(rpgBattle, rpgBattleInternal)}
      {renderItem(leaderboard, leaderboardInternal)}
    </Menu>
  );
};
