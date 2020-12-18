module.exports = {
  getLoginByUsuarioEmail: function (connection, callback) {
    let sql = "select * from login";
    connection.query(sql, callback);
  },

  saveLogin: function (connection, login, callback) {
    let sql = "insert into login set ?";
    connection.query(sql, login, callback);
  },
};
