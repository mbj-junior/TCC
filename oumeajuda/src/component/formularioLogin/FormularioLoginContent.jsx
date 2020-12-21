import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";
import {
  validarCelular,
  validarDigitos,
  validarSenha,
} from "../../models/cadastro";

// import "../../App.css";
import FormularioLogin from "./FormularioLogin";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function FormularioLoginContent() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Acesse sua conta
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          senha: validarSenha,
          nome: validarDigitos,
        }}
      >
        <FormularioLogin />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default FormularioLoginContent;
