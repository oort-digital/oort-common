import { DeviceType, IScreenSizeParams, TabletBreakPoints, TABLET_BREAK_POINTS_DEFAULT, useDeviceType } from "@oort-digital/lazy-loader"
import { isSsrCheck } from "./isSsrCheck"
import { useSsrDeviceType } from "./useSsrDeviceType"

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
	const ssrDeviceType = useSsrDeviceType()

	params.screenSizeParams.isSsr = isSsr
	const deviceType = useDeviceType(params)

    if(isSsr) {
        return ssrDeviceType
    }

	return deviceType
}
