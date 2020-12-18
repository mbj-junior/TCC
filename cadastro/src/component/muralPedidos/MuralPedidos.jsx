import React from "react";
import "fontsource-roboto";
import { Container, Typography } from "@material-ui/core";
import api from "../../api";

function MuralPedidos({ linguagens }) {
  const getLinguagens = async () => {
    const response = await api.get("/linguagem", {
      headers: { "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
      "Content-Type": "application/json;charset=UTF-8"  },
    });
    return response.data;
  };

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Mural de Pedidos
      </Typography>

      <Typography variant="subtitle1" component="h1" align="center">
        Subititulo
      </Typography>
      <Typography variant="body1" component="h1" align="justify"></Typography>
      {/* {getLinguagens()} */}
    </Container>
  );
}

export default MuralPedidos;
