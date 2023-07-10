/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable import/named */
import { AxiosHeaders, RawAxiosRequestConfig } from "axios";
import { toAuthRequest } from "../isAuthRequest";

export function getConfig(
  isAuth: boolean,
  signal: AbortSignal,
  params?: URLSearchParams,
): RawAxiosRequestConfig<any> {
  const config: RawAxiosRequestConfig<any> = {
    signal: signal,
    headers: new AxiosHeaders(),
  };

  if (params) {
    config.params = params;
  }

  return isAuth ? toAuthRequest(config) : config;
}
