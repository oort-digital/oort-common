import { LogLevel } from "./logLevel"

const parseLogLevel = (str: string): LogLevel => {
    str = str.toLowerCase()
    if(str === "trace") { return LogLevel.Trace }
    if(str === "debug") { return LogLevel.Debug }
    if(str === "info") { return LogLevel.Info }
    if(str === "warn") { return LogLevel.Warn }
    if(str === "error") { return LogLevel.Error }
    throw new Error(`Unknown LogLevel: ${str}`)
}

const LOG_LEVEL_KEY = 'logLevel'
const DEFAULT_LOG_LEVEL = LogLevel.Info
export function getLogLevelFromLocalStorage(): LogLevel {
    // ssr check
    // because localStorage is not avaible on server side by default
    if(!localStorage) {
        return DEFAULT_LOG_LEVEL
    }
    let str: string | null = localStorage.getItem(LOG_LEVEL_KEY)
    if(str) {
        return parseLogLevel(str)
    }

    localStorage.setItem(LOG_LEVEL_KEY, LogLevel[DEFAULT_LOG_LEVEL].toLowerCase())
    return DEFAULT_LOG_LEVEL
}