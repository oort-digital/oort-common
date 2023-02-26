import { ReactNode, Suspense } from "react"
import { DeviceType, useDeviceType } from "./useDeviceType"

interface IProps {
    desktop: ReactNode
    mobile: ReactNode
    tablet: ReactNode
}

interface IPropsNextJs {
    desktop: ReactNode
    mobile: ReactNode
    tablet: ReactNode
    isSSR: boolean
}

export const LazyLoaderNextJs = ({ desktop, mobile, tablet, isSSR }: IPropsNextJs) => {
	const deviceType = useDeviceType({ isSSR })

    if(deviceType === DeviceType.Desktop) {
        return <>{desktop}</>
    }
    if(deviceType === DeviceType.Phone) {
        return <>{mobile}</>
    }

    return <>{tablet}</>
}

export const LazyLoader = (props: IProps) => {
	return <Suspense fallback={<span />}> <LazyLoaderNextJs isSSR={false} {...props}/> </Suspense>
}

