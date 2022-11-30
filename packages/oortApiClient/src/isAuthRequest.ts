import { AxiosRequestConfig } from "axios"

export type TokenType = string | null

export interface AxiosRequestConfigExtended<D = any> extends AxiosRequestConfig<D> {
    isAuthRequest: boolean | undefined
}

export function toAuthRequest<D = any>(req: AxiosRequestConfig<D>): AxiosRequestConfigExtended<D> {
    const reqExtended = req as AxiosRequestConfigExtended<D>
    reqExtended.isAuthRequest = true
    return reqExtended
}