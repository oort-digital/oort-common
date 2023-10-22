import "./oortSiteLayout.css";
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
  baseUrl?: string;
}

const desktopLoader: Loader<IHeaderProps> = () => import("./desktop");
const mobileLoader: Loader<IHeaderProps> = () => import("./mobile");

export const OortSiteLayout = ({
  children,
  logger,
  deviceType,
  pathname,
  baseUrl,
}: IProps) => {
  const DesktopEl = dynamic(desktopLoader);
  const MobileEl = dynamic(mobileLoader);
  return (
    <>
      <LazyLoaderNextJs
        logger={logger}
        deviceType={deviceType}
        desktop={<DesktopEl baseUrl={baseUrl} pathname={pathname} />}
        mobile={<MobileEl baseUrl={baseUrl} pathname={pathname} />}
        tablet={<MobileEl baseUrl={baseUrl} pathname={pathname} />}
      />
      {children}
    </>
  );
};
