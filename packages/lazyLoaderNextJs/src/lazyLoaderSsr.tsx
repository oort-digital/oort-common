import { ILogger } from "@oort-digital/logger";
import { DeviceType } from "./client";
import { getSsrDeviceType } from "./getSsrDeviceType";
import { headers } from "next/headers";

interface ILLProps {
  desktop: JSX.Element;
  mobile: JSX.Element;
  tablet: JSX.Element;
  logger?: ILogger;
}

export const LazyLoaderSsr = ({
  desktop,
  mobile,
  tablet,
  logger,
}: ILLProps) => {
  const headerList = headers();
  const userAgent = headerList.get("user-agent");

  const ssrDeviceType = getSsrDeviceType(userAgent, logger);

  if (ssrDeviceType === DeviceType.Desktop) {
    return <>{desktop}</>;
  } else if (ssrDeviceType === DeviceType.Phone) {
    return <>{mobile}</>;
  }

  return <>{tablet}</>;
};
