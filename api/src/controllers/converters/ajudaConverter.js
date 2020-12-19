exports.convertToAjudaDTO = (ajuda) => {
  return {};
};

exports.convertToAjuda = (ajudaDTO) => {
  
  if (ajudaDTO.id) {
    return {
      id: ajudaDTO.id,
      title: ajudaDTO.title,
      description: ajudaDTO.description,
      user_id: ajudaDTO.userId,
      allow_phone_number: ajudaDTO.allowPhoneNumber,
      professor_id: ajudaDTO.professorId ? ajudaDTO.professorId : null,
      language_id: ajudaDTO.languageId,
    };
  }
  
  return {
    title: ajudaDTO.title,
    description: ajudaDTO.description,
    user_id: ajudaDTO.userId,
    allow_phone_number: ajudaDTO.allowPhoneNumber,
    professor_id: ajudaDTO.professorId ? ajudaDTO.professorId : null,
    language_id: ajudaDTO.languageId,
  };
};
