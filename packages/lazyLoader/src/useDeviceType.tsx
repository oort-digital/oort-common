import { isSsrCheck } from './isSsrCheck';
import { useIsSsrMobile } from './useIsSsrMobile';
import { IScreenSizeParams, useScreenSize } from './useScreenSize';

const TabletScreenSizes = {
    min: 650,
    max: 1200
}

export enum DeviceType {
	Phone = "PHONE",
	Tablet = 'TABLET',
	Desktop = 'DESKTOP'
}

export function useDeviceType(params: IScreenSizeParams = {}): DeviceType {
	const isSsrMobile = useIsSsrMobile()
    const [screenWidth] = useScreenSize(params)

    if(isSsrCheck()) {
        //for ssr only 2 type of devices - Desktop or Phone
        return isSsrMobile ? DeviceType.Phone : DeviceType.Desktop
    }

	if(screenWidth <= TabletScreenSizes.min) {
		return DeviceType.Phone
	}

	if(screenWidth > TabletScreenSizes.max) {
		return DeviceType.Desktop
	}

	return DeviceType.Tablet
}
