const usuarioModel = require("../models/usuarioModel");
const dbConnection = require("../config/dbConnection");

exports.usuarioListar = (req, res, next) => {
  let usuarioId = req.params.id;

  const connection = dbConnection();

  usuarioModel.getUsuarioById(connection, usuarioId, function (err, results) {
    if (!err) {

      if(results[0]){
        res.status(200).json({
          usuario: results[0],
          message: "Usuario criado.",
        });
      }
      else{
        res.status(200).json({
          code: "EMPTY",     
          usuario: null,  
          message: "Esse usuário não existe.",
        });
      }
      
    } else {
      res.status(404).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro ao criar o usuário.",
      });
    }
  });
};

exports.usuarioSalvar = (req, res, next) => {
  let usuario = {
    name: req.body.name,
    lastname: req.body.lastname,
    type: req.body.type,
    phone: req.body.phone,
  };

  const connection = dbConnection();

  usuarioModel.saveUsuario(connection, usuario, function (err, results) {
    if (!err) {
      res.status(201).json({
        code: "OK",
        usuario: { user_id: results.insertId },
        message: "Usuario criado.",
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro ao criar o usuário.",
      });
    }
  });
};