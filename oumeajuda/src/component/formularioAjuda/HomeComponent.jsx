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
    this.linguagens = new Linguagens();
    this.linguagensProp = this.linguagens.getLinguagens.bind(this.linguagens)();
    this.linguagensMapProp = this.linguagens.getLinguagensMap.bind(
      this.linguagens
    )();
    this.state = {
      token: "",
    };
  }

  componentWillMount() {
    this.setState({
      token: this.props.cookies.token,
    });
  }

  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h4" component="h1" align="center">
          Formulário de pedido
        </Typography>

        <main className="conteudo-principal">
          <FormularioPedido
            cookies={this.props.cookies}
            categorias={this.categorias}
            criarAjuda={this.ajudas.adicionarNota.bind(this.ajudas)}
            linguagens={this.linguagensProp}
            linguagensMap={this.linguagensMapProp}
          />

          <ListaDeNotas
            apagarNota={this.ajudas.apagarNotas.bind(this.ajudas)}
            notas={this.ajudas}
            linguagens={this.linguagensProp}
            linguagensMap={this.linguagensMapProp}
          />
        </main>
        {this.token && <p>{this.token}</p>}
      </Container>
    );
  }
}

export default HomeComponent;
