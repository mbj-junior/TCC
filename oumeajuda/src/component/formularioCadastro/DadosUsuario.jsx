import { Button, TextField } from "@material-ui/core";
import React, { useState, useContext } from "react";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

const conectar = async (body) => {
  return await fetch("http://localhost:7000/login/new", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
  })
    .then((resp) => {
      return resp.json();
    })
    .then((json) => {
      return json;
    });
};

let _criarLogin = (login) => {
  return conectar(login);
};

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (possoEnviar()) {
          let response = _criarLogin({ email, senha });
          // if(response){
            // setUsuarioId(response.usuario[0].id)
            // console.log(usuarioId)
          //   aoEnviar({...{ email, senha }}, ...response.usuario) ;
          // }
          aoEnviar({ email, senha })
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
        CADASTRO
      </Button>
    </form>

    
  );
}

export default DadosUsuario;



      // {/* <Button
      //   type="submit"
      //   variant="contained"
      //   color="primary"
      //   fullWidth
      // >
      //   LOGIN
      // </Button> */}