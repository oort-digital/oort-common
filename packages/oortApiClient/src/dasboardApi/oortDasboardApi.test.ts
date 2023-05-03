import { OortDasboardApi } from "./oortDasboardApi";
import { IOortDasboardApiSettings } from "./typesAndInterfaces"
import axios, { AxiosRequestConfig } from "axios"
import * as https from "https";

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

const oortClientSettings: IOortDasboardApiSettings = {
    apiUrl: 'https://api-test.oort.digital/platform'
}

test.skip('debug only dasboard', async () => {

    const client = new OortDasboardApi(oortClientSettings)

    const response = await client.dashboard(EMPTY_ABORT_SIGNAL)

    console.log(JSON.stringify(response))
})

test.skip('debug only getCurrentUserReview', async () => {

    const client = new OortDasboardApi(oortClientSettings)

    const response = await client.getCurrentUserReview('oort-heroes-rpg', EMPTY_ABORT_SIGNAL)

    console.log(JSON.stringify(response))
})