import { AxiosRequestConfig } from "axios";
export declare type TokenType = string | null;
export interface AxiosRequestConfigExtended<D = any> extends AxiosRequestConfig<D> {
    isAuthRequest: boolean | undefined;
}
export declare function toAuthRequest<D = any>(req: AxiosRequestConfig<D>): AxiosRequestConfigExtended<D>;
//# sourceMappingURL=isAuthRequest.d.ts.map