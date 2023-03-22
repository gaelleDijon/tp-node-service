let mysql = require('mysql');
const dbh = process.env.DB_HOST;
const dbu = process.env.DB_USER;
const dbp = process.env.DB_PASSWORD;
const dbd = process.env.DB_NAME;


let db = mysql.createConnection({
    host : DB_HOST, 
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME
});

db.connect();
module.exports = db;