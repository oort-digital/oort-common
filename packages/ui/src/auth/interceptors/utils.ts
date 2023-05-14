import { AxiosRequestConfig } from "axios"

interface AxiosRequestConfigExtended<D = any> extends AxiosRequestConfig<D> {
    isAuthRequest: boolean | undefined
}

export function isAuthRequest<D = any>(req: AxiosRequestConfig<D>): boolean {
    const reqExtended = req as AxiosRequestConfigExtended<D>
    return !!reqExtended.isAuthRequest
}

export type TokenType = string | null

export const setTokenHeader = (token: TokenType, curRequest: AxiosRequestConfig<any>) => {
    if(token) {
        if(!curRequest.headers) {
            curRequest.headers = {}
        }
        curRequest.headers['token'] = token
    }
}
