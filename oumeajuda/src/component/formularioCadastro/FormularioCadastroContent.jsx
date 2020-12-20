import "fontsource-roboto";

import { Container, Typography } from "@material-ui/core";
import {
  validarCelular,
  validarDigitos,
  validarSenha,
} from "../../models/cadastro";

// import "../../App.css";
import FormularioCadastro from "./FormularioCadastro";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function FormularioCadastroContent() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h4" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          celular: validarCelular,
          senha: validarSenha,
          nome: validarDigitos,
          sobrenome: validarDigitos,
        }}
      >
        <FormularioCadastro />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default FormularioCadastroContent;
