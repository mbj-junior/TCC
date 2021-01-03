module.exports = {
  getLoginByUsuarioEmail: function (connection, email, callback) {
    let sql = "select * from login where email = \""+ email+ "\"";

    connection.query(sql, callback);
  },

  saveLogin: function (connection, login, callback) {
    let sql = "insert into login set ?";
    connection.query(sql, login, callback);
  },
};
