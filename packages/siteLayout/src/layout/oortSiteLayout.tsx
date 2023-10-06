import { LazyLoaderNextJs } from "@oort-digital/lazy-loader-next-js";
import { ILogger } from "@oort-digital/logger";
import dynamic, { Loader } from "next/dynamic";
import { ReactNode } from "react";
interface IProps {
  logger: ILogger;
  children: ReactNode;
}

const desktopLoader: Loader<{ logger: ILogger }> = () => import("./desktop");
const mobileLoader: Loader<{ logger: ILogger }> = () => import("./mobile");

export const OortSiteLayout = ({ children, logger }: IProps) => {
  const DesktopEl = dynamic(desktopLoader);
  const MobileEl = dynamic(mobileLoader);
  return (
    <>
      <LazyLoaderNextJs
        desktop={<DesktopEl logger={logger} />}
        mobile={<MobileEl logger={logger} />}
        tablet={<MobileEl logger={logger} />}
      />
      {children}
    </>
  );
};
