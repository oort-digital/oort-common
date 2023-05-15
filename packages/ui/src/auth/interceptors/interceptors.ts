import axios from "axios"
import { IAuthStore } from "../store"
import { AxiosResponse } from "axios"
import { OortApiGlobalInterceptors } from "@oort-digital/oort-api-client"
import { ILogger } from "@oort-digital/logger"
import { requestInterceptor } from "./requestInterceptor"
import { onReponseError } from "./onResponseError"

let registerAuthInterceptorsPromiseResolve: (value: void | PromiseLike<void>) => void

export const registerAuthInterceptorsPromise = new Promise<void>(r => {
    registerAuthInterceptorsPromiseResolve = r
})

export function registerAuthInterceptors(ssoStore: IAuthStore, logger: ILogger): [number, number] {
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

    OortApiGlobalInterceptors.registerRequest({ name: 'token_request', onFulfilled: onRequest }, logger)
    OortApiGlobalInterceptors.registerResponse({ name: 'token_response', onFulfilled: responseInterceptor, onRejected }, logger)

    registerAuthInterceptorsPromiseResolve()

    return [requestInterceptorId, responseInterceptorId]
}

export function unRegisterAuthInterceptors(ids: [number, number], logger: ILogger) {
    axios.interceptors.response.eject(ids[0])
    axios.interceptors.response.eject(ids[1])
    OortApiGlobalInterceptors.unRegisterInterceptors(logger)
}