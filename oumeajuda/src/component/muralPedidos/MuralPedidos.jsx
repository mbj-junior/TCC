import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";
import React, { Component } from "react";

import Pedido from "./Pedido";

class  MuralPedidos extends Component {
  // const { data, error } = useAsync({ promiseFn: listarLinguagens });

  constructor(){
    super();
    this.state = { 
      ajudasGeral: [],
      linguagens: new Map(),
      error: null
    };
  }
  
  componentDidMount() {

    fetch("http://localhost:7000/ajudas")
      .then(res => res.json())
      .then(
        (result) => {
          // console.log(result.ajudas)
          this.setState({
            ajudasGeral: result.ajudas
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
      
      fetch("http://localhost:7000/linguagens")
      .then(res => res.json())
      .then(
        (result) => {
          
          let myMap = new Map();
          
          result.linguagens.forEach(
            (linguagem) => myMap.set(linguagem.languageId, linguagem.languageName)
          )
          
          this.setState({
            linguagens: myMap
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
    const { ajudasGeral, linguagens } = this.state;
    
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="title" component="h1" align="center">
          <h3>Bem vindo ao OUMEAJUDA</h3>
        </Typography>
        <Typography variant="body1" component="h1" align="justify">
          <p>
            Bem vinda(o) ao OUMEAJUDA, um site com o objetivo de conectar as
            pessoas que precisam de uma ajudinha nos estudos, com aqueles que
            estão dispostos a ajudar.{" "}
          </p>   
        </Typography>
        <div>
        {ajudasGeral.map((nota, index) => {
            return (
              <Pedido ajuda={nota} linguagens={linguagens}></Pedido>
            );
          })}
        </div>
      </Container>
    );
  }
}

/*
allowPhoneNumber: true
description: "description"
id: 13
languageId: 1
professorId: null
title: "titulo"
userId: 1
*/


const listarLinguagens = async () => {
  return await fetch("http://localhost:7000/linguagens", {
    method: "get",
  })
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      return json;
    });
};

export default MuralPedidos;


