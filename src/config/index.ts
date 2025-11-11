// This file contains all the basic configuration logic for the app server to work
import dotenv from 'dotenv';

type ServerConfig = {
    PORT: number
    MONGODB_URI: string
    JWT_SECRET: string
}

function loadEnv() {
    dotenv.config();
    console.log(`Environment variables loaded`);
}

loadEnv();

export const serverConfig: ServerConfig = {
    PORT: Number(process.env.PORT) || 3001,
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/default_db',
    JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
};