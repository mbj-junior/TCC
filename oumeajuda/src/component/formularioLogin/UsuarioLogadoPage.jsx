import { Button, Typography } from "@material-ui/core";

import React from "react";
import { useCookies } from "react-cookie";

export default function UsuarioLogadoPage() {
  const [, removeCookie] = useCookies(["token"]);

  function handleRemoveCookie() {
    removeCookie("token");
  }

  return (
    <>
      <br></br>
      <Typography variant="h4" align="center">
        Seja bem vinda(o).
      </Typography>
      <Typography variant="h5" align="center">
        Você já está Conectada(o).
      </Typography>
      <br></br>
      <br></br>
      <br></br>
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleRemoveCookie}
        fullWidth
      >
        SAIR
      </Button>
    </>
  );
}
