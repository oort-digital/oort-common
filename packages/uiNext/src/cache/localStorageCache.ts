import { CacheCleaner } from "./cacheCleaner";
import { ExpirationType, ICacheEntry, ICacheItemPolicy, ICacheProvider, KEY_PREFIX } from "./icacheProvider";

export class LocalStorageCacheProvider implements ICacheProvider {

    private getKey = (key: string) => `${KEY_PREFIX}${key}`

    private static cleaner: CacheCleaner
    private static instance: LocalStorageCacheProvider
    static create(cleanIntervalSec: number) {
        if(!LocalStorageCacheProvider.cleaner) {
            LocalStorageCacheProvider.cleaner = new CacheCleaner()
            LocalStorageCacheProvider.cleaner.start(cleanIntervalSec)
        }
        if(!LocalStorageCacheProvider.instance) {
            LocalStorageCacheProvider.instance = new LocalStorageCacheProvider()
        }
        return LocalStorageCacheProvider.instance
    }

    getItem<T>(key: string): T | null {
        const k = this.getKey(key)
        const itemStr = localStorage.getItem(k)
        if(!itemStr) {
            return null
        }

        const cacheEntry: ICacheEntry = JSON.parse(itemStr)
        const { ttl, se, value } = cacheEntry

        if(!ttl) {
            return value
        }

        const now = new Date().getTime()
        if(now < ttl) {
            if(se) {
                cacheEntry.ttl = now + se
                localStorage.setItem(k, JSON.stringify(cacheEntry))
            }
            return value
        }

        localStorage.removeItem(k)

        return null
        
    }
    setItem<T>(key: string, value: T, policy?: ICacheItemPolicy): void {
        
        const cacheEntry: ICacheEntry = {
            value: value
        }

        if(policy) {
            const { expirationMs, expirationType } = policy
            cacheEntry.ttl = new Date().getTime() + expirationMs
            if(expirationType === ExpirationType.sliding) {
                cacheEntry.se = expirationMs
            }
        }

        localStorage.setItem(this.getKey(key), JSON.stringify(cacheEntry))
    }
    
}