import { Step, StepLabel, Stepper } from "@material-ui/core";
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

  function coletarDados(dados) {
    console.log("dados coletados");
    setDados({ ...dadosColetados, ...dados });
    console.log(dadosColetados);
    proximo();
  }

  function getDados() {
    return dadosColetados;
  }

  function proximo() {
    console.log("proximo");
    setEtapaAtual(etapaAtual + 1);
  }

  const formularios = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} getDados={getDados} />,
    <h3>Obrigado pelo cadastro</h3>,
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
