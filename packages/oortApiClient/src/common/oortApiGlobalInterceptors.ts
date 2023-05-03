import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"

interface IInterceptor<T> {
    onFulfilled?: T
    onRejected?: (error: any) => any
}

export type RequestInterceptorFunc = (request: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>
export type ResponseInterceptorFunc = (response: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>
export type RequestInterceptor = IInterceptor<RequestInterceptorFunc>
export type ResponseInterceptor = IInterceptor<ResponseInterceptorFunc>

interface IRegisterData {
    instance: AxiosInstance
    requestIds: number[]
    responseIds: number[]
}



class OortApiInterceptors {

    readonly requestInterceptors: RequestInterceptor[] = []
    readonly responseInterceptors: ResponseInterceptor[] = []
    
    __register(instance: AxiosInstance) {

        const requestIds = new Array<number>()
        const responseIds = new Array<number>()

        this.requestInterceptors.forEach(interceptor => {
            const id = instance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        this.responseInterceptors.forEach(interceptor => {
            const id = instance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        this._registredInterceptors.push({ instance, requestIds, responseIds })
        
    }

    unRegisterInterceptors() {
        this._registredInterceptors.forEach(x => {
            const { instance, requestIds, responseIds } = x
            requestIds.forEach(instance.interceptors.request.eject)
            responseIds.forEach(instance.interceptors.response.eject)
        })
    }

    private readonly _registredInterceptors: IRegisterData[] = []
}


export const OortApiInterceptorsGlobal = new OortApiInterceptors() 