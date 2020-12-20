import {
  Button,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { Component } from "react";

class FormularioPedido extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Linguagem";
    this.contato = "";
    this.state = { 
      categorias: [],
      error: null,
      linguagens: [] 
    };
    this._novasCategorias = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias);

    fetch("http://localhost:7000/linguagens")
      .then(res => res.json())
      .then(
        (result) => {
          
          this.setState({
            linguagens: result.linguagens
          });
          
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            error
          });
        }
      )
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
    const { linguagens } = this.state;

    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <Select label="Age"
          variant="outlined"
          margin="normal"
          fullWidth
          onChange={this._handlerMudancaCategoria.bind(this)}
        >

          {linguagens.map(linguagem => (
            <MenuItem value={linguagem.languageName}>{linguagem.languageName}</MenuItem>
          ))}
          

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
