// get the client
const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const db2 = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'MsAranhos',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db2;