import { ILogger } from "@oort-digital/logger"
import axios, { AxiosInstance } from "axios"
import { OortApiInterceptors } from "./oortApiInterceptors"

export interface IAPIConfig {
    baseURL: string
    logger: ILogger
    interceptors: OortApiInterceptors
}

export abstract class BaseAPI {

    protected constructor(name: string, { baseURL, logger, interceptors }: IAPIConfig) {
        this._logger = logger
        this._axios = axios.create({ baseURL })
        interceptors.registerInstance(name, this._axios)
    }

    protected readonly _axios: AxiosInstance
    protected readonly _logger?: ILogger
}