import { IPagingParams, IPagingResponse } from "../common";

export type GetClansResponse = IPagingResponse<IClan>;

/* eslint-disable no-unused-vars */
export interface IHomeApi {
    getClans: (
        { keywords, pageNum, pageSize }: IGetClansParams,
        signal: AbortSignal,
    ) => Promise<GetClansResponse>;
}

export interface IClan {
    name: string;
    logo: string;
    url: string;
    supply: number;
    brandColor: string;
    campaigns: number;
}

export interface IGetClansParams extends IPagingParams {
    keywords?: string;
}