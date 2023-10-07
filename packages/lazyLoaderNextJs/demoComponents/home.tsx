import { ConsoleLogger, LogLevel } from "@oort-digital/logger";
import { LazyLoaderNextJs } from "../src";
import dynamic, { Loader } from "next/dynamic";
import { IDesktopProps } from "./desktop";

const desktopLoader: Loader<IDesktopProps> = () => import("./desktop");
const mobileLoader: Loader<{}> = () => import("./mobile");
const tabletLoader: Loader<{}> = () => import("./tablet");

const logger = new ConsoleLogger(LogLevel.Debug);

const desktopProps: IDesktopProps = {
  text: "desktop",
};

export const Home = () => {
  const DesktopEl = dynamic(desktopLoader);
  const MobileEl = dynamic(mobileLoader);
  const TabletEl = dynamic(tabletLoader);

  return (
    <LazyLoaderNextJs
      logger={logger}
      desktop={<DesktopEl {...desktopProps} />}
      mobile={<MobileEl />}
      tablet={<TabletEl />}
    />
  );
};
