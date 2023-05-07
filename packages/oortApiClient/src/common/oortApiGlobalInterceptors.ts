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

export class OortAxiosInstances {

    static register(instance: AxiosInstance) {

        const requestIds = new Array<number>()
        const responseIds = new Array<number>()

        OortApiGlobalInterceptors.requestInterceptors.forEach(interceptor => {
            const id = instance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        OortApiGlobalInterceptors.responseInterceptors.forEach(interceptor => {
            const id = instance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        this.instanceInterceptors.push({ instance, requestIds, responseIds })
        
    }

    static unRegisterInterceptors() {
        this.instanceInterceptors.forEach(x => {
            const { instance, requestIds, responseIds } = x
            requestIds.forEach(instance.interceptors.request.eject)
            responseIds.forEach(instance.interceptors.response.eject)
        })
    }

    static readonly instanceInterceptors: IRegisterData[] = []
}

export class OortApiGlobalInterceptors {

    static readonly requestInterceptors: RequestInterceptor[] = []
    static readonly responseInterceptors: ResponseInterceptor[] = []
    
    static registerRequest(interceptor: RequestInterceptor) {
        OortApiGlobalInterceptors.requestInterceptors.push(interceptor)

        OortAxiosInstances.instanceInterceptors.forEach(x => {
            const id = x.instance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
            x.requestIds.push(id)
        })
    }

    static registerResponse(interceptor: ResponseInterceptor) {
        OortApiGlobalInterceptors.responseInterceptors.push(interceptor)

        OortAxiosInstances.instanceInterceptors.forEach(x => {
            const id = x.instance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
            x.responseIds.push(id)
        })
    }

    static unRegisterInterceptors() {
        OortAxiosInstances.unRegisterInterceptors()
    }

}
