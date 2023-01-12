export interface ICacheEntry {
    value: any;
    ttl?: number;
    se?: number;
}
export interface ICacheItem {
    value: string;
    ttl?: number;
}
export declare enum ExpirationType {
    absolute = 1,
    sliding = 2
}
export interface ICacheItemPolicy {
    expirationMs: number;
    expirationType: ExpirationType;
}
export interface ICacheProvider {
    getItem<T>(key: string): T | null;
    setItem<T>(key: string, value: T, policy?: ICacheItemPolicy): void;
}
export declare const KEY_PREFIX = "OORT_CACHE_";
//# sourceMappingURL=icacheProvider.d.ts.map