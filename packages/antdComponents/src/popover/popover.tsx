// import styles from "./popoverFilter.module.scss";
import { Popover as AntPopover, PopoverProps } from "antd";

export type RangeValue = number | undefined;

export function Popover(props: PopoverProps) {
  return <AntPopover {...props} />;
}

export const PopoverDesignToken = {
  colorBgElevated: "#11151A",
  borderRadiusLG: 4,
  //border - #5D6971
};
