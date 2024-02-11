import { Sequelize } from "sequelize-typescript";
import { config } from 'dotenv';

config();

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    dialect:"postgres",
    username: process.env.DB_USER,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    models: [__dirname + "/models"],
    logging: console.log,
});

export default sequelize;