import axios from "axios"
import { IAuthStore } from "../store"
import { AxiosResponse } from "axios"
import { OortApiInterceptors } from "@oort-digital/oort-api-client"
import { ILogger } from "@oort-digital/logger"
import { requestInterceptor } from "./requestInterceptor"
import { onReponseError } from "./onResponseError"

export function registerAuthInterceptors(oortInterceptors: OortApiInterceptors, ssoStore: IAuthStore, logger: ILogger): [number, number] {
    const debug = (msg: string) => {
        logger.debug(`AuthInterceptor. ${msg}`)
    }

    const onRequest = rq => requestInterceptor(ssoStore.token, rq, debug)
    const onRejected = err => onReponseError(err, ssoStore.clearToken, debug)

    const responseInterceptor = (res: AxiosResponse<any, any>) => res
    const requestInterceptorId = axios.interceptors.request.use(onRequest)

    const responseInterceptorId = axios.interceptors.response.use(
        responseInterceptor,
        onRejected
    );

    oortInterceptors.registerRequest({ name: 'token_request', onFulfilled: onRequest })
    oortInterceptors.registerResponse({ name: 'token_response', onFulfilled: responseInterceptor, onRejected })

    return [requestInterceptorId, responseInterceptorId]
}

export function unRegisterAuthInterceptors(oortInterceptors: OortApiInterceptors, ids: [number, number]) {
    axios.interceptors.response.eject(ids[0])
    axios.interceptors.response.eject(ids[1])
    oortInterceptors.unRegisterInterceptors()
}