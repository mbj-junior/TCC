let mysql = require("mysql");

module.exports = function () {
  return (connection = mysql.createConnection({
    host: "localhost",
    user: "oumeajuda",
    password: "oumeajuda",
    database: "oumeajuda_db",
  }));
};
