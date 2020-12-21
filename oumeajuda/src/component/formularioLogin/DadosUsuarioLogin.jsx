import { Button, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";

import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import { useCookies } from "react-cookie";
import useErros from "../../hooks/useErros";

export default function DadosUsuarioLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  const [cookies, setCookie] = useCookies(["token"]);

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
    }).then((resp) => {
        if (resp.status === 200) {
          handleCookie("bla")
          console.log(resp)
          return resp;
        } else if (resp.status === 500){
          console.log("erro 500 - erro de aplicação")
          const error = new Error(resp.error);
          throw error;
        } else {
          console.log(resp.status + " - erro gerado")
          const error = new Error(resp.error);
          throw error;
        }
  
      }).then((json) => {
        console.log(json)
        return json;
      }).catch(err => {
        console.error(err);
        alert('Error logging in please try again');
      });
  };

  return (
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

    
  );
}

// const onSubmit = (event) => {
//   event.preventDefault();

//   const body = {
//     email: event.target[0].defaultValue,
//     senha: event.target[2].defaultValue
//   }
  
//   console.log(event.target[0].defaultValue) //email

//   console.log(event.target[2].defaultValue)

//   logar(body)
//   // alert('Authentication coming soon!');
// }

// const logar = async (body) => {
//   return await fetch("http://localhost:7000/login", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(body),
//   }).then((resp) => {
//       if (resp.status === 200) {
//         console.log(resp)
//         return resp;
//       } else if (resp.status === 500){
//         console.log("erro 500 - erro de aplicação")
//         const error = new Error(resp.error);
//         throw error;
//       } else {
//         console.log(resp.status + " - erro gerado")
//         const error = new Error(resp.error);
//         throw error;
//       }

//     }).then((json) => {
//       console.log(json)
//       return json;
//     }).catch(err => {
//       console.error(err);
//       alert('Error logging in please try again');
//     });
// };

// {/* <Button
//   type="submit"
//   variant="contained"
//   color="primary"
//   fullWidth
// >
//   LOGIN
// </Button> */}

let _criarLogin = (login) => {
  // return conectar(login);
};
      