import "./App.css";
import FormularioCadastro from "./component/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import { validarCPF, validarSenha, validarDigitos } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import Menu from "./component/menu"

function App() {
  return (

    <Container component="article" maxWidth="sm">
      <Menu></Menu>
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <ValidacoesCadastro.Provider
        value={{
          cpf: validarCPF,
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

export default App;
