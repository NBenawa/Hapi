import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'appuser',
    password: 'apppass',
    database: 'appdb',
});

export const db = {
    connect: () => connection.connect(),
    query: (queryString, excapedValues) => 
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (err, results, fields) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results, fields);
                }
            })
        }),
    end: () => connection.end(),
};
