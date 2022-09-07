export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    LogLevel[LogLevel["Info"] = 2] = "Info";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Error"] = 4] = "Error";
})(LogLevel || (LogLevel = {}));
;
class ConsoleLogger {
    constructor(logLevel = LogLevel.Info) {
        this.log = (level, message) => {
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
        this.trace = (message) => this.log(LogLevel.Trace, message);
        this.debug = (message) => this.log(LogLevel.Debug, message);
        this.info = (message) => this.log(LogLevel.Info, message);
        this.warn = (message) => this.log(LogLevel.Warn, message);
        this.error = (message) => this.log(LogLevel.Error, message);
        this._curLogLevel = logLevel;
    }
}
const parseLogLevel = (str) => {
    str = str.toLowerCase();
    if (str === "trace") {
        return LogLevel.Trace;
    }
    if (str === "debug") {
        return LogLevel.Debug;
    }
    if (str === "info") {
        return LogLevel.Info;
    }
    if (str === "warn") {
        return LogLevel.Warn;
    }
    if (str === "error") {
        return LogLevel.Error;
    }
    throw new Error(`Unknown LogLevel: ${str}`);
};
const LOG_LEVEL_KEY = 'logLevel';
function getCurLogLevel() {
    let str = localStorage.getItem(LOG_LEVEL_KEY);
    if (str) {
        return parseLogLevel(str);
    }
    let result = LogLevel.Info;
    localStorage.setItem(LOG_LEVEL_KEY, LogLevel[result].toLowerCase());
    return result;
}
export const logger = new ConsoleLogger(getCurLogLevel());
