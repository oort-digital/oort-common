import React from "react";
import styles from "./footerSection.module.scss";
import {
  DiscordBottomIcon,
  GitBookBottomIcon,
  MediumBottomIcon,
  TelegramBottomIcon,
  TwitterBottomIcon,
} from "./icons";
import {
  ANNOUNCEMENT_URL,
  BLOG_URL,
  DISCORD_URL,
  LINKEDIN_URL,
  TELEGRAM_URL,
  TUTORIALS_URL,
  TWITTER_URL,
  WHITEPAPER_URL,
} from "../../constants";
import Link from "next/link";
import classNames from "classnames";
import { Subscribe, SubscribeType } from "../../subscribe";
import { Contaner10 } from "../../containers";

const bottomSocialIcon = [
  {
    icon: <DiscordBottomIcon />,
    href: "https://discord.com/invite/Rc84dyN3hF",
  },
  { icon: <TelegramBottomIcon />, href: "https://t.me/oortdigital" },
  { icon: <MediumBottomIcon />, href: "https://oort.digital/blog" },
  { icon: <TwitterBottomIcon />, href: "https://twitter.com/OortDigital" },
  { icon: <GitBookBottomIcon />, href: "https://docs.oort.digital/" },
];

interface IProps {
  className?: string;
}

export const FooterSection = ({ className }: IProps) => {
  return (
    <>
      <Contaner10 className={classNames(className, styles.section)}>
        <nav>
          <span>Products</span>
          <Link href="/nft-rental">NFT Rental</Link>
          <Link href="/nft-play">NFT Play</Link>
          <Link href="/battle">RPG Battle Game</Link>
          <Link href="/heroes">Custom Branded Heroes</Link>
        </nav>
        <nav>
          <span>Contact</span>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/cookies-policy">Cookie Policy</Link>
          <Link href="/contact-us">Contact us</Link>
        </nav>
        <nav>
          <span>Community</span>
          <Link href={TWITTER_URL}>Twitter</Link>
          {/*<Link href={MEDIUM_URL}>Medium</Link>*/}
          <Link href={DISCORD_URL}>Discord</Link>
          <Link href={TELEGRAM_URL}>Telegram</Link>
          <Link href={LINKEDIN_URL}>LinkedIn</Link>
        </nav>
        <nav>
          <span>Resources</span>
          <Link href={WHITEPAPER_URL}>Whitepaper</Link>
          <Link href={BLOG_URL}>Blog</Link>
          <Link href={TUTORIALS_URL}>Tutorials</Link>
          <Link href={ANNOUNCEMENT_URL}>Announcement</Link>
        </nav>
      </Contaner10>
      <div className={styles.subscribe}>
        <Subscribe style={SubscribeType.FooterSubscribe} />
      </div>

      <div className={styles.social}>
        {bottomSocialIcon.map((x) => (
          <Link key={x.href} href={x.href}>
            {x.icon}
          </Link>
        ))}
      </div>
      <div className={styles.copyright}>
        Copyright © {new Date().getFullYear()} Oort Digital. All Rights
        Reserved.
      </div>
    </>
  );
};
