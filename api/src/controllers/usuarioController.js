const usuarioModel = require("../models/usuarioModel");

exports.usuarioListar = (req, res, next) => {
  let usuarioId = req.params.id;

//   const connection = dbConnection();

//   usuarioModel.getUsuarioById(connection, usuarioId, function (err, results) {
//       if (!err) {
//         res.status(200).json(results);
//       } else {
//         res.status(404).send("Esse usuario não existe!");
//       }
//     }
//   );

  res.status(200).json({ id: usuarioId, message: "Um usuário -- log provisório" }); //Comentar qdo for testar com banco
};

exports.usuarioSalvar = (req, res, next) => {
//   let usuario = req.body;
//   const connection = dbConnection();

//   usuarioModel.saveusuario(connection, usuario, function (err, results) {
//     if (!err) {
//       res.status(201).json(results);
//     } else {
//       res.status(500).send("Aconteceu algum erro ao criar o usuario!");
//     }
//   });

  res.status(200).json({ message: "Salvar  usuário -- log provisório" }); //Comentar qdo for testar com banco
};
