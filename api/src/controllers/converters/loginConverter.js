exports.convertToLogin = (login) => {

    
    if(login.userId){
        return {
            user_id: login.userId,
            email: login.email ? login.email : null,
            psw: login.senha ? login.senha : null
            };
    }

    return {
            email: login.email ? login.email : null,
            psw: login.senha ? login.senha : null
        };
}

exports.convertToLoginDTO = (login) => {
    if(login.user_id){
        return {
            userId: login.user_id,
            email: login.email ? login.email : null,
            senha: login.psw ? login.psw : null
            };
    }

    return {
            email: login.email ? login.email : null,
            senha: login.psw ? login.psw : null
        };
}