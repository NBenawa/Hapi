import mysql from 'mysql2/promise';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'appuser',
    password: 'apppass',
    database: 'appdb',
});

export const db = {
    connect: async () => await connection,
    
    query: async (queryString, escapedValues = []) => {
        const conn = await connection;
        const [results] = await conn.execute(queryString, escapedValues);
        return results;
    },

    end: async () => {
        const conn = await connection;
        await conn.end();
    },
};