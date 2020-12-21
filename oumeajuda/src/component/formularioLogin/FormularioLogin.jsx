import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";

import DadosUsuarioLogin from "./DadosUsuarioLogin";
import { useCookies } from "react-cookie";

function FormularioLogin({ aoEnviar, validacoes }) {
  const [dadosColetados, setDados] = useState({});
  const [cookies, setCookie] = useCookies(["token"]);
  
  // useEffect(() => {
  //   if (etapaAtual === formularios.length - 1) {
  //     aoEnviar(dadosColetados);
  //   }
  // });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
  }

  return (
      <DadosUsuarioLogin aoEnviar={coletarDados} />
  );
}

export default FormularioLogin;
