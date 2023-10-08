import { LazyLoaderNextJs } from "@oort-digital/lazy-loader-next-js";
import { ILogger } from "@oort-digital/logger";
import dynamic, { Loader } from "next/dynamic";
import { ReactNode } from "react";
import { IHeaderProps } from "./desktop";

interface IProps {
  logger: ILogger;
  children: ReactNode;
  deviceType?: string;
  pathname: string;
}

const desktopLoader: Loader<IHeaderProps> = () => import("./desktop");
const mobileLoader: Loader<IHeaderProps> = () => import("./mobile");

export const OortSiteLayout = ({
  children,
  logger,
  deviceType,
  pathname,
}: IProps) => {
  const DesktopEl = dynamic(desktopLoader);
  const MobileEl = dynamic(mobileLoader);
  return (
    <>
      <LazyLoaderNextJs
        logger={logger}
        deviceType={deviceType}
        desktop={<DesktopEl pathname={pathname} />}
        mobile={<MobileEl pathname={pathname} />}
        tablet={<MobileEl pathname={pathname} />}
      />
      {children}
    </>
  );
};
