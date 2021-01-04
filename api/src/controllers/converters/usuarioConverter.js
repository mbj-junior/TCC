exports.convertToUsuarioDTO = (usuario) => {
  if (usuario.user_id) {
    return {
      id: usuario.user_id,
      name: usuario.name ? usuario.name : null,
      lastname: usuario.lastname ? usuario.lastname : null,
      type: usuario.type ? usuario.type : null,
      phone: usuario.phone ? usuario.phone : null,
      createdAt: usuario.created_at ? usuario.created_at : null,
    };
  }

  return {
    name: usuario.name ? usuario.name : null,
    lastname: usuario.lastname ? usuario.lastname : null,
    type: usuario.type ? usuario.type : null,
    phone: usuario.phone ? usuario.phone : null,
    createdAt: usuario.created_at ? usuario.created_at : null,
  };
};

exports.convertToUsuario = (usuarioDTO) => {
  if (usuarioDTO.id) {
    return {
      user_id: usuarioDTO.id,
      name: usuarioDTO.name,
      lastname: usuarioDTO.lastname,
      type: usuarioDTO.type,
      phone: usuarioDTO.phone ? usuarioDTO.phone : null,
    };
  }

  return {
    name: usuarioDTO.name,
    lastname: usuarioDTO.lastname,
    type: usuarioDTO.type,
    phone: usuarioDTO.phone ? usuarioDTO.phone : null,
  };
};
