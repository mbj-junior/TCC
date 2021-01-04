const loginModel = require("../models/loginModel");
const usuarioModel = require("../models/usuarioModel");
const { convertToUsuarioDTO } = require("./converters/usuarioConverter");
const { convertToLogin } = require("./converters/loginConverter");
const dbConnection = require("../config/dbConnection");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.getLogin = (req, res, next) => {
  const { email, senha: psw } = req.body;

  const connection = dbConnection();

  loginModel.getLoginByUsuarioEmail(connection, email, function (err, results) {
    if (err) {
      res.status(500).send({
        code: "ERROR",
        usuario: null,
        message: "Ocorreu algum erro realizar o login: [" + err.message + "].",
      });
    } else {
      if (!results[0]) {
        return res.status(401).send({
          code: "ERROR",
          usuario: null,
          message: "Email ou senha incorretos.",
        });
      }
      isCorrectPassword(psw, results[0].psw, function (err, same) {
        if (err) {
          return res.status(500).send({
            code: "ERROR",
            usuario: null,
            message:
              "Ocorreu algum erro realizar o login: [" + err.message + "].",
          });
        } else if (!same) {
          return res.status(401).send({
            code: "ERROR",
            usuario: null,
            message: "Email ou senha incorretos.",
          });
        }

        const payload = { email };
        const token = jwt.sign(payload, "secret", {
          expiresIn: "1h",
        });

        return res.status(200).send({
          code: "OK",
          token: token,
          message: "Logado com sucesso.",
        });
      });
    }
  });
};

exports.postLogin = (req, res, next) => {
  let login = req.body;

  const connection = dbConnection();

  let usuario = {
    name: "new",
    lastname: "new",
    type: "n",
    phone: 11111111111,
  };

  usuarioModel.saveUsuario(connection, usuario, function (err, results) {
    if (!err) {
      let id = results.insertId;

      hashingPassword(login.senha, function (hashedPassword) {
        if (!hashedPassword) {
          res.status(500).send({
            code: "ERROR",
            usuario: null,
            message:
              "Ocorreu algum erro ao buscar o usuário: [" + err2.message + "].",
          });
        }

        newLogin = convertToLogin({
          email: login.email,
          senha: hashedPassword,
          userId: id,
        });

        loginModel.saveLogin(connection, newLogin, function (err, results) {
          if (!err) {
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
                "Ocorreu algum erro ao buscar o usuário: [" +
                err.message +
                "].",
            });
          }
        });
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

isCorrectPassword = function (password, passwordSaved, callback) {
  bcrypt.compare(password, passwordSaved, function (err, same) {
    if (err) {
      callback(err);
    }
    callback(err, same);
  });
};

hashingPassword = function (psw, next) {
  const saltRounds = 10;

  bcrypt.hash(psw, saltRounds).then(function (hash) {
    if (!hash) {
      next();
    }
    next(hash);
  });
};
