import { useScreenWidth } from './useScreenWidth';

export type TabletBreakPoints = [number, number]

export const TABLET_BREAK_POINTS_DEFAULT: TabletBreakPoints = [650, 1200]

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

interface IParams {
	tabletBreakPoints: TabletBreakPoints
}

const DEFAULT_PARAMS: IParams = {
	tabletBreakPoints: TABLET_BREAK_POINTS_DEFAULT
}

export function useDeviceType({ tabletBreakPoints }: IParams = DEFAULT_PARAMS): DeviceType {
    const screenWidth = useScreenWidth()

	if(screenWidth <= tabletBreakPoints[0]) {
		return DeviceType.Phone
	}

	if(screenWidth > tabletBreakPoints[1]) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
