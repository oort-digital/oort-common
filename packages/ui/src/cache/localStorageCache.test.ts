import { delayAsync } from "../../utils";
import { ExpirationType, ICacheItemPolicy } from "./icacheProvider";
import { LocalStorageCacheProvider } from "./localStorageCache";

const key = 'test_key'

const shouldSetAndGetString = async (policy?: ICacheItemPolicy) => {
    const expected = 'test'
    const provider = new LocalStorageCacheProvider()
    provider.setItem(key, expected, policy)
    if(policy) {
        await delayAsync(policy.expirationMs - 100)
    }
    const actual = provider.getItem<string>(key)
    expect(actual).toEqual(expected)
}

test('should set and get string', async () => {
    const expirationMs = 300
    await shouldSetAndGetString()
    await shouldSetAndGetString({ expirationMs: expirationMs, expirationType: ExpirationType.absolute })
    await shouldSetAndGetString({ expirationMs: expirationMs, expirationType: ExpirationType.sliding })
 });


 test('should set and get object', () => {
    const expected = { testField: 'test' }
    const provider = new LocalStorageCacheProvider()

    provider.setItem(key, expected)
    const actual = provider.getItem<{ testField: string }>(key)

    expect(actual?.testField).toEqual(expected.testField)
 });

 test('should remove if ttl expired', async () => {

    const expirationMs = 300
    const key = 'test_key'

    const expected = 'test'
    const provider = new LocalStorageCacheProvider()

    provider.setItem(key, expected, { expirationMs: expirationMs, expirationType: ExpirationType.absolute })

    await delayAsync(expirationMs + 30)

    const actual = provider.getItem(key)

    expect(actual).toBeNull()
 });

 test('should slide', async () => {

    const expirationMs = 300
    const ttl = new Date().getTime() + expirationMs
    const key = 'test_key'

    const expected = 'test'
    const provider = new LocalStorageCacheProvider()

    provider.setItem(key, expected, { expirationMs: expirationMs, expirationType: ExpirationType.sliding })

    while(true)
    {
        await delayAsync(50)
        const actual = provider.getItem(key)
        expect(actual).toEqual(expected)
        if(new Date().getTime() > ttl) {
            break
        }
    }
 });