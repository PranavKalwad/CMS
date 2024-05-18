const mysql2 = require('mysql2')

require('dotenv').config()

const pool = mysql2.createPool({
  connectionLimit: 10,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
})

module.exports = pool
