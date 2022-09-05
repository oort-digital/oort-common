
import { useScreenSize } from './useScreenSize';

const TabletScreenSizes = {
    min: 650,
    max: 1200
}

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

export function useDeviceType(): DeviceType {
	const [screenWidth] = useScreenSize()
	if(screenWidth <= TabletScreenSizes.min) {
		return DeviceType.Phone
	}

	if(screenWidth > TabletScreenSizes.max) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
