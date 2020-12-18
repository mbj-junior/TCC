import React from "react";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import { useAsync } from 'react-async';



  const usuarioResponse = () =>
  fetch("http://10.0.0.5:7000/usuario/2")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function MuralPedidos() {
  
  const { data, error } = useAsync({ promiseFn: usuarioResponse})
  // let nome = data.usuario.name
  // console.log(nome)


  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Mural de Pedidos
      </Typography>

      <Typography variant="subtitle1" component="h1" align="center">
        Subititulo
      </Typography>
      <Typography variant="body1" component="h1" align="justify">
      </Typography>
    </Container>
  );
}

const listarClientes = async () => {
  return await fetch("http://10.0.0.5:7000/usuario/1", {
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
