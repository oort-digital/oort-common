export interface ITokenStorage {
    setToken: (address: string, token: string) => void
    getToken: (address: string) => string | undefined
    clear: (address: string) => void
}

export type TokenStorageType = 'cookies' | 'localStorage' | 'fake'

