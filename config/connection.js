const mysql = require("mysql");
var connection;

// Sets up database connection for jawsdb or local database if env variable fails
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jesse2020!",
    database: "burgersdb",
  });
}

// Connects to database
connection.connect();

module.exports = connection;
