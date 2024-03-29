import styles from "./subMenuItem.module.scss";
import { SubMenu } from "../../subMenu";
import Link from "next/link";
import { cutLongString } from "@oort-digital/utils";
import classNames from "classnames";

interface IProps {
  item: SubMenu;
  maxDescriptionLen?: number;
  className?: string;
  pathname: string;
}

export const SubMenuItem = ({
  item,
  maxDescriptionLen,
  className,
  pathname,
}: IProps) => {
  const { href, title, description, icon } = item;
  const isActive = pathname === href;

  return (
    <li>
      <Link
        className={classNames(className, styles.menuItem, { active: isActive })}
        href={href}
      >
        <div className="icon">{icon}</div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <p>
            {!!maxDescriptionLen
              ? cutLongString(description, maxDescriptionLen)
              : description}
          </p>
        </div>
      </Link>
    </li>
  );
};
