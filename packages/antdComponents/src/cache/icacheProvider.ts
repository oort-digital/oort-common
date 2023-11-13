export interface ICacheEntry {
    value: any
    ttl?: number
    //slidingExpiration
    se?: number
}

export interface ICacheItem {
    value: string
    ttl?: number
};

export enum ExpirationType {
    // Gets or sets a value that indicates whether a cache entry should be evicted at a specified point in time.
    absolute = 1,
    // Gets or sets a value that indicates whether a cache entry should be evicted if it has not been accessed in a given span of time.
    sliding = 2
}

export interface ICacheItemPolicy {
    expirationMs: number
    expirationType: ExpirationType
}

export interface ICacheProvider {
    getItem<T>(key: string): T | null
    setItem<T>(key: string, value: T, policy?: ICacheItemPolicy): void
};

export const KEY_PREFIX = 'OORT_CACHE_'