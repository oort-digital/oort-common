import { logger } from "@oort/logger"
import { delayAsync, toErrorWithMessage } from "../utils";
import { ICacheEntry, KEY_PREFIX } from "./icacheProvider";

export class CacheCleaner {

    private hasPrefix(key: string): boolean {

        if(key.length < KEY_PREFIX.length) {
            return false
        }

        for(let i = 0; i < KEY_PREFIX.length; i++) {
            if(key[i] !== KEY_PREFIX[i]) {
                return false
            }
        }

        return true
    }

    private tryRemove(now: number, key: string): void {
        try {
            const itemStr = localStorage.getItem(key)
            if(itemStr)
            {
                const cacheEntry: ICacheEntry = JSON.parse(itemStr)
                const { ttl } = cacheEntry
                if(ttl && ttl < now) {
                    localStorage.removeItem(key)
                    logger.debug(`${CacheCleaner.name}. '${key}' removed`)
                }
            }
        }
        catch(ex) {
            const err = toErrorWithMessage(ex)
            logger.error(`${CacheCleaner.name}. Can't remove '${key}' ${err.message}`)
        }
    }

    async start(cleanIntervalSec: number): Promise<void> {

        this._isStopped = false
        while(!this._isStopped) {
            logger.debug(`${CacheCleaner.name} started. localStorage.length: ${localStorage.length}`)
            const now = new Date().getTime()
            for(let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if(key && this.hasPrefix(key)) {
                    this.tryRemove(now, key)
                }
            }
            logger.debug(`${CacheCleaner.name} finished. localStorage.length: ${localStorage.length}`)
            await delayAsync(cleanIntervalSec * 1000)
        }
       
    }

    stop(): void {
        this._isStopped = true
    }

    private _isStopped: boolean = true
    
}