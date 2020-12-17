import "../../App.css";
import FormularioCadastro from "./FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import {
  validarCelular,
  validarSenha,
  validarDigitos,
} from "../../models/cadastro";
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
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default FormularioCadastroContent;
