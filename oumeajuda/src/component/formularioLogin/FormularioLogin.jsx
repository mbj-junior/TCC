import DadosUsuarioLogin from "./DadosUsuarioLogin";
import UsuarioLogadoPage from "./UsuarioLogadoPage";
import { useCookies } from "react-cookie";
import { useState } from "react";

function FormularioLogin() {
  const [dadosColetados, setDados] = useState({});
  const [cookies] = useCookies(["token"]);

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
  }

  function validarCookies() {
    if (cookies.token === "undefined") {
      return false;
    }

    return true;
  }

  return (
    <>
      {validarCookies() && <UsuarioLogadoPage></UsuarioLogadoPage>}
      {!validarCookies() && <DadosUsuarioLogin aoEnviar={coletarDados} />}
    </>
  );
}

export default FormularioLogin;
