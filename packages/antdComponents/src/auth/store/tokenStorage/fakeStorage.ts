import { ITokenStorage } from "./typesAndinterfaces"

export class FakeStorage implements ITokenStorage {
    clear = (_address: string) => { }
    setToken = (_address: string, _token: string) => {

    }
    getToken = (address: string) => `fake_token_${address}`
}