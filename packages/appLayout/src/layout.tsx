import { DeviceType, useDeviceType } from "@oort-digital/lazy-loader";
import { lazy, Suspense } from "react";
import { ILayoutProps } from "./typesAndInterfaces";

const Desktop = lazy(() => import("./layoutDesktop"));
const Mobile = lazy(() => import("./layoutMobile"));

export const Layout = (props: ILayoutProps) => {
  const deviceType = useDeviceType();

  const renderDevice = () => {
    if (deviceType === DeviceType.Desktop) {
      return <Desktop {...props} />;
    }
    if (deviceType === DeviceType.Phone) {
      return <Mobile {...props} />;
    }
    return <Mobile {...props} />;
  };
  return <Suspense fallback={<span />}> {renderDevice()} </Suspense>;
};
