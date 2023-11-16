import { ReadonlyHeaders } from 'next/dist/server/web/spec-extension/adapters/headers';
import { DeviceType } from './typesAndInterfaces';
import { DEVICE_TYPE_KEY } from './constants';

export function detectDevice(headers: ReadonlyHeaders): DeviceType {
    const ua = headers.get(DEVICE_TYPE_KEY)
    if(ua) {
        return ua as DeviceType
    }
    return 'desktop'
} 