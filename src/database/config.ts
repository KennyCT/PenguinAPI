import { Sequelize } from "sequelize-typescript";
import { Penguin } from "../models/penguinDB";
import { readFileSync } from 'fs';

let password: string = readFileSync('../pw.txt', 'utf-8').trim();

const connection = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: password,
    database: "penguin",
    logging: false,
    models: [Penguin]
});

export default connection;
