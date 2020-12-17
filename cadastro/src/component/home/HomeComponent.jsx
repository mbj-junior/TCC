import React, { Component } from "react";
import ListaDeNotas from "./ListaDePedidos";
import FormularioCadastro from "./FormularioPedido";
import ListaDeCategorias from "./ListaDeLinguagem";
import "../../assets/index.css";
import "../../assets/App.css";
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
          Formulário de cadastro
        </Typography>

        <main className="conteudo-principal">
          <FormularioCadastro
            categorias={this.categorias}
            criarNota={this.notas.adicionarNota.bind(this.notas)}
          />
          <ListaDeCategorias
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
