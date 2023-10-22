import { ILogger } from "@oort-digital/logger";

interface ILLProps {
  desktop: JSX.Element;
  mobile: JSX.Element;
  tablet: JSX.Element;
  logger?: ILogger;
  deviceType?: string;
}

export const LazyLoaderSsr = ({
  desktop,
  mobile,
  tablet,
  deviceType,
}: ILLProps) => {
  if (deviceType === "mobile") {
    return <>{mobile}</>;
  } else if (deviceType === "tablet") {
    return <>{tablet}</>;
  }

  return <>{desktop}</>;
};
