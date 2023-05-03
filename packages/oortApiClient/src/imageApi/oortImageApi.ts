import axios, { AxiosInstance, AxiosResponse } from "axios";
import { IOortApiResponse } from "../common";

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
  checkImageExist(params: ICheckImageExistParams): Promise<boolean>;
  uploadSingleImage(params: IUploadSingleImageParams): Promise<boolean>;
}

export class OortImageApi implements IOortImageApi {
  // eslint-disable-next-line class-methods-use-this
  public async checkImageExist(
    params: ICheckImageExistParams,
  ): Promise<boolean> {
    const url = oortServerApis.checkImageExist
    const formData = new FormData();
    formData.append("chainId", params.chainId);
    formData.append("tokenAddress", params.tokenAddress);
    formData.append("tokenId", params.tokenId);
    const response: AxiosResponse<IOortApiResponse<boolean>> =
      await this._axios.post<
        IOortApiResponse<boolean>,
        AxiosResponse<IOortApiResponse<boolean>>
      >(url, formData);
    return response.data.resultValue;
  }

  // eslint-disable-next-line class-methods-use-this
  public async uploadSingleImage(
    params: IUploadSingleImageParams,
  ): Promise<boolean> {
    const url = oortServerApis.uploadSingleImage
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
      >(url, formData);
    return response.data.resultValue;
  }

  constructor(baseUrl: string) {

    this._axios = axios.create({
      baseURL: baseUrl
    });

  }

  private readonly _axios: AxiosInstance
}
