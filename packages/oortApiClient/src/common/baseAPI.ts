import { ILogger } from "@oort-digital/logger"
import axios, { AxiosInstance } from "axios"
import { OortAxiosInstances } from "./oortApiGlobalInterceptors"

export interface IAPIConfig {
    baseURL: string
    logger?: ILogger
}

export abstract class BaseAPI {

    protected constructor({ baseURL, logger }: IAPIConfig) {
        this._logger = logger
        this._axios = axios.create({ baseURL })
        OortAxiosInstances.register(this._axios)
    }

    protected readonly _axios: AxiosInstance
    protected readonly _logger?: ILogger
}