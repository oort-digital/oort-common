import { ICacheItemPolicy, ICacheProvider } from "./icacheProvider";
export declare class LocalStorageCacheProvider implements ICacheProvider {
    private getKey;
    private static cleaner;
    private static instance;
    static create(cleanIntervalSec: number): LocalStorageCacheProvider;
    getItem<T>(key: string): T | null;
    setItem<T>(key: string, value: T, policy?: ICacheItemPolicy): void;
}
//# sourceMappingURL=localStorageCache.d.ts.map