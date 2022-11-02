import { observer } from "mobx-react"
import { lazy, Suspense } from "react"
import { DeviceType, useDeviceType } from "../effects"
import { ILayoutProps } from "./typesAndInterfaces"

const Desktop = lazy(() => import("./layoutDesktop"))
const Mobile = lazy(() => import("./layoutMobile"))

const Impl = (props: ILayoutProps) => {

	const deviceType = useDeviceType()

    const renderDevice = () => {
        if(deviceType === DeviceType.Desktop) {
            return <Desktop {...props} />
        }
        if(deviceType === DeviceType.Phone) {
            return <Mobile {...props} />
        }

        return <Mobile {...props} />
    }

	return <Suspense fallback={<span />}> { renderDevice() } </Suspense>
}

export const Layout = observer(Impl)