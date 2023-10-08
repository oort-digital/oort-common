import { ILogger } from "@oort-digital/logger";
import { DeviceType } from "./client";
import { getSsrDeviceType } from "./getSsrDeviceType";

interface ILLProps {
  desktop: JSX.Element;
  mobile: JSX.Element;
  tablet: JSX.Element;
  logger?: ILogger;
  userAgent: string | null;
}

export const LazyLoaderSsr = ({
  desktop,
  mobile,
  tablet,
  logger,
  userAgent,
}: ILLProps) => {
  const ssrDeviceType = getSsrDeviceType(userAgent, logger);

  if (ssrDeviceType === DeviceType.Desktop) {
    return <>{desktop}</>;
  } else if (ssrDeviceType === DeviceType.Phone) {
    return <>{mobile}</>;
  }

  return <>{tablet}</>;
};
