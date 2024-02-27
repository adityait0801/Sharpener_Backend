const mysql = require('mysql2');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'nodejs_sharpener',
    password : '1MySQL*'
});

module.exports = pool.promise();