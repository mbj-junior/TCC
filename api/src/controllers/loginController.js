// const loginModel = require("../models/loginModel");

exports.getLogin = (req, res, next) => {
  //   let login = req.body; //{ email: "", psw: ""}

  //   const connection = dbConnection();

  //   loginModel.getLoginByUsuarioEmail(connection, login.email, function (err, results) {
  //       if (!err) {
  //         //TODO descriptografar
  //         //comparar com o valor salvo no banco
  //             //se for igual retornar
  //             res.status(200).json({message: 'Logado com sucesso'});

  //             //se não for igual
  //             res.status(200).json({message: 'Usuário ou senha incorretos'});

  //       } else {
  //         res.status(500).send("Aconteceu algum erro");
  //       }
  //     }
  //   );

  res.status(200).json({ message: "Login -- log provisório" }); //Comentar qdo for testar com banco
};

exports.postLogin = (req, res, next) => {
  //   let login = req.body; //{ email: "", psw: ""}

  //   const connection = dbConnection();

  //   loginModel.saveLogin(connection, login, function (err, results) {
  //       if (!err) {
  //         //TODO descriptografar
  //         //comparar com o valor salvo no banco
  //             //se for igual retornar
  //             res.status(200).json({message: 'Logado com sucesso'});

  //             //se não for igual
  //             res.status(200).json({message: 'Usuário ou senha incorretos'});

  //       } else {
  //         res.status(500).send("Aconteceu algum erro");
  //       }
  //     }
  //   );
  
  res.status(200).json({ message: "Salvar Login -- log provisório" }); //Comentar qdo for testar com banco
};
