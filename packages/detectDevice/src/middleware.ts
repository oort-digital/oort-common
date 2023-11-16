import { NextRequest } from "next/server";
import { ConsoleLogger } from "@oort-digital/logger";
import { detectDeviceMiddleware } from "./detectDevice";

const logger = new ConsoleLogger();

export function middleware(request: NextRequest) {
  return detectDeviceMiddleware(request, logger);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - _next
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next|static|favicon.ico).*)",
  ],

  runtime: "experimental-edge",
  unstable_allowDynamic: [
    "/node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js",
  ],
};
