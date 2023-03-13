import { ILogger } from "@oort-digital/logger";
import { IncomingHttpHeaders } from "http";

interface IGetServerSidePropsContext {
    req: {
        headers: IncomingHttpHeaders
    }
}

function getIsSsrMobile(context: IGetServerSidePropsContext, logger?: ILogger): boolean {
    const userAgent = context.req.headers["user-agent"] as string;
    //This will not give 100% coverage but should cover most of the commonly encountered devices.
    const isMobile = !!userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);

    logger?.debug(`clientUserAgent: ${userAgent}`);
    logger?.debug(`isMobile: ${isMobile}`);
    return isMobile;
}

//call this function inside next.js getServerSideProps functions
export function getIsSsrMobileServerSideProps(context: IGetServerSidePropsContext, logger?: ILogger) {
  return {
    props: { isSsrMobile: getIsSsrMobile(context, logger) }
  }
}
