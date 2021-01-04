const linguagemModel = require("../models/linguagemModel");
const dbConnection = require("../config/dbConnection");
const {
  converterToLinguagem,
  convertToLinguagemDTO,
} = require("./converters/linguagemConverter");

exports.linguagensListar = (req, res, next) => {
  const connection = dbConnection();

  linguagemModel.getLinguagens(connection, function (err, results) {
    if (!err) {
      if (results[0]) {
        res.status(200).json({
          code: "OK",
          linguagens: results.map((element) => {
            return convertToLinguagemDTO(element);
          }),
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
        message:
          "Ocorreu algum erro ao buscar as linguagens: [" + err.message + "].",
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
            linguagens: convertToLinguagemDTO(results[0]),
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
          message:
            "Ocorreu algum erro ao buscar a linguagem: [" + err.message + "].",
        });
      }
    }
  );
};

exports.linguagemSalvar = (req, res, next) => {
  let linguagem = converterToLinguagem(req.body);

  const connection = dbConnection();

  linguagemModel.saveLinguagem(connection, linguagem, function (err, results) {
    if (!err) {
      res.status(201).json({
        code: "OK",
        linguagens: convertToLinguagemDTO({ language_id: results.insertId }),
        message: "Linguagem criada.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        linguagens: null,
        message:
          "Ocorreu algum erro ao salvar a linguagem: [" + err.message + "].",
      });
    }
  });
};
