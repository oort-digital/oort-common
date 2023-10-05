import {
  BlogMenuIcon,
  BrandedMenuIcon,
  DiscordMenuIcon,
  EcosystemMenuIcon,
  GameMenuIcon,
  PlayMenuIcon,
  RentalMenuIcon,
  TelegramMenuIcon,
  TutorialsMenuIcon,
  TwitterMenuIcon,
  WhitepaperMenuIcon,
} from "./icons";
import React, { ReactElement } from "react";
import {
  ANNOUNCEMENT_URL,
  BLOG_URL,
  DISCORD_URL,
  ECOSYSTEM_URL,
  TELEGRAM_URL,
  TUTORIALS_URL,
  TWITTER_URL,
  WHITEPAPER_URL,
} from "../constants";

export interface SubMenu {
  icon: ReactElement;
  title: string;
  href: string;
  description: string;
}

export const products: SubMenu[] = [
  {
    icon: <RentalMenuIcon />,
    href: "/nft-rental",
    title: "NFT Rental",
    description:
      "Lend your NFTs to earn extra income, or borrow NFTs to start playing with lower cost.",
  },
  {
    icon: <PlayMenuIcon />,
    href: "/nft-play",
    title: "NFT Play",
    description:
      "NFT Play is a one-stop place where you can activate your NFTs to earn rewards, play games and enjoy token-gated experiences.",
  },
  {
    icon: <GameMenuIcon />,
    href: "/battle",
    title: "PvS Battle",
    description:
      "With your custom branded hero NFTs, you can participate in our battle with a unique mode called Player vs. Staker (PvS).",
  },
  {
    icon: <BrandedMenuIcon />,
    href: "/heroes",
    title: "Custom Branded Heroes",
    description:
      "Oort Digital is the perfect solution to create custom branded NFTs and utilities that will bring fun, rewards, and social experiences to your online community.",
  },
];

export const communities: SubMenu[] = [
  {
    icon: <DiscordMenuIcon />,
    href: DISCORD_URL,
    title: "Discord",
    description: "Get involved",
  },
  {
    icon: <TelegramMenuIcon />,
    href: TELEGRAM_URL,
    title: "Telegram",
    description: "Join discussion",
  },
  {
    icon: <TwitterMenuIcon />,
    href: TWITTER_URL,
    title: "Twitter",
    description: "Read the latest",
  },
];

export const resources: SubMenu[] = [
  {
    icon: <WhitepaperMenuIcon />,
    href: WHITEPAPER_URL,
    title: "Whitepaper",
    description: "Learn about us",
  },
  {
    icon: <BlogMenuIcon />,
    href: BLOG_URL,
    title: "Blog",
    description: "Be informed",
  },
  {
    icon: <TutorialsMenuIcon />,
    href: TUTORIALS_URL,
    title: "Tutorials",
    description: "Learn how to get started",
  },
  {
    icon: <TelegramMenuIcon />,
    href: ANNOUNCEMENT_URL,
    title: "Announcement",
    description: "Keep Updated",
  },
];

export const ecosystem: SubMenu[] = [
  {
    icon: <EcosystemMenuIcon />,
    href: ECOSYSTEM_URL,
    title: "Ecosystem",
    description: "See all brands onboarded as clans.",
  },
];
