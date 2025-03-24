import mysql from 'mysql2/promise';
import { Config } from './config';

// connection pool

export const pool = mysql.createPool({
    host: Config.DB_HOST,
    port: Config.DB_PORT,
    user: Config.DB_USER,
    password: Config.DB_PASSWORD,
    database: Config.DB_DATABASE,
    connectionLimit: 10
});
