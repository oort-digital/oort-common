import { DeviceType } from "@oort-digital/lazy-loader";
import { ILogger } from "@oort-digital/logger";
import { IncomingHttpHeaders } from "http";
import { UAParser } from "ua-parser-js"
import { toErrorWithMessage } from "@oort-digital/utils";

interface IGetServerSidePropsContext {
    req: {
        headers: IncomingHttpHeaders
    }
}

type UADeviceType = 'desktop' | 'mobile' | 'tablet'
interface IDeviceInfo {
  type?: UADeviceType
}

function parseDeviceType(device: IDeviceInfo, ua: string, logger: ILogger): DeviceType {
  try {
    if(device.type === 'mobile') {
      return DeviceType.Phone
    }
  
    if(device.type === 'tablet') {
      return DeviceType.Tablet
    }
  }
  catch(err) {
    const errWithMessage = toErrorWithMessage(err)
    logger?.error(`Can't parse device type.
    UserAgent: ${ua}
    ${errWithMessage.message}
    `)
  }
  
  return DeviceType.Desktop
}

function getSsrDeviceType(context: IGetServerSidePropsContext, logger: ILogger): DeviceType {
    const userAgent = context.req.headers["user-agent"] as string;
    logger.debug(`UA: ${userAgent}`);

    const parser = new UAParser(userAgent)
    const device: IDeviceInfo = parser.getDevice()
    logger.debug(`device: ${JSON.stringify(device)}`);

    const deviceType = parseDeviceType(device, userAgent, logger)
    logger.debug(`deviceType: ${JSON.stringify(deviceType)}`);

    return deviceType
}

//call this function inside next.js getServerSideProps functions
export function getSsrDeviceTypeProps(context: IGetServerSidePropsContext, logger: ILogger) {
  return {
    props: { ssrDeviceType: getSsrDeviceType(context, logger) }
  }
}
