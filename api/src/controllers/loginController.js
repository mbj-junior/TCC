const loginModel = require("../models/loginModel");
const usuarioModel = require("../models/usuarioModel");
const { convertToUsuarioDTO } = require("./converters/usuarioConverter");
const { convertToLogin } = require("./converters/loginConverter");
const dbConnection = require("../config/dbConnection");

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
  let login = req.body;

  const connection = dbConnection();

  //criar um novo usuário vazio
  let usuario = {
    name: "new",
    lastname: "new",
    type: "n",
    phone: 11111111111,
  };

  usuarioModel.saveUsuario(connection, usuario, function (err, results) {

    if (!err) {
      let id = results.insertId;
      login = convertToLogin({ ...login, ...{ userId: id } });
      console.log(login)
      loginModel.saveLogin(connection, login, function (err, results) {
        if (!err) {
          //TODO descriptografar login.psw
          res.status(200).json({
            code: "OK",
            usuario: convertToUsuarioDTO({ user_id: id }),
            message: "Logado criado sucesso.",
          });
        } else {
          res.status(500).send({
            code: "ERROR",
            usuario: null,
            message:
              "Ocorreu algum erro ao buscar o usuário: [" + err.message + "].",
          });
        }
      });
    } else {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message:
          "Ocorreu algum erro ao criar o usuário: [" + err.message + "].",
      });
    }
  });
};