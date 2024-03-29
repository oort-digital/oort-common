import { ReactNode } from "react";
import styles from "./menu.module.scss";
import { Link } from "react-router-dom";
import { removeBaseName } from "./utils";

interface IMenuItemBtnProps {
  className?: string;
  onClick?: () => void;
  key?: string;
  caption: string;
  iconBefore: ReactNode;
  iconAfter: ReactNode;
}

export const MenuItemBtn = ({
  className,
  onClick,
  caption,
  iconBefore,
  iconAfter,
}: IMenuItemBtnProps) => (
  <li onClick={onClick} className={className}>
    {iconBefore}
    <span className={styles.btn_caption}>{caption}</span>
    <span className={styles.btn_icon_after}>{iconAfter}</span>
  </li>
);

interface IMenuItemLinkProps {
  disabled?: boolean;
  className?: string;
  href: string;
  baseName: string | null;
  key: string;
  caption: string;
  icon: ReactNode;
  reactRouterLink: boolean;
}

export const MenuItemLink = ({
  className,
  href,
  baseName,
  caption,
  icon,
  reactRouterLink,
  disabled,
}: IMenuItemLinkProps) => {
  const captionElement = (
    <>
      {icon}
      <span>{caption}</span>
    </>
  );

  if (disabled) {
    return (
      <li className={className}>
        <a href="" className={styles.disabled}>
          {captionElement}
        </a>
      </li>
    );
  }

  if (reactRouterLink) {
    return (
      <li className={className}>
        <Link to={removeBaseName(baseName, href)}>{captionElement}</Link>
      </li>
    );
  }

  return (
    <li className={className}>
      <a href={href}>{captionElement}</a>
    </li>
  );
};

interface IMenuItemProps {
  className?: string;
  children: ReactNode;
  key: string;
}

export const MenuItem = ({ className, children }: IMenuItemProps) => (
  <li className={className}>{children}</li>
);

interface IProps {
  className?: string;
  children: ReactNode[];
}

export const Menu = ({ children, className }: IProps) => {
  const cssClass = className ? `${styles.menu} ${className}` : styles.menu;
  return <ul className={cssClass}>{children.map((c) => c)}</ul>;
};
