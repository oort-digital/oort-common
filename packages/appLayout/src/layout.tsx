import "./styles.scss";

import { ILayoutProps } from "./typesAndInterfaces";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./layoutDesktop"), {
  ssr: true,
});
const Mobile = dynamic(() => import("./layoutMobile"), {
  ssr: true,
});

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
