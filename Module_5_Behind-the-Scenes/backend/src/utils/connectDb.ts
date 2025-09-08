import { Sequelize } from 'sequelize';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DATABASE, DB_DIALECT } from '../env';

export const sequelize = new Sequelize(DATABASE, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
})

export const connectDb = async () => { 
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}