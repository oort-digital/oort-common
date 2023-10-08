import styles from "./communityMenu.module.scss";
import { SubMenu } from "../../subMenu";
import { Menu } from "./menu";

interface IProps {
  title: string;
  subMenu: SubMenu[];
  width: number;
  left: number;
  pathname: string;
}

export const EcosystemMenu = (props: IProps) => {
  return (
    <Menu
      {...props}
      subMenuStyle={{ width: `${props.width}px`, left: `${props.left}px` }}
      subMenuItemClassName={styles.item}
    />
  );
};
