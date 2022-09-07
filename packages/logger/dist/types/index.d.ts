export declare enum LogLevel {
    Trace = 0,
    Debug = 1,
    Info = 2,
    Warn = 3,
    Error = 4
}
export interface ILogger {
    log: (level: LogLevel, message: string) => void;
    trace: (message: string) => void;
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: any) => void;
}
export declare const logger: ILogger;
//# sourceMappingURL=index.d.ts.map