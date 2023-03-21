let mysql = require('mysql');

let db = mysql.createConnection({
    host : 'localhost', 
    user: 'root',
    password: '',
    database: 'service'
});

db.connect()
module.exports =db;