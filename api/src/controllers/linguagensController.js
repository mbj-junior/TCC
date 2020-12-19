const linguagemModel = require("../models/linguagemModel");
const dbConnection = require("../config/dbConnection");

exports.linguagensListar = (req, res, next) => {
  console.log("marcio acessou");

  const connection = dbConnection();

  linguagemModel.getLinguagens(connection, function (err, results) {
    if (!err) {
      if (results) {
        res.status(200).json({
          code: "OK",
          linguagens: results,
          message: "Linguagens cadastradas.",
        });
      } else {
        res.status(404).json({
          code: "EMPTY",
          linguagens: null,
          message: "Não existem linguagens cadastradas.",
        });
      }
    } else {
      res.status(500).send({
        code: "ERROR",
        linguagens: null,
        message: "Ocorreu algum erro ao buscar as linguagens.",
      });
    }
  });
};

exports.linguagemListar = (req, res, next) => {
  let linguagemId = req.params.id;

  const connection = dbConnection();

  linguagemModel.getLinguagemById(
    connection,
    linguagemId,
    function (err, results) {
      if (!err) {
        if (results[0]) {
          res.status(200).json({
            code: "OK",
            linguagens: results[0],
            message: "Linguagem buscada.",
          });
        } else {
          res.status(404).json({
            code: "EMPTY",
            linguagens: null,
            message: "A linguagem buscada não existe.",
          });
        }
      } else {
        res.status(500).send({
          code: "ERROR",
          linguagens: null,
          message: "Ocorreu algum erro ao buscar a linguagem.",
        });
      }
    }
  );
};

exports.linguagemSalvar = (req, res, next) => {
  let linguagem = {
    language_name: req.body.language_name,
  };

  const connection = dbConnection();

  linguagemModel.saveLinguagem(connection, linguagem, function (err, results) {
    if (!err) {
      res.status(201).json({
        code: "OK",
        linguagens: { user_id: results.insertId },
        message: "Linguagem criada.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        linguagens: null,
        message: "Ocorreu algum erro ao salvar a linguagem.",
      });
    }
  });
};
