import { InternalAxiosRequestConfig } from "axios";
import { OortApiInterceptors } from "../common/oortApiInterceptors";
import { logger } from "./logger";

const testToken = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIyMzAiLCJpYXQiOjE2ODU0Mzc4MjgsImV4cCI6MTY4NjA0MjYyOCwid2FsbGV0QWRkcmVzcyI6IjB4NDFkMzdlNzcxMzRkMzUwN2RkM2IzYjM5MzI5M2UzMzFmZTA5MDFjOSJ9.p1oOdvyN6CturjcDd--d7kUnzakI8z0jsXz3PkXVhB4'

const testRequestInterceptor = (request: InternalAxiosRequestConfig<any>): Promise<InternalAxiosRequestConfig<any>> => {
    // remove the interceptors from at opensea and grapth api fetch method.
    request.headers['token'] = testToken

    return Promise.resolve(request)
}

const interceptors = OortApiInterceptors.createInstance(logger)

const onRequest = rq => testRequestInterceptor(rq)
interceptors.registerRequest({ name: 'token_request', onFulfilled: onRequest })

export { interceptors }