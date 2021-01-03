import { Button, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

// const conectar = async (body) => {
//   return await fetch("http://localhost:7000/login/new", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body),
//   })
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((json) => {
//       return json;
//     });
// };

// let _criarLogin = (login) => {
//   return conectar(login);
// };

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  let _criarLogin = (login) => {
    return conectar(login);
  };
  
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

        if (resp.status === 200) {
          return resp.json();
        } else if (resp.status === 500){
          const error = new Error(resp.error);
          alert('Erro de aplicação. Tente novamente mais tarde.');
          return error;
        }
        
      })
      .then((json) => {
        return json;
      });
  };
  
  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          _criarLogin({ email, senha }).then(json=>{
            aoEnviar({ email, senha, usuarioId: json.usuario.id})
          });
          
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
      
      <br></br>
      <br></br>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        CADASTRO
      </Button>
    </form>
    </>
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
