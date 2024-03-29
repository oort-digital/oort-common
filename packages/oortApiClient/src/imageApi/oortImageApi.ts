// eslint-disable-next-line import/named
import { AxiosResponse } from "axios";
import { BaseAPI, IAPIConfig, IOortApiResponse } from "../common";

export interface ICheckImageExistParams {
  chainId: string;
  tokenAddress: string;
  tokenId: string;
}

export interface IUploadSingleImageParams {
  image: Blob;
  chainId: string;
  tokenAddress: string;
  tokenId: string;
  account: string;
}

const oortServerApis = {
  checkImageExist: "/imageManager/checkImageExist",
  uploadSingleImage: "/imageManager/uploadSingleImage",
};

export interface IOortImageApi {
  checkImageExist(
    _params: ICheckImageExistParams,
    _signal: AbortSignal,
  ): Promise<boolean>;
  uploadSingleImage(
    _params: IUploadSingleImageParams,
    _signal: AbortSignal,
  ): Promise<boolean>;
}

export class OortImageApi extends BaseAPI implements IOortImageApi {
  private static _singleton: OortImageApi;
  static createSingleton(config: IAPIConfig): OortImageApi {
    if (!OortImageApi._singleton) {
      OortImageApi._singleton = new OortImageApi("OortImageApi", config);
    }
    return OortImageApi._singleton;
  }

  // eslint-disable-next-line class-methods-use-this
  public async checkImageExist(
    params: ICheckImageExistParams,
    signal: AbortSignal,
  ): Promise<boolean> {
    const url = oortServerApis.checkImageExist;
    const formData = new FormData();
    formData.append("chainId", params.chainId);
    formData.append("tokenAddress", params.tokenAddress);
    formData.append("tokenId", params.tokenId);
    const response: AxiosResponse<IOortApiResponse<boolean>> =
      await this._axios.post<
        IOortApiResponse<boolean>,
        AxiosResponse<IOortApiResponse<boolean>>
      >(url, formData, { signal });
    return response.data.resultValue;
  }

  // eslint-disable-next-line class-methods-use-this
  public async uploadSingleImage(
    params: IUploadSingleImageParams,
    signal: AbortSignal,
  ): Promise<boolean> {
    const url = oortServerApis.uploadSingleImage;
    const formData = new FormData();
    formData.append("image", params.image);
    formData.append("chainId", params.chainId);
    formData.append("tokenAddress", params.tokenAddress);
    formData.append("tokenId", params.tokenId);
    formData.append("account", params.account);
    const response: AxiosResponse<IOortApiResponse<boolean>> =
      await this._axios.post<
        IOortApiResponse<boolean>,
        AxiosResponse<IOortApiResponse<boolean>>
      >(url, formData, { signal });
    return response.data.resultValue;
  }
}
