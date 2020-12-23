import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";

import { Typography } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { useCookies } from "react-cookie";
import useErros from "../../hooks/useErros";

export default function DadosUsuarioLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const [setCookie] = useCookies(["token"]);

  function handleCookie(token) {
    setCookie("token", token, {
      path: "/",
    });
  }

  const onSubmit = (event) => {
    event.preventDefault();
  
    const body = {
      email: event.target[0].defaultValue,
      senha: event.target[2].defaultValue
    }
  
    logar(body)
  }

  const logar = async (body) => {
    return await fetch("http://localhost:7000/login", {
      credentials: "same-origin",
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    })
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      } else if (resp.status === 500){
        const error = new Error(resp.error);
        alert('Erro de aplicação. Tente novamente mais tarde.');
        return error;
      } else {
        const error = new Error(resp.error);
        alert('Email ou senha incorretos. Tente novamente.');
        return error;
      }
    })
    .then((json) => {
      if(json.token){
        handleCookie(json.token)
      }
      
      return json;
    })
  };

  return (
    <>
    <br></br>
    <Typography variant="h4" component="h1" align="center">
      Acesse sua conta
    </Typography>
    <br></br>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          onSubmit(event)
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="e-mail"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        id="senha"
        label="senha"
        name="senha"
        required
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
 
      <Button type="submit" variant="contained" color="primary" fullWidth>
        ENTRAR
      </Button>
    </form>
</>
    
  );
}
      