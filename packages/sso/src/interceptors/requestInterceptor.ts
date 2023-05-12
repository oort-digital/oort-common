import { InternalAxiosRequestConfig } from "axios";
import { isAuthRequest, setTokenHeader } from "./utils";

export const requestInterceptor = async (token: string | null, request: InternalAxiosRequestConfig<any>, debug: (msg: string) => void): Promise<InternalAxiosRequestConfig<any>> => {
    // remove the interceptors from at opensea and grapth api fetch method.
    if (request.url!.indexOf('opensea') !== -1 || request.url!.indexOf('thegraph') !== -1) {
        return request;
    }
    if(isAuthRequest(request)) {
        
        debug(`Request. IsAuthRequest=true Url=${request.url}`)
        if(!token) {
            debug(`Request. No token. Url=${request.url}`)
            return request
        }
        setTokenHeader(token, request) 
    }
    else {
        //set token for any request, event if token empty
        debug(request.url!)
        setTokenHeader(token, request)
    }
    return request
}