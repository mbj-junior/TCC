const express = require("express");
const app = express();
const index = require("./routes/index");
const ajudaRotas = require("./routes/ajudaRoutes");
const linguagemRotas = require("./routes/linguagemRoutes");
const loginRotas = require("./routes/loginRoutes");
const usuarioRotas = require("./routes/usuarioRoutes");

app.use("/", index);
app.use("/ajuda", ajudaRotas);
app.use("/linguagem", linguagemRotas);
app.use("/login", loginRotas);
app.use("/usuario", usuarioRotas);

module.exports = app;
