export const API_VERSION: string = '1.0.0';
export const NODE_ENV: string = process.env.NODE_ENV || ''; // LOCAL/PROD/STAGING

export const DB_AWS_REGION: string  = process.env.DB_AWS_REGION || '';
export const DB_HOST: string = process.env.DB_HOST || '127.0.0.1';
export const DB_USER: string = process.env.DB_USER || 'sa';
export const DB_PASSWORD: string = process.env.DB_PASSWORD || '!GrowBiz!';
export const DB_NAME: string = process.env.DB_NAME || 'asipl_hr_2022';
export const DB_PORT: string = process.env.DB_PORT || '';
export const DB_DIALECT: string = process.env.DB_DIALECT || 'mssql';

