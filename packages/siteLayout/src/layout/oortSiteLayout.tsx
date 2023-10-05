import { LazyLoaderNextJs } from "@oort-digital/lazy-loader-next-js"
import dynamic, { Loader } from "next/dynamic"
import { ReactNode } from "react"
interface IProps {
  children: ReactNode
}


const desktopLoader: Loader = () => import('./desktop')
const mobileLoader: Loader = () => import('./mobile')

export const OortSiteLayout = ({ children }: IProps) => {

  const DesktopEl = dynamic(desktopLoader)
  const MobileEl = dynamic(mobileLoader)
  return (
    <>
      <LazyLoaderNextJs desktop={<DesktopEl />} mobile={<MobileEl />} tablet={<MobileEl />} />
      {children}
    </>
  )
}