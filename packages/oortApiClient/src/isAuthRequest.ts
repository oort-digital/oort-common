// eslint-disable-next-line import/named
import { RawAxiosRequestConfig } from "axios";

export type TokenType = string | null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface AxiosRequestConfigExtended<D = any>
  extends RawAxiosRequestConfig<D> {
  isAuthRequest: boolean | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toAuthRequest<D = any>(
  req: RawAxiosRequestConfig<D>,
): AxiosRequestConfigExtended<D> {
  const reqExtended = req as AxiosRequestConfigExtended<D>;
  reqExtended.isAuthRequest = true;
  return reqExtended;
}
