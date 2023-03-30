import { DeviceType, TabletBreakPoints } from "@oort-digital/lazy-loader"
import { ILogger } from "@oort-digital/logger"
import dynamic, { Loader } from "next/dynamic"
import { useDeviceTypeNext } from "./useDeviceTypeNext"

interface ILLProps {
    desktop: Loader<any>
    mobile: Loader<any>
    tablet: Loader<any>
    logger?: ILogger
    tabletBreakPoints?: TabletBreakPoints
  }
  
  export const LazyLoaderNextJs = ({ desktop, mobile, tablet, logger, tabletBreakPoints}: ILLProps) => {
  
    const deviceType = useDeviceTypeNext({ logger, tabletBreakPoints })
  
    let DynamicElement: React.ComponentType<{}>
  
    if(deviceType === DeviceType.Desktop) {
      DynamicElement = dynamic(desktop)
    }
    else if(deviceType === DeviceType.Phone) {
      DynamicElement = dynamic(mobile)
    }
    else {
      DynamicElement = dynamic(tablet)
    }
  
    return <DynamicElement />
  }


