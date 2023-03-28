import { IScreenSizeParams, useScreenSize } from './useScreenSize';

export type TableBreakPoints = [number, number]

const tableBreakPointsDefault: TableBreakPoints = [650, 1200]

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

export function useDeviceType(params: IScreenSizeParams = {}, tableBreakPoints: TableBreakPoints = tableBreakPointsDefault): DeviceType {
    const [screenWidth] = useScreenSize(params)

	if(screenWidth <= tableBreakPoints[0]) {
		return DeviceType.Phone
	}

	if(screenWidth > tableBreakPoints[1]) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
