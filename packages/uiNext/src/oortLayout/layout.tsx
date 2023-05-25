import { LazyLoaderNextJs } from "@oort-digital/lazy-loader-next-js"
import { ILayoutProps } from "./typesAndInterfaces"
import dynamic, { Loader } from "next/dynamic"

const desktopLoader: Loader<ILayoutProps> = () => import("./layoutDesktop")
const mobileLoader: Loader<ILayoutProps> = () => import("./layoutMobile")

const DesktopEl = dynamic(desktopLoader)
const MobileEl = dynamic(mobileLoader)

export const Layout = (props: ILayoutProps) => {

    const desktop = <DesktopEl {...props}/>
    const mobile = <MobileEl {...props}/>

    return <LazyLoaderNextJs desktop={desktop} mobile={mobile} tablet={mobile} />
}
