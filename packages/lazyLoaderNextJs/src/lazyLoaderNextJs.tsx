import { ILogger } from "@oort-digital/logger";
import { TabletBreakPoints } from "./client";
import { LazyLoaderSsr } from "./lazyLoaderSsr";
import { LazyLoaderClient } from "./lazyLoaderClient";
import { isSsrCheck } from "./isSsrCheck";

interface ILLProps {
  desktop: JSX.Element;
  mobile: JSX.Element;
  tablet: JSX.Element;
  logger?: ILogger;
  userAgent: string | null;
  tabletBreakPoints?: TabletBreakPoints;
}

export const LazyLoaderNextJs = ({
  desktop,
  mobile,
  tablet,
  logger,
  tabletBreakPoints,
  userAgent,
}: ILLProps) => {
  if (isSsrCheck()) {
    return (
      <LazyLoaderSsr
        userAgent={userAgent}
        logger={logger}
        desktop={desktop}
        mobile={mobile}
        tablet={tablet}
      />
    );
  }

  return (
    <LazyLoaderClient
      logger={logger}
      tabletBreakPoints={tabletBreakPoints}
      desktop={desktop}
      mobile={mobile}
      tablet={tablet}
    />
  );
};
