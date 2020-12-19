import React, { Component } from "react";
// import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../../assets/img/delete.svg";
import { Grid } from "@material-ui/core";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <header>
          <h4>
            {this.props.categoria}{" "}
            <DeleteSVG onClick={this.apagar.bind(this)} />
          </h4>
          <h4 className="card-nota_titulo">{this.props.titulo}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </Grid>
      </Grid>
    );
  }
}

export default CardNota;
