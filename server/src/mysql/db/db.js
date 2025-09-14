import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',         // MySQL username
    password: '1234', // password for db
    database: 'online_store',
});
