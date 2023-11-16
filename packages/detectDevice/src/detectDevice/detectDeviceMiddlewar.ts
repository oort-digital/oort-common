import { NextResponse, NextRequest, userAgentFromString } from "next/server"
import { DeviceType } from "./typesAndInterfaces"
import { DEVICE_TYPE_KEY } from "./constants"
import { ILogger } from "@oort-digital/logger"

function getDeviceFromUserAgentHeader(request: NextRequest): DeviceType {
  const uaHeader = request.headers.get('User-Agent')
  if(uaHeader) {
    const ua = userAgentFromString(uaHeader)
    if(ua.device.type === 'mobile') {
      return 'mobile'
    }

    if(ua.device.type === 'tablet') {
      return 'tablet'
    }
  }
  return 'desktop'
}

function getDeviceFromCookies(request: NextRequest): DeviceType | undefined {
  const dt = request.cookies.get(DEVICE_TYPE_KEY)

  if(dt) {
    return dt.value as DeviceType
  }

  return undefined
}

function getResponse(request: NextRequest, deviceType: DeviceType): NextResponse {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.append(DEVICE_TYPE_KEY, deviceType)
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export function detectDeviceMiddleware(request: NextRequest, logger?: ILogger): NextResponse {

  logger?.debug(`detectDeviceMiddleware: ${request.url}`)

  let deviceType = getDeviceFromCookies(request)
  if(deviceType) {
    return getResponse(request, deviceType)
  }

  deviceType = getDeviceFromUserAgentHeader(request)

  const response = getResponse(request, deviceType)
  logger?.debug(`detectDeviceMiddleware: set deviceType to ${deviceType}`)
  response.cookies.set(DEVICE_TYPE_KEY, deviceType);
  return response
}
