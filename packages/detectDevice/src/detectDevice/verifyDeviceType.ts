import { ILogger } from "@oort-digital/logger";
import { DEVICE_TYPE_KEY } from "./constants";
import { DeviceType } from "./typesAndInterfaces";
import { getCookie, setCookie } from "typescript-cookie";

function isSsr() {
  return typeof window === "undefined";
}

function detectDeviceByScreenWidth(): DeviceType {
  const w = window.screen.width;
  if (w > 1200) {
    return "desktop";
  }
  if (w > 650) {
    return "tablet";
  }
  return "mobile";
}

export function verifyDeviceType(logger?: ILogger) {
  if (!isSsr()) {
    const clientDeviceType = detectDeviceByScreenWidth();
    const serverDeviceType = getCookie(DEVICE_TYPE_KEY);
    logger?.debug(`clientDeviceType: ${clientDeviceType}`);
    logger?.debug(`serverDeviceType: ${serverDeviceType}`);
    if (clientDeviceType !== serverDeviceType) {
      setCookie(DEVICE_TYPE_KEY, clientDeviceType);
      window.location.reload();
    }
  }
}
