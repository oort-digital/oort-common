import { IScreenSizeParams, useScreenSize } from './useScreenSize';

export type TabletBreakPoints = [number, number]

const tabletBreakPointsDefault: TabletBreakPoints = [650, 1200]

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

export function useDeviceType(params: IScreenSizeParams = {}, tabletBreakPoints: TabletBreakPoints = tabletBreakPointsDefault): DeviceType {
    const [screenWidth] = useScreenSize(params)

	if(screenWidth <= tabletBreakPoints[0]) {
		return DeviceType.Phone
	}

	if(screenWidth > tabletBreakPoints[1]) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
