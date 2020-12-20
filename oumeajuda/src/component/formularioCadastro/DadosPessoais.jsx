import React, { useState, useContext } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({ aoEnviar }) {
  console.log(aoEnviar)
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [celular, setCelular] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // if (possoEnviar()) {
        //   aoEnviar({ nome, sobrenome, celular, promocoes });
        // }
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        id="nome"
        name="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.sobrenome.valido}
        helperText={erros.sobrenome.texto}
        id="sobrenome"
        name="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={celular}
        onChange={(event) => {
          setCelular(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.celular.valido}
        helperText={erros.celular.texto}
        id="celular"
        name="celular"
        label="Celular"
        variant="outlined"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Professor"
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
