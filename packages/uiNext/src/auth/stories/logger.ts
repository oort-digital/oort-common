import { ConsoleLogger, ILogger, LogLevel } from "@oort-digital/logger";

const logger: ILogger = new ConsoleLogger(LogLevel.Debug);
export default logger;