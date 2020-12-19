exports.convertToLinguagemDTO = (linguagem) => {
  if (linguagem.language_id) {
    return {
      languageId: linguagem.language_id,
      languageName: linguagem.language_name ? linguagem.language_name : null,
    };
  }

  return {
    languageName: linguagem.language_name ? linguagem.language_name : null,
  };
};

exports.converterToLinguagem = (linguagemDTO) => {
  if (linguagemDTO.languageId) {
    return {
      language_id: linguagemDTO.id,
      language_name: linguagemDTO.languageName,
    };
  }

  return {
    language_name: linguagemDTO.languageName,
  };
};
