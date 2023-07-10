import {
  IGameHeroesResponse,
  IGenerateHeroParams,
  IGenerateHeroResponse,
  IHeroMintAvailableResponse,
  IHeroesResponse,
  IMintingQueryHeroesParams,
  IOortHeroApi,
  IOpenBlindBoxHero,
  IOpenBlindBoxParams,
  IOpenseaHeroParams,
  IOpenseaHeroResponse,
  IQueryHeroesParams,
} from "./typesAndInterfaces";
import { BaseAPI, IAPIConfig, IOortApiResponse, getConfig } from "../common";

const oortServerApis = {
  getHeroes: "/hero/getHeroes",
  openMutationBlindBox: "/heroMinting/openHeroMutationBlindBox",
  getHeroAvailable: "/heroMinting/getHeroMintAvailable",
  openBlindBox: "/heroMinting/openBlindBox",
  generateHero: "/heroMinting/generateHero",
  getOpenseaHeroes: "/metadata/getOpenseaHeroes",
};

export class OortHeroApi extends BaseAPI implements IOortHeroApi {
  private static _singleton: OortHeroApi;
  static createSingleton(config: IAPIConfig): OortHeroApi {
    if (!OortHeroApi._singleton) {
      OortHeroApi._singleton = new OortHeroApi("OortHeroApi", config);
    }
    return OortHeroApi._singleton;
  }

  public async getHeroMintAvailable(
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IHeroMintAvailableResponse>> {
    const url = oortServerApis.getHeroAvailable;
    const response = await this.get<
      IOortApiResponse<IHeroMintAvailableResponse>
    >(url, getConfig(true, signal));
    return response;
  }

  public async getHeroes(
    params: IQueryHeroesParams,
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IHeroesResponse>> {
    const url = oortServerApis.getHeroes;
    const formData = new FormData();
    formData.append("tokenIds", params.tokenIds);
    const response = await this.post<IOortApiResponse<IHeroesResponse>>(
      url,
      formData,
      getConfig(false, signal),
    );
    return response;
  }

  public async openHeroBlindBox(
    params: IOpenBlindBoxParams,
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IOpenBlindBoxHero>> {
    const url = oortServerApis.openBlindBox;
    const formData = new FormData();
    formData.append("heroCollection", params.heroCollection);
    formData.append("tokenId", params.tokenId);
    const response = await this.put<IOortApiResponse<IOpenBlindBoxHero>>(
      url,
      formData,
      getConfig(false, signal),
    );
    return response;
  }

  public async generateHero(
    { tokenAddress, tokenId }: IGenerateHeroParams,
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IGenerateHeroResponse>> {
    const url = oortServerApis.generateHero;
    const formData = new FormData();
    formData.append("tokenAddress", tokenAddress);
    formData.append("tokenId", tokenId);
    const response = await this.put<IOortApiResponse<IGenerateHeroResponse>>(
      url,
      formData,
      getConfig(true, signal),
    );
    return response;
  }

  public async getMintingHeroes(
    { wallet, pageNum, pageSize }: IMintingQueryHeroesParams,
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IGameHeroesResponse>> {
    const url = oortServerApis.getHeroes;
    const response = await this.get<IOortApiResponse<IGameHeroesResponse>>(
      url,
      {
        params: {
          wallet,
          pageNum,
          pageSize,
        },
        signal,
      },
    );
    return response;
  }

  public async getOpenseaHeroes(
    { startTokenId, endTokenId }: IOpenseaHeroParams,
    signal: AbortSignal,
  ): Promise<IOortApiResponse<IOpenseaHeroResponse>> {
    const url = oortServerApis.getOpenseaHeroes;

    const response = await this.get<IOortApiResponse<IOpenseaHeroResponse>>(
      url,
      {
        params: {
          startTokenId,
          endTokenId,
        },
        signal,
      },
    );
    return response;
  }
}
