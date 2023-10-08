import { LazyLoaderNextJs } from "@oort-digital/lazy-loader-next-js";
import { ILogger } from "@oort-digital/logger";
import dynamic, { Loader } from "next/dynamic";
import { ReactNode } from "react";
interface IProps {
  logger: ILogger;
  children: ReactNode;
  deviceType?: string;
}

const desktopLoader: Loader = () => import("./desktop");
const mobileLoader: Loader = () => import("./mobile");

export const OortSiteLayout = ({ children, logger, deviceType }: IProps) => {
  const DesktopEl = dynamic(desktopLoader);
  const MobileEl = dynamic(mobileLoader);
  return (
    <>
      <LazyLoaderNextJs
        logger={logger}
        deviceType={deviceType}
        desktop={<DesktopEl />}
        mobile={<MobileEl />}
        tablet={<MobileEl />}
      />
      {children}
    </>
  );
};
