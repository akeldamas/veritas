import { registerAs } from '@nestjs/config';

export const CONFIG_DATABASE = 'database';

export default registerAs(CONFIG_DATABASE, () => ({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10) || 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: process.env.DB_SYNCHRONIZE === 'true',
}));
