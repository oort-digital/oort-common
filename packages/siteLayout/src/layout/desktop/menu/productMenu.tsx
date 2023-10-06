import styles from "./productMenu.module.scss";
import { SubMenu } from "../../subMenu";
import { Menu } from "./menu";
import { ILogger } from "@oort-digital/logger";

interface IProductMenu {
  logger: ILogger;
  title: string;
  subMenu: SubMenu[];
}

export const ProductMenu = (props: IProductMenu) => {
  return (
    <Menu
      {...props}
      maxDescriptionLen={120}
      subMenuClassName={styles.submenu}
      subMenuItemClassName={styles.item}
    />
  );
};
