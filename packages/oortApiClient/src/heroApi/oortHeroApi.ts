import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {IGameHeroesResponse, IHeroMintAvailableResponse, IHeroesResponse, IMintingQueryHeroesParams, IOortHeroApi, IOpenBlindBoxHero, IOpenBlindBoxParams, IQueryHeroesParams} from "./typesAndInterfaces";
import { toAuthRequest } from "../isAuthRequest";
import { IOortApiResponse, OortAxiosInstances } from "../common";

const oortServerApis = {
    getHeroes:"/hero/getHeroes",
    openMutationBlindBox:"/heroMinting/openHeroMutationBlindBox",
    getHeroAvailable: "/heroMinting/getHeroMintAvailable",
    openBlindBox: "/heroMinting/openBlindBox"
};

function getConfig(isAuth: boolean, signal: AbortSignal, params?: URLSearchParams): AxiosRequestConfig<any> {

    const config: AxiosRequestConfig<any> = { signal }

    if(params) {
        config.params = params
    }

    return isAuth ? toAuthRequest(config) : config
}

export class OortHeroApi implements IOortHeroApi {
    public async getHeroMintAvailable(signal: AbortSignal): Promise<IOortApiResponse<IHeroMintAvailableResponse>> {
        let url = oortServerApis.getHeroAvailable
        const response: AxiosResponse<IOortApiResponse<IHeroMintAvailableResponse>> = 
            await this._axios.get<IOortApiResponse<IHeroMintAvailableResponse>, AxiosResponse<IOortApiResponse<IHeroMintAvailableResponse>>>(url, getConfig(false, signal));
        return response.data;
    }

    public async getHeroes(params: IQueryHeroesParams, signal: AbortSignal): Promise<IOortApiResponse<IHeroesResponse>> {
        let url = oortServerApis.getHeroes
        const formData = new FormData();
        formData.append("tokenIds", params.tokenIds);
        const response: AxiosResponse<IOortApiResponse<IHeroesResponse>> = await this._axios.post<IOortApiResponse<IHeroesResponse>, AxiosResponse<IOortApiResponse<IHeroesResponse>>>(url, formData, getConfig(false, signal));
        return response.data;
    }

    public async openHeroBlindBox(params: IOpenBlindBoxParams, signal: AbortSignal): Promise<IOortApiResponse<IOpenBlindBoxHero>> {
        let url = oortServerApis.openBlindBox
        const formData = new FormData();
        formData.append("heroCollection", params.heroCollection);
        formData.append("tokenId",params.tokenId);
        const response: AxiosResponse<IOortApiResponse<IOpenBlindBoxHero>> = await this._axios.put<IOortApiResponse<IOpenBlindBoxHero>, AxiosResponse<IOortApiResponse<IOpenBlindBoxHero>>>(url, formData, getConfig(false, signal));
        return response.data;
    }

    public async getMintingHeroes({ wallet, pageNum, pageSize }: IMintingQueryHeroesParams, signal: AbortSignal): Promise<IOortApiResponse<IGameHeroesResponse>> {
        let url = oortServerApis.getHeroes
        const response = await this._axios.get<IOortApiResponse<IGameHeroesResponse>, AxiosResponse<IOortApiResponse<IGameHeroesResponse>>>(url , {
            params: {
                wallet,
                pageNum,
                pageSize
            },
            signal
        });
        return response.data;
    }

    constructor(baseUrl: string) {
        this._axios = axios.create({
          baseURL: baseUrl
        });
        OortAxiosInstances.register(this._axios)
    }
    
    private readonly _axios: AxiosInstance

}
