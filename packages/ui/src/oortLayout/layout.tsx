import { lazy } from "react"
import { LazyLoader } from "../lazyLoader"
import { ILayoutProps } from "./typesAndInterfaces"

const Desktop = lazy(() => import("./layoutDesktop"))
const Mobile = lazy(() => import("./layoutMobile"))

export const Layout = (props: ILayoutProps) => {
	return <LazyLoader
		desktop={<Desktop {...props}/>}
		mobile={<Mobile {...props} />}
		tablet={<Mobile {...props} />}
	/>
}