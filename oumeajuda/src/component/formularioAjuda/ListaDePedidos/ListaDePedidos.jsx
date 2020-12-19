import React, { Component } from "react";
import CardPedido from "../CardPedido";
import "./estilo.css";
import { Grid, List, ListItemText } from "@material-ui/core";


class ListaDeNotas extends Component {
  constructor() {
    super();
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
    return (
      <Grid className="lista-pedidos">

        {this.state.notas.map((nota, index) => {
          return (
            <List className="lista-pedidos_item" key={index}>
              <CardPedido
                indice={index}
                apagarNota={this.props.apagarNota}
                titulo={nota.titulo}
                ListItemText texto={nota.texto}
                categoria={nota.categoria}
                contato={nota.contato}
              />
            </List>
          );
        })}
      </Grid> 
    );
  }
}

export default ListaDeNotas;
