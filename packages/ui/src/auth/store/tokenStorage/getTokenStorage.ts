import { CookieTokenStorage } from "./cookieTokenStorage"
import { FakeStorage } from "./fakeStorage"
import { LocalStorageTokenStorage } from "./localStorageTokenStorage"
import { ITokenStorage, TokenStorageType } from "./typesAndinterfaces"

let cookiesStorage: CookieTokenStorage | undefined
let fakeStorage: FakeStorage | undefined
let localStorageTokenStorage: LocalStorageTokenStorage | undefined

export function getTokenStorage(storageType: TokenStorageType): ITokenStorage {

  if(storageType === "cookies") {
    if(!cookiesStorage) { cookiesStorage = new CookieTokenStorage() }
    return cookiesStorage
  }
  else if(storageType === "localStorage") {
    if(!localStorageTokenStorage) { localStorageTokenStorage = new LocalStorageTokenStorage() }
    return localStorageTokenStorage
  }
  else if(storageType === "fake") {
    if(!fakeStorage) { fakeStorage = new FakeStorage() }
    return fakeStorage
  }

  throw new Error(`Unknown storage type: ${storageType}`)
}