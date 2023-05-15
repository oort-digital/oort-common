import {AxiosResponse} from "axios";
import {IGameHeroesResponse, IGenerateHeroParams, IGenerateHeroResponse, IHeroMintAvailableResponse, IHeroesResponse, IMintingQueryHeroesParams, IOortHeroApi, IOpenBlindBoxHero, IOpenBlindBoxParams, IQueryHeroesParams} from "./typesAndInterfaces";
import { BaseAPI, IAPIConfig, IOortApiResponse, getConfig } from "../common";

const oortServerApis = {
    getHeroes:"/hero/getHeroes",
    openMutationBlindBox:"/heroMinting/openHeroMutationBlindBox",
    getHeroAvailable: "/heroMinting/getHeroMintAvailable",
    openBlindBox: "/heroMinting/openBlindBox",
    generateHero: "/heroMinting/generateHero"
};

export class OortHeroApi
    extends BaseAPI
    implements IOortHeroApi {

    private static _singleton: OortHeroApi
    static createSingleton(config: IAPIConfig): OortHeroApi {
        if(!OortHeroApi._singleton) {
            OortHeroApi._singleton = new OortHeroApi('OortHeroApi', config)
        }
        return OortHeroApi._singleton
    }

    public async getHeroMintAvailable(signal: AbortSignal): Promise<IOortApiResponse<IHeroMintAvailableResponse>> {
        let url = oortServerApis.getHeroAvailable
        const response: AxiosResponse<IOortApiResponse<IHeroMintAvailableResponse>> = 
            await this._axios.get<IOortApiResponse<IHeroMintAvailableResponse>, AxiosResponse<IOortApiResponse<IHeroMintAvailableResponse>>>(url, getConfig(true, signal));
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

    public async generateHero({ tokenAddress, tokenId }: IGenerateHeroParams, signal: AbortSignal): Promise<IOortApiResponse<IGenerateHeroResponse>> {
        let url = oortServerApis.generateHero
        const formData = new FormData();
        formData.append("tokenAddress", tokenAddress);
        formData.append("tokenId", tokenId);
        const response: AxiosResponse<IOortApiResponse<IGenerateHeroResponse>> = await this._axios.put<IOortApiResponse<IGenerateHeroResponse>, AxiosResponse<IOortApiResponse<IOpenBlindBoxHero>>>(url, formData, getConfig(true, signal));
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
}
