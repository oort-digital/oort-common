import { OortCampaignApi } from "./oortCampaignApi";
import axios, { AxiosRequestConfig } from "axios"
import * as https from "https";
import { IAPIConfig, OortApiInterceptors } from "../common";
import { ConsoleLogger, LogLevel } from "@oort-digital/logger";

const abortController = new AbortController()
export const EMPTY_ABORT_SIGNAL = abortController.signal

const setTokenHeader = (token: string, curRequest: AxiosRequestConfig<any>) => {
    if(token && curRequest.headers) {
        curRequest.headers['token'] = token
    }
}

//set actual oort token here manualy
const OORT_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwIiwic3ViIjoiIiwiaWF0IjoxNjcyMDc4NDU3LCJleHAiOjE2NzI2ODMyNTcsIndhbGxldEFkZHJlc3MiOiIweDBkYjRhNzZkMTViODE5ZjA2NDk5ZDQ5MzhlMTYxNDZjNDU4YmU5NzcifQ.8_j-S8hwcwMelt1l4soo4mDMhSITkLleaivxARhlFYY'

axios.interceptors.request.use(async request => {
    request.httpsAgent = new https.Agent({
        rejectUnauthorized: false
    })
      
    console.log('interceptor!!!')
    console.log(request.url)
    setTokenHeader(OORT_TOKEN, request)
    return request
})

const logger = new ConsoleLogger(LogLevel.Debug)

const oortClientSettings: IAPIConfig = {
    baseURL: 'https://api-test.oort.digital/minting',
    logger,
    interceptors: OortApiInterceptors.createInstance(logger)
}

test.skip('debug only getCampaings', async () => {

    const client = OortCampaignApi.createSingleton(oortClientSettings)

    const response = await client.getCampaings({ pageNum: 1, pageSize: 10, brandIds: [1,2], keywords: "oort" }, EMPTY_ABORT_SIGNAL)

    console.log(JSON.stringify(response))
})