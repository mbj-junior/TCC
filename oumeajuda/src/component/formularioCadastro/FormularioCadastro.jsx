import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validacoes }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  
  useEffect(() => {
    if (etapaAtual === formularios.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>,
  ];

  function coletarDados(dados) {

    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados)
    proximo();
  }

  function proximo(dados) {
    setEtapaAtual(etapaAtual + 1);
  }

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
          <StepLabel>Duvida</StepLabel>
        </Step>
      </Stepper>

      {formularios[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;
