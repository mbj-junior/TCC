const ajudaModel = require("../models/ajudaModel");

exports.ajudasListar = (req, res, next) => {
  // const connection = dbConnection();

  // ajudaModel.getajudas(connection, function (err, results) {
  //   if (!err) {
  //     res.status(200).json(results);
  //   } else {
  //     res.status(404).send("ajudas não cadastradas!");
  //   }
  // });

  res.status(200).json({ message: "Ajudas -- log provisório" }); //Comentar qdo for testar com banco
};

exports.ajudasUsuarioListar = (req, res, next) => {
  let usuarioId = req.query.usuarioId;
  // let usuarioId = req.params.usuarioId;
  // const connection = dbConnection();

  // ajudaModel.getAjudasByUsuarioId(connection, usuarioId, function (err, results) {
  //   if (!err) {
  //     res.status(200).json(results);
  //   } else {
  //     res.status(404).send("ajudas não cadastradas!");
  //   }
  // });

  res
    .status(200)
    .json({
      message: "Ajudas do usuário -- log provisório",
      usuarioId: usuarioId,
    }); //Comentar qdo for testar com banco
};

exports.ajudaListar = (req, res, next) => {
  let ajudaId = req.params.id;

  // const connection = dbConnection();

  // ajudaModel.getAjudaById( connection, ajudaId, function (err, results) {
  //     if (!err) {
  //       res.status(200).json(results);
  //     } else {
  //       res.status(404).send("Essa ajuda não existe!");
  //     }
  //   }
  // );

  res.status(200).json({ id: ajudaId, message: "Uma ajuda -- log provisório" }); //Comentar qdo for testar com banco
};

exports.ajudaSalvar = (req, res, next) => {
  // let ajuda = req.body;
  // const connection = dbConnection();

  // ajudaModel.saveAjuda(connection, ajuda, function (err, results) {
  //   if (!err) {
  //     res.status(201).json(results);
  //   } else {
  //     res.status(500).send("Aconteceu algum erro ao criar a ajuda!");
  //   }
  // });

  res.status(200).json({ message: "Ajuda criada -- log provisório" }); //Comentar qdo for testar com banco
};

exports.ajudaDeletar = (req, res, next) => {
  let ajudaId = req.params.id;
  // const connection = dbConnection();

  // ajudaModel.deleteAjuda(connection, ajudaId, function (err, results) {
  //   if (!err) {
  //     res.status(201).json(results);
  //   } else {
  //     res.status(500).send("Aconteceu algum erro ao deletar a ajuda!");
  //   }
  // });

  res
    .status(200)
    .json({ message: "Ajuda deletada -- log provisório", id: ajudaId }); //Comentar qdo for testar com banco
};
