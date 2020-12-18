module.exports = {
  getLinguagens: function (connection, callback) {
    let sql = "select * from language";
    connection.query(sql, callback);
  },

  getLinguagemById: function (connection, languageId, callback) {
    let sql = "select * from language where language_id = " + languageId;
    connection.query(sql, callback);
  },

  saveLinguagem: function (connection, linguagem, callback) {
    let sql = "insert into language set ?";
    connection.query(sql, linguagem, callback);
  },
};
