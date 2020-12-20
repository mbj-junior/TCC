const express = require("express");
const app = express();
const index = require("./routes/index");
const ajudaRotas = require("./routes/ajudaRoutes");
const linguagemRotas = require("./routes/linguagemRoutes");
const loginRotas = require("./routes/loginRoutes");
const usuarioRotas = require("./routes/usuarioRoutes");
const cors = require("cors");
const bodyParser = require('body-parser')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use(cors());
app.use((req, res, next) => {
    console.log("app acessou aqui");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.use(cors());
    next();
});

app.use("/", index);
app.use("/ajudas", ajudaRotas);
app.use("/linguagens", linguagemRotas);
app.use("/login", loginRotas);
app.use("/usuarios", usuarioRotas);

module.exports = app;
