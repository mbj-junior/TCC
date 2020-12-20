import React, { Component } from "react";
import { ReactComponent as DeleteSVG } from "../../../assets/img/delete.svg";
import { Grid } from "@material-ui/core";

class CardNota extends Component {
  apagar() {
    const indice = this.props.indice;
    this.props.apagarNota(indice);
  }

  render() {
    return (
      <Grid item xs={12}>
        <header>
          <h4>
            {this.props.categoria}{" "}
            <DeleteSVG onClick={this.apagar.bind(this)} />
          </h4>
          <h4>{this.props.titulo}</h4>
        </header>
        <p>{this.props.texto}</p>
        <p>{this.props.contato}</p>
      </Grid>
    );
  }
}

export default CardNota;
