import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Pedido from "./Pedido";

class MuralPedidos extends Component {
  constructor() {
    super();
    this.state = {
      ajudasGeral: [],
      linguagens: new Map(),
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:7000/ajudas")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            ajudasGeral: result.ajudas,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );

    fetch("http://localhost:7000/linguagens")
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          let myMap = new Map();

          result.linguagens.forEach((linguagem) =>
            myMap.set(linguagem.languageId, linguagem.languageName)
          );

          this.setState({
            linguagens: myMap,
          });
        },
        (error) => {
          this.setState({
            error,
          });
        }
      );
  }

  render() {
    const { ajudasGeral, linguagens } = this.state;

    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="title" align="center">
          <h3>OU ME AJUDA</h3>
        </Typography>
        <Typography variant="h6" align="center">
          <p>Quem precisa de ajuda agora:</p>
        </Typography>
        <div>
          {ajudasGeral.map((nota, index) => {
            return <Pedido ajuda={nota} linguagensMap={linguagens}></Pedido>;
          })}
        </div>
        <Typography variant="subtitle1" align="justify">
          <h3>O que somos</h3>
          <p>
            Temos como objetivo, conectar as pessoas que precisam de uma
            ajudinha nos estudos de programação, com monitores que estão
            dispostos a ajudar.{" "}
          </p>
        </Typography>
      </Container>
    );
  }
}

export default MuralPedidos;
