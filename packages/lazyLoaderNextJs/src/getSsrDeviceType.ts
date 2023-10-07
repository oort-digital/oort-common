import { ILogger } from "@oort-digital/logger";
import { UAParser } from "ua-parser-js";
import { toErrorWithMessage } from "@oort-digital/utils";
import { DeviceType } from "./client";
import { headers } from "next/headers";

type UADeviceType = "desktop" | "mobile" | "tablet";
interface IDeviceInfo {
  type?: UADeviceType;
}

function parseDeviceType(
  device: IDeviceInfo,
  ua: string,
  logger: ILogger | undefined
): DeviceType {
  try {
    if (device.type === "mobile") {
      return DeviceType.Phone;
    }

    if (device.type === "tablet") {
      return DeviceType.Tablet;
    }
  } catch (err) {
    const errWithMessage = toErrorWithMessage(err);
    logger?.error(`Can't parse device type.
    UserAgent: ${ua}
    ${errWithMessage.message}
    `);
  }

  return DeviceType.Desktop;
}

export function getSsrDeviceType(logger: ILogger | undefined): DeviceType {
  const headerList = headers();
  const userAgent = headerList.get("user-agent");

  if (userAgent === null) {
    logger?.warn("Empty user-agent header");
    return DeviceType.Desktop;
  }

  logger?.debug(`UA: ${userAgent}`);

  const parser = new UAParser(userAgent);
  const device: IDeviceInfo = parser.getDevice();
  logger?.debug(`device: ${JSON.stringify(device)}`);

  const deviceType = parseDeviceType(device, userAgent, logger);
  logger?.debug(`deviceType: ${JSON.stringify(deviceType)}`);

  return deviceType;
}
