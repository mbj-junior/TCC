import { Step, StepLabel, Stepper } from "@material-ui/core";
import { useEffect, useState } from "react";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import Confirmacao from "./Confirmacao";

function FormularioCadastro() {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      coletarDados(dadosColetados);
    }
  });

  function coletarDados(dados) {
    setDados({ ...dadosColetados, ...dados });
    proximo();
  }

  function getDados() {
    return dadosColetados;
  }

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} getDados={getDados} />,
    <Confirmacao />,
  ];

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmação</StepLabel>
        </Step>
      </Stepper>

      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
