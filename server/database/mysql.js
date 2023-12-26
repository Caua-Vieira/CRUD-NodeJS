const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'C@ca12345',
    database: 'Livraria',
    port: 3306
  })

module.exports = connection