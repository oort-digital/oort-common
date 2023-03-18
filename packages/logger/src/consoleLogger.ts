import { LogLevel } from "./logLevel";
import { ILogger } from "./iLogger";

export class ConsoleLogger implements ILogger {

    private readonly _curLogLevel: LogLevel;

    constructor(logLevel: LogLevel = LogLevel.Info) {
        this._curLogLevel = logLevel;
    }

    log = (level: LogLevel, message: any) => {
        if (level >= this._curLogLevel) {
            const messageWithLayout = `${new Date(Date.now()).toISOString()} ${message}`;
            switch (level) {
                case LogLevel.Error:
                    console.error(messageWithLayout);
                    break;
                case LogLevel.Warn:
                    console.warn(messageWithLayout);
                    break;
                case LogLevel.Info:
                    console.info(messageWithLayout);
                    break;
                case LogLevel.Debug:
                    console.log(messageWithLayout);
                    break;
                case LogLevel.Trace:
                    console.trace(messageWithLayout);
                    break;
            }
        }
    };

    trace = (message: string) => this.log(LogLevel.Trace, message);
    debug = (message: string) => this.log(LogLevel.Debug, message);
    info = (message: string) => this.log(LogLevel.Info, message);
    warn = (message: string) => this.log(LogLevel.Warn, message);
    error = (message: any) => this.log(LogLevel.Error, message);
}
