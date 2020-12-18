const linguagemModel = require("../models/linguagemModel");
const dbConnection = require("../config/dbConnection")

exports.linguagensListar = (req, res, next) => {
  const connection = dbConnection();

  linguagemModel.getLinguagens(connection, function (err, results) {
    if (!err) {
      console.log(results)
      res.status(200).json(results);
    } else {
      console.log(err)
      res.status(404).send("Linguagens não cadastradas!");
    }
  });

  // res.status(200).json({ message: "linguagens" }); //Comentar qdo for testar com banco
};

exports.linguagemListar = (req, res, next) => {
  let linguagemId = req.params.id;

  const connection = dbConnection();

  linguagemModel.getLinguagemById(
    connection,
    linguagemId,
    function (err, results) {
      if (!err) {
        res.status(200).json(results);
      } else {
        res.status(404).send("Essa linguagem não existe!");
      }
    }
  );

  // res.status(200).json({ id: linguagemId, message: " 1 linguagem" }); //Comentar qdo for testar com banco
};

exports.linguagemSalvar = (req, res, next) => {
  let linguagem = req.body;
  const connection = dbConnection();

  linguagemModel.saveLinguagem(connection, linguagem, function (err, results) {
    if (!err) {
      res.status(201).json(results);
    } else {
      res.status(500).send("Aconteceu algum erro ao criar a linguagem!");
    }
  });

  // res.status(200).json({ message: "linguagem criada -- log provisório" }); //Comentar qdo for testar com banco
};
