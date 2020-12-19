import React, { Component } from "react";
import {  TextField } from "@material-ui/core";

class ListaDeLinguagem extends Component {
  constructor() {
    super();
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

  _handleEventoInput(evento) {
    if (evento.key === "Enter") {
      let valorCategoria = evento.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return (
              <li key={index} className="lista-categorias_item">
                {categoria}
              </li>
            );
          })}
        </ul>

         {/* <TextField
          id="titulo"
          variant="outlined"
          fullWidth
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Linguagem"
          onKeyUp={this._handleEventoInput.bind(this)}
        /> */}
      </section>
    );
  }
}

export default ListaDeLinguagem;
