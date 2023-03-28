import { DeviceType, IScreenSizeParams, TabletBreakPoints, TABLET_BREAK_POINTS_DEFAULT, useDeviceType } from "@oort-digital/lazy-loader"
import { isSsrCheck } from "./isSsrCheck"
import { useIsSsrMobile } from "./useIsSsrMobile"

interface IParams {
	screenSizeParams: IScreenSizeParams
	tabletBreakPoints: TabletBreakPoints
}

const DEFAULT_PARAMS: IParams = {
	screenSizeParams: {},
	tabletBreakPoints: TABLET_BREAK_POINTS_DEFAULT
}

export function useDeviceTypeNext(params: IParams = DEFAULT_PARAMS): DeviceType {
	const isSsr = isSsrCheck()
	const isSsrMobile = useIsSsrMobile()

	params.screenSizeParams.isSsr = isSsr
	const deviceType = useDeviceType(params)

    if(isSsr) {
        //for ssr only 2 type of devices - Desktop or Phone
        return isSsrMobile ? DeviceType.Phone : DeviceType.Desktop
    }

	return deviceType
}
