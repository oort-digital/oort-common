import { ILogger } from "@oort-digital/logger"
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
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

    protected async get<TResponse>(url: string, config?: AxiosRequestConfig<any>): Promise<TResponse> {
        const response = await this._axios.get<TResponse, AxiosResponse<TResponse>>(url, config);
        return response.data
    }

    protected async put<TResponse>(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<TResponse> {
        const response: AxiosResponse<TResponse> = await this._axios.put<TResponse, AxiosResponse<TResponse>>(url, data, config);
        return response.data;
    }

    public async post<TResponse>(url: string, data?: any, config?: AxiosRequestConfig<any>): Promise<TResponse> {
        const response = await this._axios.post<TResponse, AxiosResponse<TResponse>>(url, data, config);
        return response.data;
    }

    protected readonly _axios: AxiosInstance
    protected readonly _logger?: ILogger
}