import mysql from 'mysql2';

export const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.user,
    password: process.env.password,
    database: 'company_db'
});