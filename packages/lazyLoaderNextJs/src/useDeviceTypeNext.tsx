import { DeviceType, TabletBreakPoints, TABLET_BREAK_POINTS_DEFAULT, useDeviceType } from "@oort-digital/lazy-loader"
import { ILogger } from "@oort-digital/logger"
import { isSsrCheck } from "./isSsrCheck"
import { useSsrDeviceType } from "./useSsrDeviceType"

interface IParams {
	logger?: ILogger,
	tabletBreakPoints?: TabletBreakPoints
}

const DEFAULT_PARAMS: IParams = {
	tabletBreakPoints: TABLET_BREAK_POINTS_DEFAULT
}

export function useDeviceTypeNext({ logger, tabletBreakPoints }: IParams = DEFAULT_PARAMS): DeviceType {
	const isSsr = isSsrCheck()
	const ssrDeviceType = useSsrDeviceType()

	const deviceType = useDeviceType({ tabletBreakPoints, logger, isSsr })

    if(isSsr) {
        return ssrDeviceType
    }

	return deviceType
}
