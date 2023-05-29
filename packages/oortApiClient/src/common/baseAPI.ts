import { ILogger } from "@oort-digital/logger"
import axios, { AxiosInstance } from "axios"
import { OortApiGlobalInterceptors } from "./oortApiGlobalInterceptors"

export interface IAPIConfig {
    baseURL: string
    logger: ILogger
}

export abstract class BaseAPI {

    protected constructor(name: string, { baseURL, logger }: IAPIConfig) {
        this._logger = logger
        this._axios = axios.create({ baseURL })
        OortApiGlobalInterceptors.registerInstance(name, this._axios, logger)
    }

    protected readonly _axios: AxiosInstance
    protected readonly _logger?: ILogger
}