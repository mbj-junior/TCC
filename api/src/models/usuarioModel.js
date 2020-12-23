module.exports = {
  getUsuarioById: function (connection, usuarioId, callback) {
    console.log(usuarioId);
    let sql = "select * from user where user_id = " + usuarioId;
    connection.query(sql, callback);
  },

  saveUsuario: function (connection, usuario, callback) {
    let sql = "insert into user set ?";

    connection.query(sql, usuario, callback);
  },

  changeUsuario: function (connection, usuario, callback) {
    let sql = "update user set ? where user_id = " + usuario.user_id;
    connection.query(sql, usuario, callback);
  },
};
