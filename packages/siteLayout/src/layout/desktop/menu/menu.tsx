import styles from "./menu.module.scss";
import { SubMenu } from "../../subMenu";
import Link from "next/link";
import classNames from "classnames";
import { SubMenuItem } from "./subMenuItem";
import { CSSProperties } from "react";

export interface IMenuProps {
  title: string;
  pathname: string;
  subMenu?: SubMenu[];
  href?: string;
  maxDescriptionLen?: number;
  subMenuClassName?: string;
  subMenuStyle?: CSSProperties;
  subMenuItemClassName?: string;
}

export const Menu = ({
  title,
  pathname,
  href,
  subMenuClassName,
  subMenuItemClassName,
  subMenu = [],
  maxDescriptionLen,
  subMenuStyle,
}: IMenuProps) => {
  const isActive = subMenu.some((x) => x.href === pathname);

  const onMouseEnter = (event: React.MouseEvent<HTMLUListElement>) => {
    log(`${title} onMenuMouseEnter`);
    setClasses(event, null, styles.hide);
  };

  const onMouseLeave = (event: React.MouseEvent<HTMLUListElement>) => {
    log(`${title} onMenuMouseLeave`);
    setClasses(event, styles.hide, null);
  };

  const renderSubMenu = (subMenu: SubMenu[], maxDescriptionLen?: number) => (
    <ul
      className={classNames(styles.submenu, styles.hide, subMenuClassName)}
      style={subMenuStyle}
    >
      <div className={styles.arrow}></div>
      {subMenu.map((menu) => (
        <SubMenuItem
          pathname={pathname}
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
  addClass: string | null,
  removeClass: string | null
) => {
  const subMenu = event.currentTarget.getElementsByTagName("ul")[0];
  if (subMenu) {
    if (addClass) {
      subMenu.classList.add(addClass);
    }

    if (removeClass) {
      subMenu.classList.remove(removeClass);
    }
  }
};

const log = (message: string) => {
  // console.log(message);
};
