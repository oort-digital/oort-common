/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable import/named */
import { ILogger } from "@oort-digital/logger";

import {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

interface IInterceptor<T> {
  name: string;
  onFulfilled?: T;
  onRejected?: (error: any) => any;
}

export type RequestInterceptorFunc = (
  request: InternalAxiosRequestConfig<any>,
) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>;
export type ResponseInterceptorFunc = (
  response: AxiosResponse<any, any>,
) => AxiosResponse<any, any> | Promise<AxiosResponse<any, any>>;
export type RequestInterceptor = IInterceptor<RequestInterceptorFunc>;
export type ResponseInterceptor = IInterceptor<ResponseInterceptorFunc>;

interface IRegisterData {
  name: string;
  instance: AxiosInstance;
  requestIds: number[];
  responseIds: number[];
}

export class OortApiInterceptors {
  readonly requestInterceptors: RequestInterceptor[] = [];
  readonly responseInterceptors: ResponseInterceptor[] = [];
  private readonly instanceInterceptors: IRegisterData[] = [];

  private static instance: OortApiInterceptors;
  static createInstance(logger: ILogger): OortApiInterceptors {
    if (!OortApiInterceptors.instance) {
      OortApiInterceptors.instance = new OortApiInterceptors(logger);
    }
    return OortApiInterceptors.instance;
  }

  private constructor(logger: ILogger) {
    this._logger = logger;
  }

  registerRequest(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);

    this.instanceInterceptors.forEach((x) => {
      this.debug(`add request interceptor.
instanceName: ${x.name}
interceptorName: ${interceptor.name}`);
      const id = x.instance.interceptors.request.use(
        interceptor.onFulfilled,
        interceptor.onRejected,
      );
      x.requestIds.push(id);
    });

    this.debug(`requestInterceptors.length:${this.requestInterceptors.length}`);
  }

  registerResponse(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);

    this.instanceInterceptors.forEach((x) => {
      this.debug(`add response interceptor.
instanceName: ${x.name}
interceptorName: ${interceptor.name}`);
      const id = x.instance.interceptors.response.use(
        interceptor.onFulfilled,
        interceptor.onRejected,
      );
      x.responseIds.push(id);
    });

    this.debug(
      `responseInterceptors.length:${this.responseInterceptors.length}`,
    );
  }

  unRegisterInterceptors() {
    this.ejectAllInstanceInterceptors();
    this.requestInterceptors.length = 0;
    this.responseInterceptors.length = 0;
  }

  registerInstance(instanceName: string, instance: AxiosInstance) {
    const requestIds = new Array<number>();
    const responseIds = new Array<number>();

    this.debug(`registerInstance.
instanceName: ${instanceName}
instanceInterceptors.length: ${this.instanceInterceptors.length}
requestInterceptors.length: ${this.requestInterceptors.length}
responseInterceptors.length: ${this.responseInterceptors.length}`);

    this.requestInterceptors.forEach((interceptor) => {
      this.debug(`add request interceptor.
instanceName: ${instanceName}
interceptorName: ${interceptor.name}`);
      const id = instance.interceptors.request.use(
        interceptor.onFulfilled,
        interceptor.onRejected,
      );
      requestIds.push(id);
    });

    this.responseInterceptors.forEach((interceptor) => {
      this.debug(`add response interceptor.
instanceName: ${instanceName}
interceptorName: ${interceptor.name}`);
      const id = instance.interceptors.response.use(
        interceptor.onFulfilled,
        interceptor.onRejected,
      );
      requestIds.push(id);
    });

    this.instanceInterceptors.push({
      name: instanceName,
      instance,
      requestIds,
      responseIds,
    });
  }

  ejectAllInstanceInterceptors() {
    this.instanceInterceptors.forEach((x) => {
      const { name, instance, requestIds, responseIds } = x;

      this.debug(`ejectAllInstanceInterceptors.
instanceName: ${name}
requestIds.length:${requestIds.length}
responseIds.length:${responseIds.length}
            `);
      requestIds.forEach((id) => instance.interceptors.request.eject(id));
      responseIds.forEach((id) => instance.interceptors.response.eject(id));
    });
  }

  private debug(msg: string) {
    this._logger.debug(`OortApiInterceptors. ${msg}`);
  }

  private readonly _logger: ILogger;
}
