// get the client
require('dotenv').config()
var mysql = require('mysql');
var db1  = mysql.createPool({
  connectionLimit : 10,
  host: process.env.DB1_HOST,
  user: process.env.DB1_USER,
  password: process.env.DB1_PASS,
  database: process.env.DB1_NAME,
  port: process.env.DB1_PORT  
});


module.exports = db1;