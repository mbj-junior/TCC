module.exports = {
  // Note: Não faz sentido listar todos os usuários
  // getUsuarios: function (connection, callback) {
  //   let sql = "select * from user";
  //   connection.query(sql, callback);
  // },

  getUsuarioById: function (connection, usuarioId, callback) {
    let sql = "select * from user where user_id = " + usuarioId;
    connection.query(sql, callback);
  },

  saveUsuario: function (connection, usuario, callback) {

    let sql = "insert into user set ?"

    connection.query(sql, usuario, callback);
  },

  // Note: Não será implementado
  // changeUsuario: function (connection, usuario, callback) {
  //   let sql = "update user set ? where user_id = " + usuario.usuarioId;
  //   connection.query(sql, usuario, callback);
  // },


  // Note: Não será implementado
  // deleteUsuario: function (connection, usuarioId, callback) {
  //   let sql = "delete from user where user_id = " + usuarioId;
  //   connection.query(sql, callback);
  // },
};
