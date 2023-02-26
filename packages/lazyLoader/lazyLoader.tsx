import { ReactNode, Suspense } from "react"
import { DeviceType, useDeviceType } from "./useDeviceType"

interface IProps {
    desktop: ReactNode
    mobile: ReactNode
    tablet: ReactNode
}

export const LazyLoader = ({ desktop, mobile, tablet }: IProps) => {
	const deviceType = useDeviceType()

    const renderDevice = () => {
        if(deviceType === DeviceType.Desktop) {
            return desktop
        }
        if(deviceType === DeviceType.Phone) {
            return mobile
        }

        return tablet
    }

	return <Suspense fallback={<span />}> { renderDevice() } </Suspense>
}