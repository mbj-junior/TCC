const ajudaModel = require("../models/ajudaModel");
const dbConnection = require("../config/dbConnection");
const {
  convertToAjuda,
  convertToAjudaDTO,
} = require("./converters/ajudaConverter");

exports.ajudasListar = (req, res, next) => {
  console.log("geral");
  const connection = dbConnection();

  ajudaModel.getAjudas(connection, function (err, results) {
    if (!err) {
      if (results) {
        res.status(200).json({
          code: "OK",
          ajudas: results,
          message: "Ajudas cadastradas.",
        });
      } else {
        res.status(404).json({
          code: "EMPTY",
          ajudas: null,
          message: "Não existem ajudas cadastradas.",
        });
      }
    } else {
      res.status(500).send({
        code: "ERROR",
        ajudas: null,
        message: "Ocorreu algum erro ao buscar as ajudas.",
      });
    }
  });
};

exports.ajudasUsuarioListar = (req, res, next) => {
  //TODO - falta saber buscar como query param
  let usuarioId = req.query.usuarioId;
  const connection = dbConnection();

  ajudaModel.getAjudasByUsuarioId(
    connection,
    usuarioId,
    function (err, results) {
      if (!err) {
        if (results) {
          res.status(200).json({
            code: "OK",
            ajudas: results,
            message: "Ajudas cadastradas para o usuário.",
          });
        } else {
          res.status(404).json({
            code: "EMPTY",
            ajudas: null,
            message: "Não existem ajudas cadastradas para o usuário.",
          });
        }
      } else {
        res.status(500).send({
          code: "ERROR",
          ajudas: null,
          message: "Ocorreu algum erro ao buscar as ajudas do o usuário.",
        });
      }
    }
  );
};

exports.ajudaListar = (req, res, next) => {
  let ajudaId = req.params.id;

  const connection = dbConnection();

  ajudaModel.getAjudaById(connection, ajudaId, function (err, results) {
    if (!err) {
      if (results) {
        console.log(results.isEmpty);
        res.status(200).json({
          code: "OK",
          ajudas: results,
          message: "Ajuda cadastrada.",
        });
      } else {
        res.status(404).json({
          code: "EMPTY",
          ajudas: null,
          message: "A ajuda buscadas não existe.",
        });
      }
    } else {
      res.status(500).send({
        code: "ERROR",
        ajudas: null,
        message: "Ocorreu algum erro ao buscar a ajuda.",
      });
    }
  });
};

exports.ajudaSalvar = (req, res, next) => {
  let ajuda = convertToAjuda(req.body);
  console.log(ajuda);
  const connection = dbConnection();

  ajudaModel.saveAjuda(connection, ajuda, function (err, results) {
    if (!err) {
      res.status(201).json({
        code: "OK",
        ajudas: { ajudaId: results.insertId },
        message: "Ajuda cadastrada.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        ajudas: null,
        message:
          "Ocorreu algum erro ao cadastrar a ajuda: [" + err.message + "].",
      });
    }
  });
};

exports.ajudaDeletar = (req, res, next) => {
  let ajudaId = req.params.id;

  const connection = dbConnection();

  ajudaModel.deleteAjuda(connection, ajudaId, function (err, results) {
    if (!err) {
      res.status(200).json({
        code: "OK",
        ajudas: null,
        message: "Ajuda deletada.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        ajudas: null,
        message: "Ocorreu algum erro ao deletar a ajuda.",
      });
    }
  });
};
