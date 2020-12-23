const dateFormat = require("dateformat");

exports.convertToAjudaDTO = (ajuda) => {
  if (ajuda.help_id) {
    return {
      id: ajuda.help_id,
      title: ajuda.title ? ajuda.title : null,
      description: ajuda.description ? ajuda.description : null,
      userId: ajuda.user_id ? ajuda.user_id : null,
      allowPhoneNumber:
        ajuda.allow_phone_number === null
          ? null
          : convertBooleanMySQLFormat(ajuda.allow_phone_number),
      phoneNumber: ajuda.phone_number ? ajuda.phone_number : null,
      professorId: ajuda.professor_id ? ajuda.professor_id : null,
      languageId: ajuda.language_id ? ajuda.language_id : null,
      createdAt: ajuda.created_at
        ? dateFormat(ajuda.created_at, "dd-mm-yyyy hh:MM:ss")
        : null,
    };
  }

  return {
    title: ajuda.title ? ajuda.title : null,
    description: ajuda.description ? ajuda.description : null,
    userId: ajuda.user_id ? ajuda.user_id : null,
    allowPhoneNumber:
      ajuda.allow_phone_number === null
        ? null
        : convertBooleanMySQLFormat(ajuda.allow_phone_number),
    phoneNumber: ajuda.phone_number ? ajuda.phone_number : null,
    professorId: ajuda.professor_id ? ajuda.professor_id : null,
    languageId: ajuda.language_id ? ajuda.language_id : null,
    createdAt: ajuda.created_at
      ? dateFormat(ajuda.created_at, "dd-mm-yyyy hh:MM:ss")
      : null,
  };
};

exports.convertToAjuda = (ajudaDTO) => {
  console.log(ajudaDTO);
  if (ajudaDTO.id) {
    return {
      help_id: ajudaDTO.id,
      title: ajudaDTO.title,
      description: ajudaDTO.description,
      user_id: ajudaDTO.userId,
      allow_phone_number: ajudaDTO.allowPhoneNumber,
      phone_number: ajudaDTO.phoneNumber ? ajudaDTO.phoneNumber : null,
      professor_id: ajudaDTO.professorId ? ajudaDTO.professorId : null,
      language_id: ajudaDTO.languageId,
    };
  }

  return {
    title: ajudaDTO.title,
    description: ajudaDTO.description,
    user_id: ajudaDTO.userId,
    allow_phone_number: ajudaDTO.allowPhoneNumber,
    phone_number: ajudaDTO.phoneNumber ? ajudaDTO.phoneNumber : null,
    professor_id: ajudaDTO.professorId ? ajudaDTO.professorId : null,
    language_id: ajudaDTO.languageId,
  };
};

convertBooleanMySQLFormat = (value) => {
  if (value === 0) {
    return false;
  }

  return true;
};
