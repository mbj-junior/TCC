import React from "react";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";

import { useAsync } from "react-async";

function MuralPedidos() {
  const { data, error } = useAsync({ promiseFn: listarLinguagens });

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="subtitle1" component="h1" align="center">
        <p>Bem vindo ao ou </p>
      </Typography>
      <Typography variant="body1" component="h1" align="justify">
        <p>
          Bem vinda(o) ao OUMEAJUDA, um site com o objetivo de conectar as
          pessoas que precisam de uma ajudinha nos estudos, com aqueles que
          estão dispostos a ajudar.{" "}
        </p>

        <p>{data ? data.linguagens[0].languageName : ""}</p>

        {data &&
          data.linguagens.map((linguagem) => <p>{linguagem.languageName}</p>)}

          
      </Typography>
    </Container>
  );
}

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
