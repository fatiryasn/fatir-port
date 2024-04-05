const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "sql6.freesqldatabase.com",
    user: "sql6696986",
    database: "sql6696986",
    password: "XNZHFLMFjx"
})

module.exports = db