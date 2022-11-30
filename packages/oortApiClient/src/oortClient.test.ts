import { OortClient } from "./oortClient"
import { IOortClientSettings } from "./typesAndInterfaces"
import { EMPTY_ABORT_SIGNAL } from "@oort/ui"


const oortClientSettings: IOortClientSettings = {
    apiUrl: 'https://api-test.oort.digital/platform'
}

test.skip('debug only dasboard', async () => {

    const client = new OortClient(oortClientSettings)

    const response = await client.dashboard(EMPTY_ABORT_SIGNAL)

    console.log(JSON.stringify(response))
})