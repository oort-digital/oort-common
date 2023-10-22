import { ILogger } from "@oort-digital/logger";
import {
  DeviceType,
  TABLET_BREAK_POINTS_DEFAULT,
  TabletBreakPoints,
  useDeviceType,
} from "./client";

interface ILLProps {
  desktop: JSX.Element;
  mobile: JSX.Element;
  tablet: JSX.Element;
  logger?: ILogger;
  tabletBreakPoints?: TabletBreakPoints;
}

export const LazyLoaderClient = ({
  desktop,
  mobile,
  tablet,
  logger,
  tabletBreakPoints,
}: ILLProps) => {
  const deviceType = useDeviceType({
    tabletBreakPoints: tabletBreakPoints || TABLET_BREAK_POINTS_DEFAULT,
    logger,
  });

  if (deviceType === DeviceType.Desktop) {
    return <>{desktop}</>;
  } else if (deviceType === DeviceType.Phone) {
    return <>{mobile}</>;
  }

  return <>{tablet}</>;
};
