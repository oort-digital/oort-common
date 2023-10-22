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
import { Container10 } from "../../containers";
import { getProductsSubMenu, getUrl } from "../../layout/subMenu";

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
  baseUrl?: string;
}

export const FooterSection = ({ className, baseUrl }: IProps) => {
  const products = getProductsSubMenu(baseUrl);
  return (
    <>
      <Container10 className={classNames(className, styles.section)}>
        <nav>
          <span>Products</span>
          {products.map(({ href, title }) => (
            <Link key={href} href={href}>
              {title}
            </Link>
          ))}
        </nav>
        <nav>
          <span>Contact</span>
          <Link href={getUrl("/privacy-policy", baseUrl)}>Privacy Policy</Link>
          <Link href={getUrl("/terms", baseUrl)}>Terms of Use</Link>
          <Link href={getUrl("/cookies-policy", baseUrl)}>Cookie Policy</Link>
          <Link href={getUrl("/contact-us", baseUrl)}>Contact us</Link>
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
      </Container10>
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
