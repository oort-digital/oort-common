import { ReactNode, Suspense } from "react"
import { DeviceType, useDeviceType } from "./useDeviceType"

interface IProps {
    desktop: ReactNode
    mobile: ReactNode
    tablet: ReactNode
}

export const LazyLoader = ({desktop, mobile, tablet}: IProps) => {

    const renderContent = () => {
        const deviceType = useDeviceType()
    
        if(deviceType === DeviceType.Desktop) {
            return <>{desktop}</>
        }
        if(deviceType === DeviceType.Phone) {
            return <>{mobile}</>
        }
    
        return <>{tablet}</>
    }

	return <Suspense fallback={<span />}>{renderContent()}</Suspense>
}

