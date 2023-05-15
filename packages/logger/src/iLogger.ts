import { LogLevel } from "./logLevel";

export interface ILogger {
    log: (level: LogLevel, message: string) => void;
    trace: (message: string) => void;
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: any) => void;
}
