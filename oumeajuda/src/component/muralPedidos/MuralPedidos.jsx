import React from "react";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";

import { useAsync } from 'react-async';


function MuralPedidos() {
  
  const { data, error } = useAsync({ promiseFn: listarLinguagens()})
  // let nome = data.linguagens
  // console.log(nome[0].language_name)

  // console.log(listarLinguagens())


  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Mural de Pedidos
      </Typography>

      <Typography variant="subtitle1" component="h1" align="center">
        Subititulo
      </Typography>
      <Typography variant="body1" component="h1" align="justify">
        {/* {nome[0].language_name} */}
      </Typography>
    </Container>
  );
}

const listarLinguagens = async () => {
  return await fetch("http://localhost:7000/linguagens", {
    method: "get"
  })
    .then(resp => {
      return resp.json();
    })
    .then(json => {
      return json;
    });
};


export default MuralPedidos;
