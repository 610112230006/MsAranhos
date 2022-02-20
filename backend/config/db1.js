// get the client
const mysql = require('mysql2');
require('dotenv').config()

// Create the connection pool. The pool-specific settings are the defaults
const db1 = mysql.createPool({
  host: process.env.DB1_HOST,
  user: process.env.DB1_USER,
  password: process.env.DB1_PASS,
  database: process.env.DB1_NAME,
  port: process.env.DB1_PORT,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});


module.exports = db1;