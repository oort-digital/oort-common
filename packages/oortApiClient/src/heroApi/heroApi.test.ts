import { OortHeroApi } from "./oortHeroApi";
import { IAPIConfig } from "../common";
import { interceptors, logger } from "../commonTests";

const abortController = new AbortController()
export const EMPTY_ABORT_SIGNAL = abortController.signal

const oortClientSettings: IAPIConfig = {
    baseURL: 'https://api-test.oort.digital/minting',
    logger,
    interceptors
}

test.skip('debug opensea hero', async () => {

    const client = OortHeroApi.createSingleton(oortClientSettings)

    const response = await client.getOpenseaHeroes({startTokenId: 1, endTokenId: 10}, EMPTY_ABORT_SIGNAL)

    console.log(JSON.stringify(response))
})
