import { BaseAPI, IAPIConfig, getConfig } from "../common";
import {
    IHomeApi,
    IGetClansParams,
    GetClansResponse
} from "./typesAndInterfaces";

const oortServerApis = {
    getClans: "/home/clans",
};

export class HomeApi extends BaseAPI implements IHomeApi {
    private static _singleton: HomeApi;

    static createSingleton(config: IAPIConfig): HomeApi {
        if (!HomeApi._singleton) {
            HomeApi._singleton = new HomeApi("HomeApi", config);
        }
        return HomeApi._singleton;
    }

    public async getClans(
        { keywords, pageNum, pageSize }: IGetClansParams,
        signal: AbortSignal,
    ): Promise<GetClansResponse> {
        const url = oortServerApis.getClans;
        const urlParams = this.addPagingParams({ pageNum, pageSize });

        if (keywords) {
            urlParams.append("keywords", keywords);
        }

        const response = await this.get<GetClansResponse>(
            url,
            getConfig(false, signal, urlParams),
        );
        return response;
    }

}

