import { IncomingHttpHeaders } from "http";

interface IGetServerSidePropsContext {
    req: {
        headers: IncomingHttpHeaders
    }
}

function getIsSsrMobile(context: IGetServerSidePropsContext): boolean {
    const userAgent = context.req.headers["user-agent"] as string;
    console.log(userAgent);
    //This will not give 100% coverage but should cover most of the commonly encountered devices.
    const isMobile = !!userAgent.match(/(iPhone|iPod|iPad|Android|webOS|BlackBerry|IEMobile|Opera Mini)/i);
    return isMobile;
}

//call this function inside next.js getServerSideProps functions
export function getIsSsrMobileServerSideProps(context: IGetServerSidePropsContext) {
  return {
    props: { isSsrMobile: getIsSsrMobile(context) }
  }
}
