import axios, { AxiosRequestConfig } from "axios"
import { toErrorWithMessage } from "@oort-digital/utils"
import { ISsoStore } from "../store"
import { InternalAxiosRequestConfig } from "axios"
import { AxiosResponse } from "axios"
import { OortApiGlobalInterceptors } from "@oort-digital/oort-api-client"
import { ILogger } from "@oort-digital/logger"

export type TokenType = string | null

interface AxiosRequestConfigExtended<D = any> extends AxiosRequestConfig<D> {
    isAuthRequest: boolean | undefined
}

function isAuthRequest<D = any>(req: AxiosRequestConfig<D>): boolean {
    const reqExtended = req as AxiosRequestConfigExtended<D>
    return !!reqExtended.isAuthRequest
}

const setTokenHeader = (token: TokenType, curRequest: AxiosRequestConfig<any>) => {
    if(token) {
        if(!curRequest.headers) {
            curRequest.headers = {}
        }
        curRequest.headers['token'] = token
    }
}

type TokenFunc = (reset: boolean) => Promise<TokenType>

export function registerAuthInterceptors(getAuthToken: TokenFunc, ssoStore: ISsoStore, logger: ILogger): [number, number] {

    const debug = (msg: string) => {
        logger.debug(`AuthInterceptor. ${msg}`)
    }
    
    const tryGetAuthToken: TokenFunc = async (reset: boolean) => {
        try {
            return await getAuthToken(reset)
        }
        catch(err: any) {
            const errWithMessage = toErrorWithMessage(err)
            logger.error(errWithMessage)
        }
        return null
    }

    // @ts-ignore

    const requestInterceptor = async (request: InternalAxiosRequestConfig<any>): Promise<nternalAxiosRequestConfig<any>> => {
        // remove the interceptors from at opensea and grapth api fetch method.
        if (request.url!.indexOf('opensea') !== -1 || request.url!.indexOf('thegraph') !== -1) {
            return request;
        }
        if(isAuthRequest(request)) {
            // token is required, ask user to connect wallet and sign nonce
            debug(`Request. IsAuthRequest=true Url=${request.url}`)
            const token = await tryGetAuthToken(false)
            if(!token) {
                return
            }
            setTokenHeader(token, request) 
        }
        else {
            //set token for any request, event if token empty
            debug(request.url!)
            setTokenHeader(ssoStore.token, request)
        }
        return request
    }

    const responseInterceptor = (res: AxiosResponse<any, any>) => res
    const onReponseError = async error => {
        const originalRequest = error.config;
        if (error.response && (error.response.status === 403 || error.response.status === 400)  && !originalRequest._retry) {
            originalRequest._retry = true;
            debug(`Response. Status=403 Url=${originalRequest.url}`)
            const token = await tryGetAuthToken(true)
            if(!token) {
                return error
            }
            setTokenHeader(token, originalRequest)
            return axios(originalRequest)
        }
        return error
    }


    const requestInterceptorId = axios.interceptors.request.use(requestInterceptor)
    // refresh token interceptor
    const responseInterceptorId = axios.interceptors.response.use(
        responseInterceptor,
        onReponseError
    );

    OortApiGlobalInterceptors.registerRequest({ onFulfilled: requestInterceptor })
    OortApiGlobalInterceptors.registerResponse({ onFulfilled: responseInterceptor, onRejected: onReponseError })

    return [requestInterceptorId, responseInterceptorId]
}

export function unRegisterAuthInterceptors(ids: [number, number]) {
    axios.interceptors.response.eject(ids[0])
    axios.interceptors.response.eject(ids[1])
    OortApiGlobalInterceptors.unRegisterInterceptors()
}