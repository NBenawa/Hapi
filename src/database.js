import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'appuser',
    password: 'apppass',
    database: 'appdb',
});

export const db = {
    query: async (sql, params = []) => {
        const [rows] = await connection.execute(sql, params);
        return rows;
    }
};