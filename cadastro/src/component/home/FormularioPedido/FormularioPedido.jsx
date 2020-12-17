import React, { Component } from "react";
import {
  Button,
  Select,
  TextareaAutosize,
  TextField,
  MenuItem,
} from "@material-ui/core";
import "./estilo.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Linguagem";
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

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <Select
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this._handlerMudancaCategoria.bind(this)}
        >
          <MenuItem value={"Linguagem Não informada"}>linguagem</MenuItem>

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
          onChange={this._handlerMudancaTitulo.bind(this)}
        />

        <TextareaAutosize
          rowsMax={10}
          rowsMin="3"
          placeholder="Qual a sua dificuldade?"
          required
          variant="outlined"
          margin="normal"
          onChange={this._handlerMudancaTexto.bind(this)}
        />

        <Button type="submit" variant="contained" color="secondary" fullWidth>
          OU ME AJUDA
        </Button>
      </form>
    );
  }
}

export default FormularioCadastro;
