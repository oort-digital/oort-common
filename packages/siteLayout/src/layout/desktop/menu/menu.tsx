"use client";
import styles from "./menu.module.scss";
import { SubMenu } from "../../subMenu";
import Link from "next/link";
import classNames from "classnames";
import { SubMenuItem } from "./subMenuItem";
import { usePathname } from "next/navigation";
import { CSSProperties } from "react";

export interface IMenuProps {
  title: string;
  subMenu?: SubMenu[];
  href?: string;
  maxDescriptionLen?: number;
  subMenuClassName?: string;
  subMenuStyle?: CSSProperties;
  subMenuItemClassName?: string;
}

export const Menu = ({
  title,
  href,
  subMenuClassName,
  subMenuItemClassName,
  subMenu = [],
  maxDescriptionLen,
  subMenuStyle,
}: IMenuProps) => {
  const pathname = usePathname();
  const isActive = subMenu.some((x) => x.href === pathname);

  const onAnimationEnd = (event: React.AnimationEvent<HTMLUListElement>) => {
    if (event.animationName.includes("fadeOut")) {
      log("onMenuAnimationEnd:fadeOut");
      setClasses(event, styles.hide, styles.fade_out);
    }
  };

  const onMouseEnter = (event: React.MouseEvent<HTMLUListElement>) => {
    log("onMenuMouseEnter");
    setClasses(event, styles.fade_in, [styles.fade_out, styles.hide]);
  };

  const onMouseLeave = (event: React.MouseEvent<HTMLUListElement>) => {
    log("onMenuMouseLeave");
    setClasses(event, styles.fade_out, styles.fade_in);
  };

  const onClick = (event: React.MouseEvent<HTMLUListElement>) => {
    setClasses(event, styles.fade_out, styles.fade_in);
  };

  const renderSubMenu = (subMenu: SubMenu[], maxDescriptionLen?: number) => (
    <ul
      className={classNames(styles.submenu, styles.hide, subMenuClassName)}
      style={subMenuStyle}
    >
      <div className={styles.arrow}></div>
      {subMenu.map((menu) => (
        <SubMenuItem
          key={menu.title}
          item={menu}
          className={subMenuItemClassName}
          maxDescriptionLen={maxDescriptionLen}
        />
      ))}
    </ul>
  );

  return (
    <ul
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      onAnimationEnd={onAnimationEnd}
      className={`${styles.menu} ${isActive && styles.active}`}
    >
      <li>
        {href ? <Link href={href}>{title}</Link> : title}
        {subMenu.length > 0 && renderSubMenu(subMenu, maxDescriptionLen)}
      </li>
    </ul>
  );
};

type EventType =
  | React.MouseEvent<HTMLUListElement>
  | React.AnimationEvent<HTMLUListElement>;
const setClasses = (
  event: EventType,
  addClass: string,
  removeClass: string | string[]
) => {
  const subMenu = event.currentTarget.getElementsByTagName("ul")[0];
  if (subMenu) {
    subMenu.classList.add(addClass);

    if (typeof removeClass === "string") {
      subMenu.classList.remove(removeClass);
    } else {
      removeClass.forEach((cl) => subMenu.classList.remove(cl));
    }
  }
};

const log = (message: string) => {
  // console.log(message)
};
