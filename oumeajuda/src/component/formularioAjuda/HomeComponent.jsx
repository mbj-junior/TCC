import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";

import ArrayDeAjudas from "../../data/Ajuda";
import Categorias from "../../data/Categorias";
import FormularioPedido from "./FormularioPedido";
import Linguagens from "../../data/Linguagens";
import ListaDeNotas from "./ListaDePedidos";

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.categorias = new Categorias();
    this.ajudas = new ArrayDeAjudas();
    this.linguagens = new Linguagens()
    this.linguagensProp = this.linguagens.getLinguagens.bind(this.linguagens)();
    this.linguagensMapProp = this.linguagens.getLinguagensMap.bind(this.linguagens)();    
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
            criarAjuda={this.ajudas.adicionarNota.bind(this.ajudas)}
            linguagens={this.linguagensProp}
            linguagensMap={this.linguagensMapProp}
          />
          {/* <ListaDeLinguagem
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          /> */}
          
          <ListaDeNotas
            apagarNota={this.ajudas.apagarNotas.bind(this.ajudas)}
            notas={this.ajudas}
            linguagens={this.linguagensProp}
            linguagensMap={this.linguagensMapProp}
          />
        </main>
      </Container>
    );
  }
}

export default HomeComponent;
