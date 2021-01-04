import { Button, FormControlLabel, Switch, TextField } from "@material-ui/core";
import React, { useContext, useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";
import { withStyles } from "@material-ui/core/styles";

function DadosPessoais({ aoEnviar, getDados }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [celular, setCelular] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);
  const [checked, setChecked] = React.useState(false);
  
  const handleChangeCheckBox = (event) => {
    setChecked(event.target.checked);
  };
  
  const conectar = async (body) => {
    const usuarioId = getDados().usuarioId;
    if (usuarioId){
      return await fetch("http://localhost:7000/usuarios/" + usuarioId, {
        method: "PUT",
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
        })
     }
  };

  let alterarUsuario = () => {
    const body = {
      name: nome,
      lastname: sobrenome,
      type: check ? "M" : "A",
      phone: celular
      }
      
    return conectar(body);
  };

  const [check, setState] = React.useState(false);

  const handleChangeSelecao = (event) => {
    setState(!check);
  };

  return (
    <>
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          alterarUsuario().then(json => {
            console.log(json)
            console.log(aoEnviar)
            aoEnviar(json)
          });
        }
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
      <br></br>
      <br></br>
      <FormGroup>
        <Typography component="div">
          <h3>Selecione uma opção:</h3>
          <Grid component="label" container alignItems="center" spacing={2}>
            <Grid item>Aluno</Grid>
            <Grid item>
              <AntSwitch
                checked={check}
                onChange={handleChangeSelecao}
                name="selecao"
              />
            </Grid>
            <Grid item>Monitor</Grid>
          </Grid>
        </Typography>
      </FormGroup>
      
      <br></br>
      <br></br>
      <br></br>
      <FormControlLabel
        control={
        <Checkbox
          checked={checked}
          onChange={handleChangeCheckBox}
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />}
        label="Permito que meus dados sejam compartilhados com os monitores."
      />    

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Cadastrar
      </Button>
    </form>
    </>
  );
}

export default DadosPessoais;

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 40,
    height: 20,
    padding: 0,
    display: "flex"
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      borderRadius: 16 / 2,
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main
      }
    }
  },
  thumb: {
    width: 15,
    height: 15,
    boxShadow: "none",
    color: theme.palette.common.white,
  },
  track: {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.main
  },
  checked: {}
}))(Switch);
