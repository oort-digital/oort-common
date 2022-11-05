import { delayAsync } from "../utils";
import { CacheCleaner } from "./cacheCleaner";
import { ExpirationType } from "./icacheProvider";
import { LocalStorageCacheProvider } from "./localStorageCache";

// jest.setTimeout(60000)
test('should clean expired', async () => {
    
    // const expirationMs = 5000
    // const cacheItemsCount = 10000
    const expirationMs = 300
    const cacheItemsCount = 100
    const key_prefix = 'TEST_KEY'
    
    const expected = 'test'
    const policy = { expirationMs: expirationMs, expirationType: ExpirationType.absolute }
    const provider = new LocalStorageCacheProvider()

    for(let i = 0; i < cacheItemsCount; i++) {
        provider.setItem(`${key_prefix}_${i}`, expected, policy)
    }

    for(let i = 0; i < cacheItemsCount; i++) {
        const actual = provider.getItem(`${key_prefix}_${i}`)
        expect(actual).toEqual(expected)
    }

    const cleaner = new CacheCleaner()
    cleaner.start(1)

    await delayAsync(expirationMs + 100)

    for(let i = 0; i < cacheItemsCount; i++) {
        const actual = provider.getItem(`${key_prefix}_${i}`)
        expect(actual).toBeNull()
    }
    
 });

 test('should clean only oort items', async () => {
    const key = 'TEST_KEY'
    const expected = 'test'
   
    localStorage.setItem(key, expected)

    const cleaner = new CacheCleaner()
    cleaner.start(1)

    await delayAsync(100)

    const actual = localStorage.getItem(key)
    expect(actual).toEqual(expected)
 });





