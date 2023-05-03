import { RawAxiosRequestConfig } from "axios"

export type TokenType = string | null

export interface AxiosRequestConfigExtended<D = any> extends RawAxiosRequestConfig<D> {
    isAuthRequest: boolean | undefined
}

export function toAuthRequest<D = any>(req: RawAxiosRequestConfig<D>): AxiosRequestConfigExtended<D> {
    const reqExtended = req as AxiosRequestConfigExtended<D>
    reqExtended.isAuthRequest = true
    return reqExtended
}