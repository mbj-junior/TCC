import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";

import ArrayDeNotas from "../../data/Notas";
import Categorias from "../../data/Categorias";
import FormularioPedido from "./FormularioPedido";
import ListaDeLinguagem from "./ListaDeLinguagem";
import ListaDeNotas from "./ListaDePedidos";

class HomeComponent extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    this.state = {linguagens: new Map()}
  }

  
  componentDidMount() {
    
      fetch("http://localhost:7000/linguagens")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.linguagens)
          let myMap = new Map();
          
          result.linguagens.forEach(
            (linguagem) => myMap.set(linguagem.languageId, linguagem.languageName)
          )

          console.log(result.linguagens)
          this.setState({
            linguagens: myMap
            // linguagens: result.linguagens
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


  render() {
    const { linguagens } = this.state;

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
