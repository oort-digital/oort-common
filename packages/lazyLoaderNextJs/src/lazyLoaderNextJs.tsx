import { DeviceType, TabletBreakPoints } from "@oort-digital/lazy-loader"
import { ILogger } from "@oort-digital/logger"
import { useDeviceTypeNext } from "./useDeviceTypeNext"

interface ILLProps {
    desktop: JSX.Element
    mobile: JSX.Element
    tablet: JSX.Element
    logger?: ILogger
    tabletBreakPoints?: TabletBreakPoints
  }
  
export const LazyLoaderNextJs = ({ desktop, mobile, tablet, logger, tabletBreakPoints}: ILLProps) => {

  const deviceType = useDeviceTypeNext({ logger, tabletBreakPoints })

  if(deviceType === DeviceType.Desktop) {
    return <>{desktop}</>
  }
  else if(deviceType === DeviceType.Phone) {
    return <>{mobile}</>
  }

  return <>{tablet}</>
}


