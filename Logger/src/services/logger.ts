import { Config } from "../config/config";

export class Logger {
    private _section: string;

    constructor(section: string) {
        this._section = section;
    }

    private formatMessage(message: string, logLevel: LogLevel): string {
        let levelString: string = LogLevel[logLevel];
        return `[${levelString}][${this._section}] ${message}`;
    }

    public log(message: string, logLevel: LogLevel): void {
        if (Config.LOG_LEVEL !== 'debug' && logLevel === LogLevel.DEBUG) {
            return;
        }
        console.log(this.formatMessage(message, logLevel));
    }

    public info(message: string): void {
        this.log(message, LogLevel.INFO);
    }

    public warn(message: string): void {
        this.log(message, LogLevel.WARN);
    }

    public debug(message: string): void {
        this.log(message, LogLevel.DEBUG);
    }

    public error(message: string): void {
        this.log(message, LogLevel.ERROR);
    }

    public fatal(message: string): void {
        this.log(message, LogLevel.FATAL);
    }
}

export enum LogLevel {
    INFO,
    WARN,
    DEBUG,
    ERROR,
    FATAL
}
