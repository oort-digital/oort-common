import axios, {AxiosResponse} from "axios";

export interface ISsoResponse<TData> {
    resultCode: number
    resultMessage: string
    resultValue: TData
}

export interface ITokenParams {
    address: string,
    signature?: string,
}

export interface ITokenResponse {
    token: string
}

const CONFIG = {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
};

export interface ISsoSettings {
    baseUrl: string
}

export interface ISsoClient {
    getNonce(address: string): Promise<ISsoResponse<string>>
    getToken(params: ITokenParams): Promise<ISsoResponse<ITokenResponse>>
}

export class SsoClient implements ISsoClient {

    public async getNonce(address: string): Promise<ISsoResponse<string>> {
        const response = await axios.get(`${this._apiUrl}/login/getNonce?address=${address}`, CONFIG);
        return response.data;
    }

    public async getToken(params: ITokenParams): Promise<ISsoResponse<ITokenResponse>> {
        const url = `${this._apiUrl}/login/requestLogin`
        const formData = new FormData();
        formData.append("address", params.address);
        if (params.signature) {
            formData.append("signature", params.signature);
        }
        const response: AxiosResponse<ISsoResponse<ITokenResponse>> = await axios.post<ISsoResponse<ITokenResponse>, AxiosResponse<ISsoResponse<ITokenResponse>>>(url, formData);
        return response.data;
    }

    constructor({ baseUrl }: ISsoSettings) {
        this._apiUrl = baseUrl
    }

    private readonly _apiUrl: string

}
