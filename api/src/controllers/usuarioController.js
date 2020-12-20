const usuarioModel = require("../models/usuarioModel");
const dbConnection = require("../config/dbConnection");
const {
  convertToUsuario,
  convertToUsuarioDTO
} = require("./converters/usuarioConverter");

exports.usuarioListar = (req, res, next) => {
  let usuarioId = req.params.id;

  const connection = dbConnection();

  usuarioModel.getUsuarioById(connection, usuarioId, function (err, results) {
    if (!err) {
      if (results[0]) {
        res.status(200).json({
          usuario: convertToUsuarioDTO(results[0]),
          message: "Usuario buscado.",
        });
      } else {
        res.status(404).json({
          code: "EMPTY",
          usuario: null,
          message: "Esse usuário não existe.",
        });
      }
    } else {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro ao buscar o usuário: ["+ err.message +"].",
      });
    }
  });
};

exports.usuarioSalvar = (req, res, next) => {
  let usuario = convertToUsuario(req.body);

  const connection = dbConnection();

  usuarioModel.saveUsuario(connection, usuario, function (err, results) {
    if (!err) {
      res.status(201).json({
        code: "OK",
        usuario: convertToUsuarioDTO({ user_id: results.insertId }),
        message: "Usuario criado.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro ao criar o usuário: ["+ err.message +"].",
      });
    }
  });
};

exports.usuarioAlterar = (req, res, next) => {
  let usuarioIncompleto = req.body;
  let usuario = convertToUsuario( {...usuarioIncompleto, ...{id : req.params.id}  });

  const connection = dbConnection();

  usuarioModel.changeUsuario(connection, usuario, function (err, results) {
    if (!err) {
      if(results.affectedRows){
        res.status(201).json({
          code: "OK",
          message: "Usuario alterado.",
        });
      }else{
        res.status(404).json({
          code: "WARNING",
          message: "Não existe nenhum usuário cadastrado com esse id.",
        });
      }  
    } else {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro ao criar o usuário: ["+ err.message +"].",
      });
    }
  });
};