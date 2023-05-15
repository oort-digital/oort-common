import { ILogger } from "@oort-digital/logger"
import { AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from "axios"

interface IInterceptor<T> {
    name: string
    onFulfilled?: T
    onRejected?: (error: any) => any
}

export type RequestInterceptorFunc = (request: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>
export type ResponseInterceptorFunc = (response: AxiosResponse<any, any>) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>
export type RequestInterceptor = IInterceptor<RequestInterceptorFunc>
export type ResponseInterceptor = IInterceptor<ResponseInterceptorFunc>

interface IRegisterData {
    name: string
    instance: AxiosInstance
    requestIds: number[]
    responseIds: number[]
}

export class OortAxiosInstances {

    static register(instanceName: string, instance: AxiosInstance, logger: ILogger) {

        const requestIds = new Array<number>()
        const responseIds = new Array<number>()

        logger.debug(`OortAxiosInstances register interceptors.
instanceName: ${instanceName}
instanceInterceptors.length: ${OortAxiosInstances.instanceInterceptors.length}
requestInterceptors.length: ${OortApiGlobalInterceptors.requestInterceptors.length}
responseInterceptors.length: ${OortApiGlobalInterceptors.responseInterceptors.length}`)

        OortApiGlobalInterceptors.requestInterceptors.forEach(interceptor => {
            logger.debug(`OortAxiosInstances add request interceptor.
instanceName: ${instanceName}
interceptorName: ${interceptor.name}`)
            const id = instance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        OortApiGlobalInterceptors.responseInterceptors.forEach(interceptor => {
            logger.debug(`OortAxiosInstances add response interceptor.
instanceName: ${instanceName}
interceptorName: ${interceptor.name}`)
            const id = instance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
            requestIds.push(id)
        })

        OortAxiosInstances.instanceInterceptors.push({ name: instanceName, instance, requestIds, responseIds })
    }

    static unRegisterInterceptors(logger: ILogger) {
        OortAxiosInstances.instanceInterceptors.forEach(x => {
            const { name, instance, requestIds, responseIds } = x

            logger.debug(`OortAxiosInstances unregister interceptors.
instanceName: ${name}
requestIds.length:${requestIds.length}
responseIds.length:${responseIds.length}
            `)
            requestIds.forEach(id => instance.interceptors.request.eject(id))
            responseIds.forEach(id => instance.interceptors.response.eject(id))
        })
    }

    static readonly instanceInterceptors: IRegisterData[] = []
}

export class OortApiGlobalInterceptors {

    static readonly requestInterceptors: RequestInterceptor[] = []
    static readonly responseInterceptors: ResponseInterceptor[] = []
    
    static registerRequest(interceptor: RequestInterceptor, logger: ILogger) {
        OortApiGlobalInterceptors.requestInterceptors.push(interceptor)

        OortAxiosInstances.instanceInterceptors.forEach(x => {
            logger.debug(`OortApiGlobalInterceptors add request interceptor.
instanceName: ${x.name}
interceptorName: ${interceptor.name}`)
            const id = x.instance.interceptors.request.use(interceptor.onFulfilled, interceptor.onRejected)
            x.requestIds.push(id)
        })

        logger.debug(`OortApiGlobalInterceptors.requestInterceptors.length:${OortApiGlobalInterceptors.requestInterceptors.length}`)
    }

    static registerResponse(interceptor: ResponseInterceptor, logger: ILogger) {
        OortApiGlobalInterceptors.responseInterceptors.push(interceptor)

        OortAxiosInstances.instanceInterceptors.forEach(x => {
            logger.debug(`OortApiGlobalInterceptors add response interceptor.
instanceName: ${x.name}
interceptorName: ${interceptor.name}`)
            const id = x.instance.interceptors.response.use(interceptor.onFulfilled, interceptor.onRejected)
            x.responseIds.push(id)
        })

        logger.debug(`OortApiGlobalInterceptors.responseInterceptors.length:${OortApiGlobalInterceptors.responseInterceptors.length}`)
    }

    static unRegisterInterceptors(logger: ILogger) {
        OortAxiosInstances.unRegisterInterceptors(logger)
        OortApiGlobalInterceptors.requestInterceptors.length = 0
        OortApiGlobalInterceptors.responseInterceptors.length = 0
    }

}
