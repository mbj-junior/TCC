import React, { Component } from "react";
import {
  Button,
  Select,
  TextField,
  MenuItem,
} from "@material-ui/core";


class FormularioPedido extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Linguagem";
    this.contato = "";
    this.state = { categorias: [] };
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

  _handlerMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
  }

  _handlerMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handlerMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _handlerMudancaContato(evento) {
    evento.stopPropagation();
    this.contato = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria, this.contato);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <Select label="Age"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this._handlerMudancaCategoria.bind(this)}
        >
          <MenuItem value={"Java"}>Java</MenuItem>
          <MenuItem value={"React"}>React</MenuItem>

          {this.state.categorias.map((categoria, index) => {
            return (
              <MenuItem value={categoria} key={index}>
                {" "}
                {categoria}{" "}
              </MenuItem>
            );
          })}
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
          id="body"
          label="Qual a sua dificuldade?"
          type="text"
          required
          fullWidth
          variant="outlined"
          margin="normal"
          onChange={this._handlerMudancaTexto.bind(this)}
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
