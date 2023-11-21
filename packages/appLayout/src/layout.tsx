import "./styles.scss";

import { ILayoutProps } from "./typesAndInterfaces";

import Desktop from "./layoutDesktop";
import Mobile from "./layoutMobile";

export const Layout = (props: ILayoutProps) => {
  const renderDevice = () => {
    if (props.deviceType === "desktop") {
      return <Desktop {...props} />;
    }
    if (props.deviceType === "mobile") {
      return <Mobile {...props} />;
    }
    return <Mobile {...props} />;
  };
  return renderDevice();
};
