import styles from "./productMenu.module.scss";
import { SubMenu } from "../../subMenu";
import { Menu } from "./menu";

interface IProductMenu {
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
