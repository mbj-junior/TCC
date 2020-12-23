import "./estilo.css";

import { Grid, List } from "@material-ui/core";
import React, { Component } from "react";

import Pedido from "../../muralPedidos/Pedido";

class ListaDeNotas extends Component {
  constructor(props) {
    super(props);
    this.state = { notas: [] };
    this._novasNotas = this._novasNotas.bind(this);
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas);
  }

  componentWillUnmount() {
    this.props.notas.desinscrever(this._novasNotas);
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas });
  }

  render() {
    console.log(this.props)
    let index = 0;
    return (
      <Grid className="lista-pedidos">
        <List className="lista-pedidos_item" key={index}>
          {this.state.notas.map((nota, index) => {
            index++;
            return (
              <Pedido ajuda={nota} linguagensMap={this.props.linguagensMap}></Pedido>
            )
          })}
            </List>
      </Grid> 
    );
  }
}

export default ListaDeNotas;

/*
  <Pedido ajuda={nota} linguagens={linguagens}></Pedido> 
  <CardPedido
    indice={index}
    apagarNota={this.props.apagarNota}
    titulo={nota.titulo}
    ListItemText texto={nota.texto}
    categoria={nota.categoria}
    contato={nota.contato}>
  </CardPedido>

*/


