function validarCelular(celular) {
  if (celular.length !== 11) {
    return { valido: false, texto: "Celular deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter de 4 a 72 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarDigitos(digitos) {
  if (digitos === 0) {
    return { valido: false, texto: "Campo deve ser preenchido" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCelular, validarSenha, validarDigitos };
