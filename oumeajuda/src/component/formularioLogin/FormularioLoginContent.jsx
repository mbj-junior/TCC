import { Container } from "@material-ui/core";
import { validarDigitos, validarSenha } from "../../models/cadastro";

import FormularioLogin from "./FormularioLogin";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";

function FormularioLoginContent() {
  return (
    <Container component="article" maxWidth="sm">
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
