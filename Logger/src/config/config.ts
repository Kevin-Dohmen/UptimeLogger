import { config } from 'dotenv';

config();

class ConfigModel {
    // Logger
    public readonly LOG_LEVEL: string;
    public readonly LOG_FILE: string;

    // Database
    public readonly DB_HOST: string;
    public readonly DB_PORT: number;
    public readonly DB_USER: string;
    public readonly DB_PASSWORD: string;
    public readonly DB_DATABASE: string;

    constructor() {
        // Logger
        this.LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
        this.LOG_FILE = process.env.LOG_FILE || 'app.log';

        // Database
        this.DB_HOST = process.env.DB_HOST || 'localhost';
        this.DB_PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;
        this.DB_USER = process.env.DB_USER || 'root';
        this.DB_PASSWORD = process.env.DB_PASSWORD || '';
        this.DB_DATABASE = process.env.DB_DATABASE || 'test';
    }
}

export const Config: ConfigModel = new ConfigModel();