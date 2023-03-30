import { ILogger } from '@oort-digital/logger';
import { useScreenWidth } from './useScreenWidth';

export type TabletBreakPoints = [number, number]

export const TABLET_BREAK_POINTS_DEFAULT: TabletBreakPoints = [650, 1200]

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

interface IParams {
	isSsr: boolean
	tabletBreakPoints: TabletBreakPoints
	logger?: ILogger
}

const DEFAULT_PARAMS: IParams = {
	isSsr: false,
	tabletBreakPoints: TABLET_BREAK_POINTS_DEFAULT
}

export function useDeviceType({ tabletBreakPoints, isSsr, logger }: IParams = DEFAULT_PARAMS): DeviceType {
    const screenWidth = useScreenWidth(isSsr, logger)

	if(screenWidth <= tabletBreakPoints[0]) {
		return DeviceType.Phone
	}

	if(screenWidth > tabletBreakPoints[1]) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
