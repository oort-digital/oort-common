export enum LogLevel {
    Trace =	0,
    Debug =	1,
    Info = 2,
    Warn = 3,
    Error = 4
}

export interface ILogger {
    log: (level: LogLevel, message: string) => void
    trace: (message: string) => void
    debug: (message: string) => void
    info: (message: string) => void
    warn: (message: string) => void
    error: (message: any) => void
};

class ConsoleLogger implements ILogger {

    private readonly _curLogLevel: LogLevel

    constructor(logLevel: LogLevel = LogLevel.Info) {
        this._curLogLevel = logLevel
    }
   
    log = (level: LogLevel, message: any) => {
        if(level >= this._curLogLevel) {
            const messageWithLayout = `${new Date(Date.now()).toISOString()} ${message}`
            switch(level) {
                case LogLevel.Error:
                    console.error(messageWithLayout)
                    break;
                case LogLevel.Warn:
                    console.warn(messageWithLayout)
                    break;
                case LogLevel.Info:
                    console.info(messageWithLayout)
                    break;
                case LogLevel.Debug:
                    console.log(messageWithLayout)
                    break;
                case LogLevel.Trace:
                    console.trace(messageWithLayout)
                    break;
            }
        }
    }

    trace = (message: string) => this.log(LogLevel.Trace, message)
    debug = (message: string) => this.log(LogLevel.Debug, message)
    info = (message: string) => this.log(LogLevel.Info, message)
    warn = (message: string) => this.log(LogLevel.Warn, message)
    error = (message: any) => this.log(LogLevel.Error, message)
}


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
function getCurLogLevel(): LogLevel {
    let str: string | null = localStorage.getItem(LOG_LEVEL_KEY)
    if(str) {
        return parseLogLevel(str)
    }
    let result: LogLevel = LogLevel.Info;
    localStorage.setItem(LOG_LEVEL_KEY, LogLevel[result].toLowerCase())
    return result
}

export const logger: ILogger = new ConsoleLogger(getCurLogLevel())