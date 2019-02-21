var pgPromise = require("pg-promise");
var pgInstance = pgPromise();

var config = {
  host: "localhost",
  port: 5432,
  database: "parking_db",
  user: 'hamadalshehri'
};

var connection = pgInstance(config);

module.exports = connection;