import "dotenv/config.js";
import { Sequelize } from 'sequelize';

const db = new Sequelize (
    process.env.DATABASE_NAME, 
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD, {
        host: 'containers-us-west-188.railway.app',
        dialect: 'mysql'
    });

export default db;