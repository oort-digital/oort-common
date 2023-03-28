import { DeviceType } from "@oort-digital/lazy-loader"
import dynamic, { Loader } from "next/dynamic"
import { useDeviceTypeNext } from "./useDeviceTypeNext"

interface ILLProps {
    desktop: Loader<any>
    mobile: Loader<any>
    tablet: Loader<any>
  }
  
  export const LazyLoaderNextJs = ({ desktop, mobile, tablet}: ILLProps) => {
  
    const deviceType = useDeviceTypeNext()
  
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


