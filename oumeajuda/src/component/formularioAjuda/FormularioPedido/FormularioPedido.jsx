import { Button, MenuItem, Select, TextField } from "@material-ui/core";
import React, { Component } from "react";

class FormularioPedido extends Component {
  constructor(props) {
    super(props);
    this.linguagens = [];
    this.linguagensMap = new Map();
    this.titulo = "";
    this.texto = "";
    this.linguagemId = "";
    this.contato = "";
    this.state = {
      categorias: [],
    };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this._novasCategorias);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handlerMudancaLinguagem(evento) {
    evento.stopPropagation();
    this.linguagemId = evento.target.value;
  }

  _handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaDescricao(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handlerMudancaContato(evento) {
    evento.stopPropagation();
    this.contato = evento.target.value;
  }

  _criarAjuda(evento) {
    evento.preventDefault();
    evento.stopPropagation();

    let ajudaBody = {
      title: this.titulo,
      description: this.texto,
      userId: 1,
      allowPhoneNumber: false,
      phoneNumber: this.contato,
      professorId: null,
      languageId: this.linguagemId,
    };

    postAjuda(ajudaBody).then((response) => {
      let ajudaCadastrada = response.ajudas;
      this.setState({ ...this.state, ajudaCadastrada });
      this.props.criarAjuda(
        ajudaCadastrada.title,
        ajudaCadastrada.description,
        this.linguagemId,
        this.contato,
        ajudaCadastrada.createdAt
      );
    });
  }

  render() {
    return (
      <form
        className="form-cadastro-ajuda"
        onSubmit={this._criarAjuda.bind(this)}
      >
        <Select
          id="ling"
          variant="outlined"
          margin="normal"
          placeholder="Selecione a linguagem"
          required="true"
          fullWidth
          onChange={this._handlerMudancaLinguagem.bind(this)}
        >
          <MenuItem value={1}>JAVA</MenuItem>
          <MenuItem value={2}>JAVA SCRIPT</MenuItem>
          <MenuItem value={3}>NODE JS</MenuItem>
          <MenuItem value={4}>KOTLIN</MenuItem>
        </Select>

        <TextField
          id="titulo"
          label="Título"
          type="text"
          required
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this._handlerMudancaTitulo.bind(this)}
        />

        <TextField
          id="description"
          label="Qual a sua dificuldade?"
          type="text"
          required
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={this._handlerMudancaDescricao.bind(this)}
        />

        <TextField
          id="contato"
          label="Contato?"
          type="text"
          required
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={this._handlerMudancaContato.bind(this)}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          OU ME AJUDA
        </Button>
      </form>
    );
  }
}

export default FormularioPedido;

const postAjuda = async (body) => {
  console.log(body);
  return await fetch("http://localhost:7000/ajudas", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      return json;
    });
};
