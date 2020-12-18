module.exports = {
  getAjudas: function (connection, callback) {
    let sql = "select * from help";
    connection.query(sql, callback);
  },

  getAjudaById: function (connection, ajudaId, callback) {
    let sql = "select * from help where help_id = " + ajudaId;
    connection.query(sql, callback);
  },

  getAjudasByUsuarioId: function (connection, usuarioId, callback) {
    let sql =
      "select * from help h " +
      "inner join user u on u.user_id = h.user_id " +
      "where h.user_id = " +
      usuarioId;
    connection.query(sql, callback);
  },

  saveAjuda: function (connection, ajuda, callback) {
    let sql = "insert into help set ?";
    connection.query(sql, ajuda, callback);
  },

  deleteAjuda: function (connection, ajudaId, callback) {
    let sql = "delete from help where help_id = " + ajudaId;
    connection.query(sql, callback);
  },
};
