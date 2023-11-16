"use client";
import "./styles.scss";
import { DeviceType } from "@oort-digital/lazy-loader-next-js";

import { ILayoutProps } from "./typesAndInterfaces";
import dynamic from "next/dynamic";

const Desktop = dynamic(() => import("./layoutDesktop"));
const Mobile = dynamic(() => import("./layoutMobile"));

export const Layout = (props: ILayoutProps) => {
  // todo: use detect device by cookies
  const deviceType = DeviceType.Desktop;

  const renderDevice = () => {
    if (deviceType === DeviceType.Desktop) {
      return <Desktop {...props} />;
    }
    if (deviceType === DeviceType.Phone) {
      return <Mobile {...props} />;
    }
    return <Mobile {...props} />;
  };
  return <>{renderDevice()}</>;
};
