import { IScreenSizeParams, useScreenSize } from './useScreenSize';

export type TabletBreakPoints = [number, number]

export const TABLET_BREAK_POINTS_DEFAULT: TabletBreakPoints = [650, 1200]

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

interface IParams {
	screenSizeParams: IScreenSizeParams
	tabletBreakPoints: TabletBreakPoints
}

const DEFAULT_PARAMS: IParams = {
	screenSizeParams: {},
	tabletBreakPoints: TABLET_BREAK_POINTS_DEFAULT
}

export function useDeviceType({ tabletBreakPoints, screenSizeParams }: IParams = DEFAULT_PARAMS): DeviceType {
    const [screenWidth] = useScreenSize(screenSizeParams)

	if(screenWidth <= tabletBreakPoints[0]) {
		return DeviceType.Phone
	}

	if(screenWidth > tabletBreakPoints[1]) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
