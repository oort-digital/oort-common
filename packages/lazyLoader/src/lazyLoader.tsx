import { ReactNode, Suspense } from "react"
import { DeviceType, useDeviceType } from "./useDeviceType"

interface IProps {
    desktop: ReactNode
    mobile: ReactNode
    tablet: ReactNode
}

export const LazyLoaderNextJs = ({ desktop, mobile, tablet}: IProps) => {
	const deviceType = useDeviceType()

    if(deviceType === DeviceType.Desktop) {
        return <>{desktop}</>
    }
    if(deviceType === DeviceType.Phone) {
        return <>{mobile}</>
    }

    return <>{tablet}</>
}

export const LazyLoader = (props: IProps) => {
	return <Suspense fallback={<span />}> <LazyLoaderNextJs {...props}/> </Suspense>
}

