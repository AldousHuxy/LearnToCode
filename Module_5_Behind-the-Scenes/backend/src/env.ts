import { Dialect } from 'sequelize';

export const NODE_ENV = process.env.NODE_ENV!
export const PORT = Number(process.env.PORT!)
export const CLIENT_URL = process.env.CLIENT_URL!
export const DATABASE = process.env.DATABASE!
export const DB_USERNAME = process.env.DB_USERNAME!
export const DB_PASSWORD = process.env.DB_PASSWORD!
export const DB_HOST = process.env.DB_HOST!
export const DB_PORT = Number(process.env.DB_PORT!)
export const DB_DIALECT = process.env.DB_DIALECT! as Dialect
export const WEATHER_API_KEY = process.env.WEATHER_API_KEY!