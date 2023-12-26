var mysql = require('mysql2');

var pool = mysql.createConnection({
    user: "root",
    password: "C@ca12345",
    database: "livraria",
    host: "localhost",
    port: 3306
})

pool.connect()

module.exports = pool