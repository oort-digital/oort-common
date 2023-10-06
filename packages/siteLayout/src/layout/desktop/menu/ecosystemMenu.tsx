import styles from "./communityMenu.module.scss";
import { SubMenu } from "../../subMenu";
import { Menu } from "./menu";
import { ILogger } from "@oort-digital/logger";

interface IProps {
  logger: ILogger;
  title: string;
  subMenu: SubMenu[];
  width: number;
  left: number;
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
