import React, { Component } from "react";
import ListaDeNotas from "./ListaDePedidos";
import FormularioPedido from "./FormularioPedido";
import ListaDeLinguagem from "./ListaDeLinguagem";
import ArrayDeNotas from "../../data/Notas";
import Categorias from "../../data/Categorias";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

class HomeComponent extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de pedido
        </Typography>

        <main className="conteudo-principal">
          <FormularioPedido
            categorias={this.categorias}
            criarNota={this.notas.adicionarNota.bind(this.notas)}
          />
          <ListaDeLinguagem
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </Container>
    );
  }
}

export default HomeComponent;
